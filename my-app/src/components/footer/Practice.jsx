import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useAuth } from '../../context/useAuth';
import { saveCode, loadAllCodes, saveSolvedIds, loadSolvedIds } from '../../services/practiceService';
import { PRACTICE_QUESTIONS, buildStarterForLanguage } from '../../data/practiceQuestions';
import toast from 'react-hot-toast';

// ─── Language Config ───────────────────────────────────────────────
const LANGUAGES = {
  javascript: { id: 'javascript', label: 'JavaScript', piston: 'javascript', ext: 'js', dot: '#fbbf24', browser: true },
  python:     { id: 'python',     label: 'Python 3',   piston: 'python',     ext: 'py', dot: '#3b82f6', browser: false },
  java:       { id: 'java',       label: 'Java',       piston: 'java',       ext: 'java', dot: '#f97316', browser: false },
  cpp:        { id: 'cpp',        label: 'C++',         piston: 'c++',        ext: 'cpp', dot: '#60a5fa', browser: false },
  c:          { id: 'c',          label: 'C',           piston: 'c',          ext: 'c',   dot: '#a78bfa', browser: false },
};

const STARTERS = Object.fromEntries(
  PRACTICE_QUESTIONS.map((problem) => [
    problem.id,
    Object.fromEntries(
      Object.keys(LANGUAGES).map((languageId) => [
        languageId,
        buildStarterForLanguage(problem, languageId),
      ])
    ),
  ])
);

const PROBLEMS = PRACTICE_QUESTIONS;

const DIFFICULTY_COLOR = {
  Easy:   { color: '#34d399', bg: 'rgba(52,211,153,0.1)',  border: 'rgba(52,211,153,0.25)' },
  Medium: { color: '#fbbf24', bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.25)' },
  Hard:   { color: '#f87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.25)' },
};

function runJSCode(userCode, testCases) {
  return testCases.map((tc) => {
    try {
      const wrapped = new Function(`${userCode}\nreturn ${tc.fn};`);
      const result = wrapped();
      const resultStr = JSON.stringify(result);
      const passed = resultStr === tc.expected;
      return { fn: tc.fn, expected: tc.expected, got: resultStr, passed, error: null };
    } catch (err) {
      return { fn: tc.fn, expected: tc.expected, got: null, passed: false, error: err.message };
    }
  });
}

async function runPistonCode(code, lang) {
  const res = await fetch('https://emkc.org/api/v2/piston/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      language: lang.piston,
      version: '*',
      files: [{ name: `main.${lang.ext}`, content: code }],
    }),
  });
  const data = await res.json();
  return {
    stdout: data?.run?.stdout || '',
    stderr: data?.run?.stderr || data?.compile?.stderr || '',
    code: data?.run?.code ?? 0,
  };
}

