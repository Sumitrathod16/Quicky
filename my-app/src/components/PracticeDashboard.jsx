import React, { useState, useEffect } from 'react';
import { loadAllCodes, loadSolvedIds } from '../services/practiceService';
import { useAuth } from '../context/useAuth';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

// ─── Mirror of the PROBLEMS array (lightweight version) ───────────
const PROBLEMS = [
  { id: 1, title: 'Two Sum',           difficulty: 'Easy',   category: 'Arrays' },
  { id: 2, title: 'Reverse a String',  difficulty: 'Easy',   category: 'Strings' },
  { id: 3, title: 'FizzBuzz',          difficulty: 'Easy',   category: 'Math' },
  { id: 4, title: 'Valid Palindrome',  difficulty: 'Easy',   category: 'Strings' },
  { id: 5, title: 'Maximum Subarray',  difficulty: 'Medium', category: 'Dynamic Programming' },
  { id: 6, title: 'Fibonacci Number',  difficulty: 'Easy',   category: 'Recursion' },
  { id: 7, title: 'Climbing Stairs',   difficulty: 'Medium', category: 'Dynamic Programming' },
  { id: 8, title: 'Count Vowels',      difficulty: 'Easy',   category: 'Strings' },
];

const DIFFICULTY_COLORS = { Easy: '#34d399', Medium: '#fbbf24', Hard: '#f87171' };
const CATEGORY_COLORS   = ['#8b5cf6','#3b82f6','#ec4899','#f97316','#10b981','#84cc16','#06b6d4'];

