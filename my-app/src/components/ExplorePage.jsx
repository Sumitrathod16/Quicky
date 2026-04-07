import React, { useState } from "react";

function CodeOutputContainer({ title, accent, accentBg, code, children }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-card-title-row">
          <div className="project-dot" style={{ background: accent }}></div>
          <h2 className="project-card-title">{title}</h2>
        </div>
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? '✓ Copied' : '⎘ Copy'}
        </button>
      </div>

      <div className="project-body">
        <div className="code-panel">
          <div className="code-panel-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="code-panel-label">code</span>
          </div>
          <pre className="code-pre"><code>{code}</code></pre>
        </div>

        <div className="output-panel">
          <div className="output-panel-header">
            <span className="output-label">▶ Output</span>
          </div>
          <div className="output-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExploreWithCodeOutput() {
  const [count, setCount] = useState(0);
  const counterCode = `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`;

  const [tasks, setTasks] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const todoCode = `import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => {
        setTasks([...tasks, { text: input, done: false }]);
        setInput('');
      }}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} onClick={() => {
            setTasks(tasks.map((task, idx) =>
              idx === i ? { ...task, done: !task.done } : task));
          }} style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`;

  const [color, setColor] = useState("#7c3aed");
  const colorCode = `import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#7c3aed');
  return (
    <div>
      <input type="color" value={color}
        onChange={e => setColor(e.target.value)} />
      <div style={{
        width: 80, height: 80,
        background: color, borderRadius: 16
      }} />
    </div>
  );
}`;

  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "It's not whether you get knocked down, it's whether you get up.",
    "Code is like humor. When you have to explain it, it's bad.",
  ];
  const [quote, setQuote] = useState(quotes[0]);
  const quoteCode = `import React, { useState } from 'react';

const quotes = ['quote1', 'quote2', 'quote3'];

function RandomQuote() {
  const [quote, setQuote] = useState(quotes[0]);
  return (
    <div>
      <p>{quote}</p>
      <button onClick={() =>
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
      }>
        New Quote
      </button>
    </div>
  );
}`;

  const [dark, setDark] = useState(false);
  const themeCode = `import React, { useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <div style={{
      background: dark ? '#1a1a2e' : '#f0f0f0',
      color: dark ? '#fff' : '#111',
      padding: 20, borderRadius: 12
    }}>
      <button onClick={() => setDark(d => !d)}>
        {dark ? '☀ Switch to Light' : '🌙 Switch to Dark'}
      </button>
      <p>Current: {dark ? 'Dark' : 'Light'} Theme</p>
    </div>
  );
}`;

  const projects = [
    {
      title: 'Mini Project: Counter',
      accent: '#a78bfa',
      accentBg: 'rgba(167,139,250,0.08)',
      code: counterCode,
      output: (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 16px', color: '#a78bfa' }}>{count}</h2>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            <button className="out-btn" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.3)' }} onClick={() => setCount(count + 1)}>+ Increment</button>
            <button className="out-btn" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.3)' }} onClick={() => setCount(count - 1)}>− Decrement</button>
            <button className="out-btn" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }} onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>
      ),
    },
    {
      title: 'Mini Project: To-Do List',
      accent: '#34d399',
      accentBg: 'rgba(52,211,153,0.08)',
      code: todoCode,
      output: (
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <input
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && todoInput.trim()) { setTasks([...tasks, { text: todoInput, done: false }]); setTodoInput(''); }}}
              placeholder="Add a task..."
              style={{ flex: 1, padding: '10px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, color: '#fff', fontSize: '0.9rem', fontFamily: 'Inter, sans-serif', outline: 'none' }}
            />
            <button className="out-btn" style={{ background: 'rgba(52,211,153,0.15)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' }} onClick={() => { if (!todoInput.trim()) return; setTasks([...tasks, { text: todoInput, done: false }]); setTodoInput(''); }}>Add</button>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {tasks.map((t, i) => (
              <li key={i} onClick={() => setTasks(tasks.map((task, idx) => idx === i ? { ...task, done: !task.done } : task))}
                style={{ padding: '10px 14px', background: t.done ? 'rgba(52,211,153,0.05)' : 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: t.done ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.8)', textDecoration: t.done ? 'line-through' : 'none', cursor: 'pointer', fontSize: '0.9rem', transition: 'all 0.2s' }}>
                {t.done ? '✓ ' : '○ '}{t.text}
              </li>
            ))}
            {tasks.length === 0 && <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', textAlign: 'center' }}>No tasks yet. Add one above!</p>}
          </ul>
        </div>
      ),
    },
    {
      title: 'Mini Project: Color Picker',
      accent: '#f97316',
      accentBg: 'rgba(249,115,22,0.08)',
      code: colorCode,
      output: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 80, height: 80, background: color, borderRadius: 20, boxShadow: `0 8px 30px ${color}66`, transition: 'all 0.3s' }} />
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{ width: 60, height: 40, borderRadius: 8, border: 'none', cursor: 'pointer', background: 'none' }} />
          <code style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', background: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: 6 }}>{color}</code>
        </div>
      ),
    },
    {
      title: 'Mini Project: Random Quote',
      accent: '#60a5fa',
      accentBg: 'rgba(96,165,250,0.08)',
      code: quoteCode,
      output: (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
          <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '90%' }}>"{quote}"</p>
          <button className="out-btn" style={{ background: 'rgba(96,165,250,0.15)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)' }} onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}>✨ New Quote</button>
        </div>
      ),
    },
    {
      title: 'Mini Project: Theme Toggle',
      accent: '#fbbf24',
      accentBg: 'rgba(251,191,36,0.08)',
      code: themeCode,
      output: (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{ width: '100%', padding: '20px 24px', borderRadius: 14, background: dark ? 'rgba(26,26,46,0.8)' : 'rgba(240,240,250,0.1)', border: `1px solid ${dark ? 'rgba(167,139,250,0.2)' : 'rgba(255,255,255,0.15)'}`, transition: 'all 0.4s ease', textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', margin: '0 0 8px' }}>{dark ? '🌙' : '☀️'}</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.9rem' }}>Current: <strong style={{ color: dark ? '#a78bfa' : '#fbbf24' }}>{dark ? 'Dark' : 'Light'}</strong> Theme</p>
          </div>
          <button className="out-btn" style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }} onClick={() => setDark(d => !d)}>
            {dark ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');

        .explore-page {
          padding: 80px 24px 100px;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 50%, #0f0c29 100%);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          position: relative;
        }

        .explore-page::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .explore-page-header {
          text-align: center;
          margin-bottom: 64px;
          position: relative;
          z-index: 1;
        }

        .explore-page-eyebrow {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 100px;
          color: #a78bfa;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }

        .explore-page-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .explore-page-title span {
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .explore-page-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.45);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .projects-list {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
          position: relative;
          z-index: 1;
        }

        .project-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          border-color: rgba(255,255,255,0.12);
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
        }

        .project-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
        }

        .project-card-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .project-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .project-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255,255,255,0.85);
          margin: 0;
        }

        .copy-btn {
          padding: 6px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: rgba(255,255,255,0.55);
          font-size: 0.8rem;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          background: rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.8);
        }

        .project-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .code-panel {
          border-right: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
        }

        .code-panel-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          background: rgba(0,0,0,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot.red { background: #ff5f57; }
        .dot.yellow { background: #febc2e; }
        .dot.green { background: #28c840; }

        .code-panel-label {
          margin-left: 6px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.25);
          font-family: 'Fira Code', monospace;
          letter-spacing: 0.05em;
        }

        .code-pre {
          margin: 0;
          padding: 20px;
          overflow-x: auto;
          max-height: 320px;
          overflow-y: auto;
          font-family: 'Fira Code', monospace;
          font-size: 0.82rem;
          color: rgba(220,220,255,0.75);
          line-height: 1.7;
          white-space: pre;
          background: transparent;
        }

        .code-pre::-webkit-scrollbar { width: 4px; height: 4px; }
        .code-pre::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 2px; }

        .output-panel {
          display: flex;
          flex-direction: column;
        }

        .output-panel-header {
          padding: 10px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          background: rgba(0,0,0,0.15);
        }

        .output-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.25);
          font-family: 'Fira Code', monospace;
          letter-spacing: 0.05em;
        }

        .output-content {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 200px;
        }

        .out-btn {
          padding: 9px 20px;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .out-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.15);
        }

        @media (max-width: 768px) {
          .explore-page { padding: 60px 16px 80px; }
          .project-body { grid-template-columns: 1fr; }
          .code-panel { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .explore-page-title { font-size: 2rem; }
        }
      `}</style>

      <div className="explore-page">
        <div className="explore-page-header">
          <div className="explore-page-eyebrow">Hands-on learning</div>
          <h1 className="explore-page-title">
            Explore <span>Projects</span>
          </h1>
          <p className="explore-page-subtitle">
            Interactive mini-projects with live code and output side by side — learn by doing.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <CodeOutputContainer key={i} title={p.title} accent={p.accent} accentBg={p.accentBg} code={p.code}>
              {p.output}
            </CodeOutputContainer>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExploreWithCodeOutput;