// ─── Main Component ────────────────────────────────────────────────
export default function Practice() {
  const { user } = useAuth();
  const [selectedId, setSelectedId]   = useState(1);
  const [lang, setLang]               = useState('javascript');
  const [codes, setCodes]             = useState(() => {
    const init = {};
    PROBLEMS.forEach(p => {
      init[p.id] = {};
      Object.keys(LANGUAGES).forEach(l => { init[p.id][l] = STARTERS[p.id][l]; });
    });
    return init;
  });
  const [results, setResults]         = useState(null);
  const [stdout, setStdout]           = useState('');
  const [stderr, setStderr]           = useState('');
  const [running, setRunning]         = useState(false);
  const [submitted, setSubmitted]     = useState(false);
  const [filter, setFilter]           = useState({ difficulty: 'All', category: 'All' });
  const [solvedIds, setSolvedIds]     = useState(new Set());
  const [activeTab, setActiveTab]     = useState('description');
  const [dbLoading, setDbLoading]     = useState(true);
  const [saveStatus, setSaveStatus]   = useState('idle'); // idle | saving | saved | error
  const textareaRef = useRef(null);
  const saveTimer   = useRef(null);
  const saveToastId = useRef('practice-save');

  // ── Load saved codes + solved IDs from Firestore on mount ──────
  useEffect(() => {
    if (!user?.uid) { setDbLoading(false); return; }
    setDbLoading(true);
    Promise.all([loadAllCodes(user.uid), loadSolvedIds(user.uid)])
      .then(([savedCodes, savedSolved]) => {
        setCodes(prev => {
          const merged = { ...prev };
          Object.entries(savedCodes).forEach(([pid, langs]) => {
            if (merged[pid]) {
              Object.entries(langs).forEach(([lid, code]) => {
                if (code !== undefined) merged[pid][lid] = code;
              });
            }
          });
          return merged;
        });
        setSolvedIds(savedSolved);
      })
      .catch(console.error)
      .finally(() => setDbLoading(false));
  }, [user?.uid]);

  // ── Debounced auto-save on code change ─────────────────────────
  const debounceSave = useCallback((problemId, langId, code) => {
    if (!user?.uid) return;
    clearTimeout(saveTimer.current);
    setSaveStatus('saving');
    toast.loading('Saving code…', { id: saveToastId.current });
    saveTimer.current = setTimeout(async () => {
      try {
        await saveCode(user.uid, problemId, langId, code);
        setSaveStatus('saved');
        toast.success('Code saved', { id: saveToastId.current });
        setTimeout(() => setSaveStatus('idle'), 2000);
      } catch {
        setSaveStatus('error');
        toast.error('Save failed', { id: saveToastId.current });
      }
    }, 1500);
  }, [user?.uid]);

  const problem    = PROBLEMS.find(p => p.id === selectedId);
  const langCfg    = LANGUAGES[lang];
  const currentCode = codes[selectedId]?.[lang] || '';
  const filtered    = PROBLEMS.filter(p => {
    return (filter.difficulty === 'All' || p.difficulty === filter.difficulty) &&
           (filter.category   === 'All' || p.category   === filter.category);
  });

  const setCode = (val) => {
    setCodes(prev => ({ ...prev, [selectedId]: { ...prev[selectedId], [lang]: val } }));
    debounceSave(selectedId, lang, val);
  };

  const handleRun = useCallback(async () => {
    setRunning(true); setSubmitted(false); setResults(null); setStdout(''); setStderr('');
    if (langCfg.browser) {
      setTimeout(() => {
        const res = runJSCode(currentCode, problem.testCases);
        setResults(res); setRunning(false); setActiveTab('results');
      }, 300);
    } else {
      try {
        const out = await runPistonCode(currentCode, langCfg);
        setStdout(out.stdout); setStderr(out.stderr);
        setRunning(false); setActiveTab('results');
      } catch {
        setStderr('Network error: Could not connect to code execution server.'); setRunning(false); setActiveTab('results');
      }
    }
  }, [currentCode, problem, langCfg]);

  const handleSubmit = useCallback(async () => {
    setRunning(true); setSubmitted(false); setResults(null); setStdout(''); setStderr('');
    if (langCfg.browser) {
      setTimeout(() => {
        const res = runJSCode(currentCode, problem.testCases);
        setResults(res); setRunning(false); setSubmitted(true); setActiveTab('results');
        if (res.every(r => r.passed)) {
          const next = new Set([...solvedIds, selectedId]);
          setSolvedIds(next);
          if (user?.uid) {
            saveSolvedIds(user.uid, next)
              .then(() => toast.success('Progress saved', { id: 'practice-progress' }))
              .catch((e) => {
                console.error(e);
                toast.error('Progress save failed', { id: 'practice-progress' });
              });
          }
        }
      }, 400);
    } else {
      try {
        const out = await runPistonCode(currentCode, langCfg);
        setStdout(out.stdout); setStderr(out.stderr);
        setRunning(false); setSubmitted(true); setActiveTab('results');
        if (!out.stderr && out.code === 0) {
          const next = new Set([...solvedIds, selectedId]);
          setSolvedIds(next);
          if (user?.uid) {
            saveSolvedIds(user.uid, next)
              .then(() => toast.success('Progress saved', { id: 'practice-progress' }))
              .catch((e) => {
                console.error(e);
                toast.error('Progress save failed', { id: 'practice-progress' });
              });
          }
        }
      } catch {
        setStderr('Network error.'); setRunning(false);
      }
    }
  }, [currentCode, problem, langCfg, selectedId, solvedIds, user]);

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = textareaRef.current;
      const s = ta.selectionStart, end = ta.selectionEnd;
      const next = currentCode.substring(0, s) + '  ' + currentCode.substring(end);
      setCode(next);
      setTimeout(() => { ta.selectionStart = ta.selectionEnd = s + 2; }, 0);
    }
  };

  const allPassed = results && results.every(r => r.passed);
  const dc = DIFFICULTY_COLOR[problem.difficulty];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
        .practice-root { display:flex; height:calc(100vh - 64px); background: #f8faff; font-family:'Inter',sans-serif; overflow:hidden; }
        .practice-sidebar { width:270px; flex-shrink:0; background: #ffffff; border-right:1px solid rgba(255,255,255,0.07); display:flex; flex-direction:column; overflow:hidden; }
        .sidebar-header { padding:18px 16px 12px; border-bottom: 1px solid #e5e7eb; }
        .sidebar-title { font-size:0.95rem; font-weight:700; color: #1e1b4b; margin:0 0 12px; }
        .filter-select { width:100%; padding:7px 10px; background: #ffffff; border: 1px solid #e5e7eb; border-radius:8px; color: #374151; font-size:0.8rem; font-family:'Inter',sans-serif; outline:none; cursor:pointer; margin-bottom:6px; }
        .filter-select option { background:#ffffff; }
        .problem-list { flex:1; overflow-y:auto; padding:8px; }
        .problem-list::-webkit-scrollbar { width:3px; }
        .problem-list::-webkit-scrollbar-thumb { background: rgba(79,70,229,0.08); border-radius:2px; }
        .problem-item { display:flex; align-items:center; gap:8px; padding:9px 10px; border-radius:9px; cursor:pointer; transition:all 0.2s; margin-bottom:3px; border:1px solid transparent; }
        .problem-item:hover { background: #ffffff; }
        .problem-item.active { background: rgba(79,70,229,0.06); border-color:rgba(124,58,237,0.25); }
        .problem-num { font-size:0.7rem; color: #9ca3af; font-family:'Fira Code',monospace; min-width:20px; }
        .problem-item-title { flex:1; font-size:0.8rem; font-weight:500; color: #374151; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .problem-item.active .problem-item-title { color: #1e1b4b; }
        .diff-badge { font-size:0.62rem; font-weight:700; padding:2px 7px; border-radius:100px; flex-shrink:0; }
        .solved-check { font-size:0.7rem; color:#34d399; }
        .practice-main { flex:1; display:flex; overflow:hidden; }
        .desc-panel { width:42%; flex-shrink:0; border-right:1px solid rgba(255,255,255,0.07); display:flex; flex-direction:column; overflow:hidden; }
        .desc-tabs { display:flex; padding:0 16px; border-bottom: 1px solid #e5e7eb; background: #ffffff; flex-shrink:0; }
        .desc-tab { padding:12px 14px; font-size:0.83rem; font-weight:500; color: #6b7280; cursor:pointer; border-bottom:2px solid transparent; transition:all 0.2s; background:none; border-top:none; border-left:none; border-right:none; font-family:'Inter',sans-serif; }
        .desc-tab:hover { color: #374151; }
        .desc-tab.active { color: #4f46e5; border-bottom-color: #4f46e5; }
        .desc-scroll { flex:1; overflow-y:auto; padding:20px 20px 40px; }
        .desc-scroll::-webkit-scrollbar { width:3px; }
        .desc-scroll::-webkit-scrollbar-thumb { background: rgba(79,70,229,0.08); border-radius:2px; }
        .problem-title-row { display:flex; align-items:center; gap:10px; margin-bottom:10px; flex-wrap:wrap; }
        .problem-main-title { font-size:1.2rem; font-weight:800; color: #1e1b4b; margin:0; letter-spacing:-0.02em; }
        .problem-tags-row { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:18px; }
        .tag-chip { padding:3px 10px; border-radius:100px; font-size:0.68rem; font-weight:500; background: rgba(79,70,229,0.08); border: 1px solid rgba(79,70,229,0.2); color:rgba(167,139,250,0.8); }
        .desc-body { font-size:0.86rem; color: #374151; line-height:1.75; margin-bottom:22px; white-space:pre-wrap; }
        .desc-body code { background: rgba(79,70,229,0.08); border: 1px solid rgba(79,70,229,0.2); border-radius:4px; padding:1px 6px; font-family:'Fira Code',monospace; font-size:0.8rem; color: #4f46e5; }
        .desc-body strong { color: #374151; }
        .section-label { font-size:0.72rem; font-weight:600; color: #9ca3af; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:8px; }
        .example-box { background: #ffffff; border: 1px solid #e5e7eb; border-radius:10px; padding:12px 14px; margin-bottom:10px; font-family:'Fira Code',monospace; font-size:0.78rem; }
        .example-row { display:flex; gap:8px; margin-bottom:4px; align-items:flex-start; }
        .example-key { color: #9ca3af; min-width:70px; font-size:0.72rem; }
        .example-val { color: #374151; word-break:break-all; }
        .example-explain { font-size:0.72rem; color: #6b7280; margin-top:6px; font-family:'Inter',sans-serif; }
        .constraints-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:5px; }
        .constraints-list li { font-size:0.78rem; color: #6b7280; font-family:'Fira Code',monospace; display:flex; align-items:center; gap:8px; }
        .constraints-list li::before { content:'•'; color: #4f46e5; }
        .results-inner { display:flex; flex-direction:column; gap:12px; }
        .verdict-banner { padding:12px 16px; border-radius:10px; font-size:0.92rem; font-weight:700; display:flex; align-items:center; gap:8px; }
        .verdict-pass { background:rgba(52,211,153,0.08); border:1px solid rgba(52,211,153,0.25); color:#34d399; }
        .verdict-fail { background:rgba(248,113,113,0.08); border:1px solid rgba(248,113,113,0.25); color:#f87171; }
        .test-card { background: #ffffff; border: 1px solid #e5e7eb; border-radius:10px; padding:12px 14px; font-family:'Fira Code',monospace; font-size:0.76rem; }
        .test-card-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; }
        .test-label { font-family:'Inter',sans-serif; font-size:0.78rem; font-weight:600; color: #6b7280; }
        .test-pass { color:#34d399; font-size:0.8rem; }
        .test-fail { color:#f87171; font-size:0.8rem; }
        .test-row { display:flex; gap:8px; margin-top:4px; }
        .test-key { color: #9ca3af; min-width:62px; }
        .test-val { color: #374151; word-break:break-all; }
        .test-val.wrong { color:#f87171; }
        .test-val.right { color:#34d399; }
        .test-error { color:#f87171; margin-top:5px; font-size:0.73rem; word-break:break-all; }
        .stdout-box { background:rgba(0,0,0,0.3); border: 1px solid #e5e7eb; border-radius:10px; padding:14px; font-family:'Fira Code',monospace; font-size:0.8rem; color:rgba(220,255,220,0.8); white-space:pre-wrap; word-break:break-all; max-height:260px; overflow-y:auto; }
        .stderr-box { background:rgba(248,113,113,0.05); border:1px solid rgba(248,113,113,0.2); border-radius:10px; padding:14px; font-family:'Fira Code',monospace; font-size:0.78rem; color:#fca5a5; white-space:pre-wrap; word-break:break-all; max-height:200px; overflow-y:auto; }
        .editor-panel { flex:1; display:flex; flex-direction:column; overflow:hidden; }
        .editor-toolbar { display:flex; align-items:center; justify-content:space-between; padding:8px 14px; border-bottom: 1px solid #e5e7eb; background:rgba(0,0,0,0.2); flex-shrink:0; gap:10px; }
        .lang-left { display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
        .lang-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
        .lang-select { padding:5px 10px; background: #ffffff; border: 1px solid #e5e7eb; border-radius:8px; color: #1e1b4b; font-size:0.82rem; font-family:'Inter',sans-serif; outline:none; cursor:pointer; transition:border-color 0.2s; }
        .lang-select:focus { border-color:rgba(139,92,246,0.5); }
        .lang-select option { background:#ffffff; }
        .btn-reset { padding:4px 10px; background:none; border: 1px solid #e5e7eb; border-radius:6px; color: #6b7280; font-size:0.72rem; cursor:pointer; font-family:'Inter',sans-serif; transition:all 0.2s; }
        .btn-reset:hover { border-color:rgba(248,113,113,0.3); color:#f87171; }
        .editor-actions { display:flex; gap:8px; flex-shrink:0; }
        .btn-run { padding:7px 18px; background: #ffffff; border: 1px solid #e5e7eb; border-radius:8px; color: #374151; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:'Inter',sans-serif; display:flex; align-items:center; gap:5px; }
        .btn-run:hover { background:rgba(255,255,255,0.1); color: #1e1b4b; }
        .btn-submit { padding:7px 20px; background:linear-gradient(135deg, #4f46e5, #0ea5e9); border:none; border-radius:8px; color: #1e1b4b; font-size:0.82rem; font-weight:700; cursor:pointer; transition:all 0.2s; font-family:'Inter',sans-serif; box-shadow:0 2px 12px rgba(124,58,237,0.3); display:flex; align-items:center; gap:5px; }
        .btn-submit:hover { transform:translateY(-1px); box-shadow:0 4px 20px rgba(124,58,237,0.5); }
        .btn-submit:disabled,.btn-run:disabled { opacity:0.5; cursor:not-allowed; transform:none; }
        .editor-wrap { flex:1; display:flex; overflow:hidden; }
        .line-numbers { width:42px; flex-shrink:0; background:rgba(0,0,0,0.15); border-right:1px solid rgba(255,255,255,0.04); overflow:hidden; display:flex; flex-direction:column; align-items:center; font-family:'Fira Code',monospace; font-size:0.78rem; color: #9ca3af; user-select:none; padding-top:17px; }
        .code-textarea { flex:1; padding:14px 18px; background:transparent; border:none; outline:none; color:rgba(220,220,255,0.85); font-family:'Fira Code',monospace; font-size:0.83rem; line-height:1.6; resize:none; tab-size:2; overflow-y:auto; caret-color: #4f46e5; }
        .code-textarea::-webkit-scrollbar { width:3px; }
        .code-textarea::-webkit-scrollbar-thumb { background: rgba(79,70,229,0.08); border-radius:2px; }
        .code-textarea::selection { background: rgba(79,70,229,0.06); }
        .editor-status { padding:6px 14px; border-top: 1px solid #e5e7eb; background:rgba(0,0,0,0.15); display:flex; align-items:center; gap:8px; flex-shrink:0; }
        .status-dot { width:6px; height:6px; border-radius:50%; }
        .status-text { font-size:0.72rem; color: #9ca3af; }
        .api-note { font-size:0.72rem; color: #9ca3af; font-style:italic; }
        .save-status { font-size:0.7rem; font-weight:500; display:flex; align-items:center; gap:4px; }
        .save-saving { color:rgba(167,139,250,0.6); }
        .save-saved  { color:#34d399; }
        .save-error  { color:#f87171; }
        .db-loading-overlay { position:fixed; inset:0; background: rgba(79,70,229,0.04); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:999; gap:16px; backdrop-filter:blur(8px); }
        .db-loading-spinner { width:40px; height:40px; border:3px solid rgba(139,92,246,0.2); border-top-color: #4f46e5; border-radius:50%; animation:spin 0.8s linear infinite; }
        .db-loading-text { color: #6b7280; font-size:0.9rem; font-family:'Inter',sans-serif; }
        @keyframes spin { to { transform:rotate(360deg); } }
        .spinner { display:inline-block; width:11px; height:11px; border:2px solid rgba(255,255,255,0.2); border-top-color: #4f46e5; border-radius:50%; animation:spin 0.6s linear infinite; }
        @media (max-width:900px) {
          .practice-root { flex-direction:column; height:auto; overflow:auto; }
          .practice-sidebar { width:100%; border-right:none; border-bottom: 1px solid #e5e7eb; }
          .problem-list { max-height:180px; }
          .practice-main { flex-direction:column; }
          .desc-panel { width:100%; border-right:none; border-bottom: 1px solid #e5e7eb; max-height:380px; }
          .editor-panel { min-height:380px; }
        }
      `}</style>

      {/* Firestore loading overlay */}
      {dbLoading && (
        <div className="db-loading-overlay">
          <div className="db-loading-spinner" />
          <p className="db-loading-text">Loading your saved code...</p>
        </div>
      )}

      <div className="practice-root">
        {/* Sidebar */}
        <aside className="practice-sidebar">
          <div className="sidebar-header">
            <p className="sidebar-title">🧩 Problems</p>
            <select className="filter-select" value={filter.difficulty} onChange={e => setFilter(f => ({ ...f, difficulty: e.target.value }))}>
              {['All','Easy','Medium','Hard'].map(d => <option key={d}>{d}</option>)}
            </select>
            <select className="filter-select" value={filter.category} onChange={e => setFilter(f => ({ ...f, category: e.target.value }))}>
              {['All', ...new Set(PROBLEMS.map(p => p.category))].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="problem-list">
            {filtered.map(p => {
              const dc2 = DIFFICULTY_COLOR[p.difficulty];
              return (
                <div key={p.id} className={`problem-item${selectedId === p.id ? ' active' : ''}`}
                  onClick={() => { setSelectedId(p.id); setResults(null); setStdout(''); setStderr(''); setSubmitted(false); setActiveTab('description'); }}>
                  <span className="problem-num">{String(p.id).padStart(2,'0')}</span>
                  <span className="problem-item-title">{p.title}</span>
                  {solvedIds.has(p.id) && <span className="solved-check">✓</span>}
                  <span className="diff-badge" style={{ color: dc2.color, background: dc2.bg, border: `1px solid ${dc2.border}` }}>{p.difficulty[0]}</span>
                </div>
              );
            })}
          </div>
        </aside>

        <div className="practice-main">
          {/* Description Panel */}
          <div className="desc-panel">
            <div className="desc-tabs">
              <button className={`desc-tab${activeTab === 'description' ? ' active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
              <button className={`desc-tab${activeTab === 'results' ? ' active' : ''}`} onClick={() => setActiveTab('results')}>
                Output {results ? `(${results.filter(r => r.passed).length}/${results.length})` : stdout ? '✓' : ''}
              </button>
            </div>
            <div className="desc-scroll">
              {activeTab === 'description' ? (
                <>
                  <div className="problem-title-row">
                    <h1 className="problem-main-title">{problem.id}. {problem.title}</h1>
                    <span className="diff-badge" style={{ color: dc.color, background: dc.bg, border: `1px solid ${dc.border}`, padding: '4px 12px', fontSize: '0.73rem' }}>{problem.difficulty}</span>
                  </div>
                  <div className="problem-tags-row">
                    {problem.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
                  </div>
                  <div className="desc-body" dangerouslySetInnerHTML={{ __html: problem.description.replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>') }} />
                  <p className="section-label">Examples</p>
                  {problem.examples.map((ex, i) => (
                    <div key={i} className="example-box">
                      <div className="example-row"><span className="example-key">Input:</span><span className="example-val">{ex.input}</span></div>
                      <div className="example-row"><span className="example-key">Output:</span><span className="example-val">{ex.output}</span></div>
                      {ex.explanation && <div className="example-explain">💡 {ex.explanation}</div>}
                    </div>
                  ))}
                  <p className="section-label" style={{ marginTop: 20 }}>Constraints</p>
                  <ul className="constraints-list">
                    {problem.constraints.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </>
              ) : (
                <div className="results-inner">
                  {!results && !stdout && !stderr ? (
                    <p style={{ color: '#9ca3af', fontSize: '0.88rem', textAlign: 'center', marginTop: 40 }}>Run your code to see output here.</p>
                  ) : results ? (
                    <>
                      {submitted && <div className={`verdict-banner ${allPassed ? 'verdict-pass' : 'verdict-fail'}`}>{allPassed ? '🎉 Accepted — All tests passed!' : '✗ Wrong Answer — Some tests failed.'}</div>}
                      {results.map((r, i) => (
                        <div key={i} className="test-card" style={{ borderColor: r.passed ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)' }}>
                          <div className="test-card-header">
                            <span className="test-label">Test {i + 1}</span>
                            {r.passed ? <span className="test-pass">✓ Passed</span> : <span className="test-fail">✗ Failed</span>}
                          </div>
                          <div className="test-row"><span className="test-key">Input:</span><span className="test-val">{r.fn}</span></div>
                          <div className="test-row"><span className="test-key">Expected:</span><span className={`test-val ${r.passed ? 'right' : ''}`}>{r.expected}</span></div>
                          {!r.error ? <div className="test-row"><span className="test-key">Got:</span><span className={`test-val ${r.passed ? 'right' : 'wrong'}`}>{r.got}</span></div>
                            : <div className="test-error">Error: {r.error}</div>}
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {submitted && <div className={`verdict-banner ${!stderr ? 'verdict-pass' : 'verdict-fail'}`}>{!stderr ? '🎉 Code ran successfully!' : '✗ Runtime/Compile Error'}</div>}
                      {stdout && <><p className="section-label">stdout</p><div className="stdout-box">{stdout}</div></>}
                      {stderr && <><p className="section-label" style={{ color: '#f87171' }}>stderr / error</p><div className="stderr-box">{stderr}</div></>}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Editor Panel */}
          <div className="editor-panel">
            <div className="editor-toolbar">
              <div className="lang-left">
                <div className="lang-dot" style={{ background: langCfg.dot }}></div>
                <select className="lang-select" value={lang} onChange={e => { setLang(e.target.value); setResults(null); setStdout(''); setStderr(''); setSubmitted(false); }}>
                  {Object.values(LANGUAGES).map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
                </select>
                <button className="btn-reset" onClick={() => { setCode(STARTERS[selectedId][lang]); setResults(null); setStdout(''); setStderr(''); setSubmitted(false); }}>↺ Reset</button>
                {!langCfg.browser && <span className="api-note">via Piston API</span>}
              </div>
              <div className="editor-actions">
                <button className="btn-run" onClick={handleRun} disabled={running}>{running ? <span className="spinner" /> : '▶'} Run</button>
                <button className="btn-submit" onClick={handleSubmit} disabled={running}>{running ? <span className="spinner" /> : '⬆'} Submit</button>
              </div>
            </div>

            <div className="editor-wrap">
              <div className="line-numbers">
                {currentCode.split('\n').map((_, i) => (
                  <span key={i} style={{ display: 'block', lineHeight: '1.6', fontSize: '0.78rem', width: '100%', textAlign: 'center' }}>{i + 1}</span>
                ))}
              </div>
              <textarea ref={textareaRef} className="code-textarea" value={currentCode}
                onChange={e => setCode(e.target.value)}
                onKeyDown={handleKeyDown} spellCheck={false} autoCapitalize="off" autoCorrect="off" />
            </div>

            <div className="editor-status">
              <div className="status-dot" style={{ background: results ? (allPassed ? '#34d399' : '#f87171') : stderr ? '#f87171' : stdout ? '#34d399' : 'rgba(255,255,255,0.15)' }}></div>
              <span className="status-text">
                {running ? (langCfg.browser ? 'Running...' : 'Sending to server...') :
                  results ? (allPassed ? `All ${results.length} passed` : `${results.filter(r => !r.passed).length} failing`) :
                  stderr ? 'Error' : stdout ? 'Done' : 'Ready'}
              </span>
              {saveStatus === 'saving' && <span className="save-status save-saving"><span className="spinner" style={{width:8,height:8}} /> Saving...</span>}
              {saveStatus === 'saved'  && <span className="save-status save-saved">✓ Saved</span>}
              {saveStatus === 'error'  && <span className="save-status save-error">⚠ Save failed</span>}
              {!user && <span className="save-status" style={{color: '#9ca3af'}}>Sign in to save</span>}
              <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: '#9ca3af', fontFamily: "'Fira Code',monospace" }}>
                {currentCode.split('\n').length} lines · {langCfg.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