export default function PracticeDashboard() {
  const { user } = useAuth();
  const [solvedIds, setSolvedIds]   = useState(new Set());
  const [savedCodes, setSavedCodes] = useState({});
  const [loading, setLoading]       = useState(true);

  useEffect(() => {
    if (!user?.uid) { setLoading(false); return; }
    Promise.all([loadSolvedIds(user.uid), loadAllCodes(user.uid)])
      .then(([ids, codes]) => { setSolvedIds(ids); setSavedCodes(codes); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user?.uid]);

  if (loading) {
    return (
      <div style={styles.loadWrap}>
        <div style={styles.loadSpinner} />
        <span style={styles.loadText}>Loading practice stats...</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={styles.guestBox}>
        <span style={{ fontSize: '2rem' }}>🔒</span>
        <p style={{ color: 'rgba(255,255,255,0.5)', margin: '8px 0 0', fontSize: '0.9rem' }}>
          Sign in to see your practice progress
        </p>
      </div>
    );
  }

  // ── Analytics computations ────────────────────────────────────────
  const totalProblems  = PROBLEMS.length;
  const totalSolved    = solvedIds.size;
  const totalAttempted = Object.keys(savedCodes).filter(pid =>
    PROBLEMS.find(p => p.id === Number(pid)) &&
    Object.values(savedCodes[pid] || {}).some(code =>
      code && !code.includes('// Write your solution here') &&
      !code.includes('# Write your solution here') &&
      !code.includes('// Write your solution')
    )
  ).length;

  // Difficulty breakdown (solved)
  const difficultyData = ['Easy', 'Medium', 'Hard'].map(d => ({
    name: d,
    solved:  PROBLEMS.filter(p => p.difficulty === d && solvedIds.has(p.id)).length,
    total:   PROBLEMS.filter(p => p.difficulty === d).length,
    color:   DIFFICULTY_COLORS[d],
  }));

  // Pie: solved vs unsolved
  const solvedPie = [
    { name: 'Solved',   value: totalSolved,             color: '#34d399' },
    { name: 'Attempted',value: Math.max(0, totalAttempted - totalSolved), color: '#fbbf24' },
    { name: 'Untouched',value: Math.max(0, totalProblems - totalAttempted), color: 'rgba(255,255,255,0.08)' },
  ].filter(d => d.value > 0);

  // Category breakdown
  const categories = [...new Set(PROBLEMS.map(p => p.category))];
  const categoryData = categories.map((cat, i) => ({
    name:   cat,
    solved: PROBLEMS.filter(p => p.category === cat && solvedIds.has(p.id)).length,
    total:  PROBLEMS.filter(p => p.category === cat).length,
    color:  CATEGORY_COLORS[i % CATEGORY_COLORS.length],
  }));

  const solvedProblems = PROBLEMS.filter(p => solvedIds.has(p.id));
  const progressPct = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;

  return (
    <div style={styles.root}>
      {/* Section header */}
      <div style={styles.sectionHeader}>
        <span style={styles.sectionIcon}>🧩</span>
        <div>
          <h2 style={styles.sectionTitle}>Practice Analytics</h2>
          <p style={styles.sectionSub}>Your coding practice performance at a glance</p>
        </div>
        <a href="/Practice" style={styles.practiceLink}>Open Practice →</a>
      </div>

      {/* Top stat cards */}
      <div style={styles.statRow}>
        {[
          { icon: '✅', label: 'Solved',    value: totalSolved,      color: '#34d399' },
          { icon: '⚡', label: 'Attempted', value: totalAttempted,   color: '#fbbf24' },
          { icon: '📚', label: 'Total',     value: totalProblems,    color: '#a78bfa' },
          { icon: '📈', label: 'Progress',  value: `${progressPct}%`,color: '#3b82f6' },
        ].map(s => (
          <div key={s.label} style={styles.statCard}>
            <span style={{ fontSize: '1.6rem' }}>{s.icon}</span>
            <span style={{ ...styles.statValue, color: s.color }}>{s.value}</span>
            <span style={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={styles.progressSection}>
        <div style={styles.progressHeader}>
          <span style={styles.progressLabel}>Overall Completion</span>
          <span style={{ ...styles.progressLabel, color: '#a78bfa' }}>{progressPct}%</span>
        </div>
        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${progressPct}%` }} />
        </div>
      </div>

      {/* Charts row */}
      <div style={styles.chartsRow}>
        {/* Doughnut: Solved/Attempted/Untouched */}
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Completion Breakdown</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={solvedPie} cx="50%" cy="50%" innerRadius={45} outerRadius={75} dataKey="value" paddingAngle={3}>
                {solvedPie.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={{ background: '#1a1535', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', fontSize: '0.8rem' }}
                formatter={(v, n) => [v + ' problems', n]} />
            </PieChart>
          </ResponsiveContainer>
          <div style={styles.legend}>
            {solvedPie.map(e => (
              <div key={e.name} style={styles.legendItem}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: e.color, flexShrink: 0 }} />
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)' }}>{e.name} ({e.value})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar: difficulty breakdown */}
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Difficulty Breakdown</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={difficultyData} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip contentStyle={{ background: '#1a1535', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', fontSize: '0.8rem' }}
                formatter={(v, n) => [v, n === 'solved' ? 'Solved' : 'Total']} />
              <Bar dataKey="total"  fill="rgba(255,255,255,0.06)" radius={[4,4,0,0]} />
              <Bar dataKey="solved" radius={[4,4,0,0]}>
                {difficultyData.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category cards */}
      <h3 style={{ ...styles.chartTitle, marginBottom: 12 }}>Category Progress</h3>
      <div style={styles.categoryGrid}>
        {categoryData.map((cat, i) => (
          <div key={cat.name} style={{ ...styles.catCard, borderColor: cat.color + '30' }}>
            <div style={styles.catHeader}>
              <span style={{ ...styles.catName, color: cat.color }}>{cat.name}</span>
              <span style={styles.catFraction}>{cat.solved}/{cat.total}</span>
            </div>
            <div style={styles.catTrack}>
              <div style={{ ...styles.catFill, width: cat.total > 0 ? `${(cat.solved/cat.total)*100}%` : '0%', background: cat.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Solved problems list */}
      {solvedProblems.length > 0 && (
        <>
          <h3 style={{ ...styles.chartTitle, marginBottom: 12, marginTop: 24 }}>✅ Solved Problems</h3>
          <div style={styles.solvedGrid}>
            {solvedProblems.map(p => {
              const dc = DIFFICULTY_COLORS[p.difficulty];
              return (
                <a key={p.id} href="/Practice" style={{ ...styles.solvedCard, borderColor: dc + '25' }}>
                  <span style={styles.solvedNum}>{String(p.id).padStart(2,'0')}</span>
                  <div style={styles.solvedInfo}>
                    <span style={styles.solvedTitle}>{p.title}</span>
                    <span style={styles.solvedCat}>{p.category}</span>
                  </div>
                  <span style={{ ...styles.solvedDiff, color: dc, background: dc + '15', border: `1px solid ${dc}30` }}>
                    {p.difficulty}
                  </span>
                </a>
              );
            })}
          </div>
        </>
      )}

      {totalSolved === 0 && (
        <div style={styles.emptyState}>
          <span style={{ fontSize: '2.5rem' }}>🎯</span>
          <p style={{ color: 'rgba(255,255,255,0.4)', margin: '10px 0 0', fontSize: '0.9rem' }}>
            No problems solved yet — <a href="/Practice" style={{ color: '#a78bfa' }}>start practicing!</a>
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────
const styles = {
  root: { padding: '0 0 32px', fontFamily: "'Inter', sans-serif" },
  loadWrap: { display: 'flex', alignItems: 'center', gap: 10, padding: 24, justifyContent: 'center' },
  loadSpinner: { width: 20, height: 20, border: '2px solid rgba(139,92,246,0.2)', borderTopColor: '#a78bfa', borderRadius: '50%', animation: 'spin 0.8s linear infinite' },
  loadText: { color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' },
  guestBox: { textAlign: 'center', padding: 32, background: 'rgba(255,255,255,0.02)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' },
  sectionHeader: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, flexWrap: 'wrap' },
  sectionIcon: { fontSize: '1.8rem', flexShrink: 0 },
  sectionTitle: { margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' },
  sectionSub: { margin: '2px 0 0', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' },
  practiceLink: { marginLeft: 'auto', padding: '7px 16px', background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', borderRadius: 8, color: '#fff', fontWeight: 600, fontSize: '0.8rem', textDecoration: 'none', flexShrink: 0 },
  statRow: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 20 },
  statCard: { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 },
  statValue: { fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em' },
  statLabel: { fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 },
  progressSection: { marginBottom: 24 },
  progressHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: 6 },
  progressLabel: { fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 },
  progressTrack: { height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 100, overflow: 'hidden' },
  progressFill: { height: '100%', background: 'linear-gradient(90deg,#7c3aed,#3b82f6)', borderRadius: 100, transition: 'width 0.8s ease' },
  chartsRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 },
  chartCard: { background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 18 },
  chartTitle: { margin: '0 0 12px', fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '-0.01em' },
  legend: { display: 'flex', flexWrap: 'wrap', gap: '6px 14px', justifyContent: 'center', marginTop: 8 },
  legendItem: { display: 'flex', alignItems: 'center', gap: 5 },
  categoryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 10 },
  catCard: { background: 'rgba(255,255,255,0.02)', border: '1px solid', borderRadius: 12, padding: '12px 14px' },
  catHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: 8 },
  catName: { fontSize: '0.8rem', fontWeight: 600 },
  catFraction: { fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' },
  catTrack: { height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 100, overflow: 'hidden' },
  catFill: { height: '100%', borderRadius: 100, transition: 'width 0.6s ease' },
  solvedGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 8 },
  solvedCard: { display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid', borderRadius: 10, padding: '10px 12px', textDecoration: 'none', transition: 'background 0.2s' },
  solvedNum: { fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', fontFamily: "'Fira Code',monospace", minWidth: 20 },
  solvedInfo: { flex: 1, display: 'flex', flexDirection: 'column', gap: 1 },
  solvedTitle: { fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)' },
  solvedCat: { fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)' },
  solvedDiff: { fontSize: '0.65rem', fontWeight: 700, padding: '2px 8px', borderRadius: 100, flexShrink: 0 },
  emptyState: { textAlign: 'center', padding: '32px 0' },
};
