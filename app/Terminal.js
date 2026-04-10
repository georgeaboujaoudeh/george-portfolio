'use client';
import { useState, useRef, useEffect } from 'react';

const COMMANDS = {
  help: () => [
    'Available commands:',
    '  about      → who is george',
    '  skills     → tech stack',
    '  experience → work history',
    '  education  → academic background',
    '  contact    → get in touch',
    '  clear      → clear terminal',
  ],
  about: () => [
    'George Abou Jaoude — Senior Analytics Engineer',
    'Based in Beirut, Lebanon 🇱🇧',
    'Self-taught data engineer with 4+ years of experience.',
    'Building BI systems, ETL pipelines, and dashboards',
    'that drive real business decisions.',
    'Starting MSc in Business Analytics in Prague — Sept 2025.',
  ],
  skills: () => [
    'Core:      SQL & PL/SQL',
    'BI:        Looker / LookML, QlikView, QlikSense, Tableau, Power BI',
    'ETL:       Talend',
    'Cloud:     BigQuery, Google Cloud, Oracle',
    'Workflow:  Airflow, Git, Jira',
    'Language:  Python',
  ],
  experience: () => [
    '→ Senior Analytics Engineer @ Cardinal Health',
    '  Nov 2023 – Present',
    '  Looker dashboards, LookML, SQL optimization, Airflow',
    '',
    '→ BI Developer @ Globemed Group',
    '  Jun 2022 – Nov 2023',
    '  QlikView, QlikSense, Tableau, Talend, Oracle PL/SQL',
    '',
    '→ Business Analyst Intern @ PFC International',
    '  Aug 2021 – Dec 2021',
    '  Market analysis, forecasting, CAGR analysis',
  ],
  education: () => [
    '→ MSc Business Analytics — Prague (Sept 2025)',
    '→ BA Business Management — Open University Beirut (2018–2021)',
    '   GPA: 3/4',
    '',
    'Certifications:',
    '  • Google Cloud Data Analytics Certificate',
    '  • BigQuery for Data Engineers',
    '  • Python for Data Science & ML Bootcamp',
  ],
  contact: () => [
    'Email:    georgeaboujaoudeh@outlook.com',
    'LinkedIn: linkedin.com/in/george-abou-jaoude-7866181b3',
    'Location: Beirut, Lebanon',
  ],
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', lines: ['Welcome to george.aboujaoude — interactive terminal 👋', "Type 'help' to see available commands."] },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: cmd }];

    if (cmd === 'clear') {
      setHistory([{ type: 'output', lines: ["Terminal cleared. Type 'help' to start."] }]);
      setInput('');
      return;
    }

    if (COMMANDS[cmd]) {
      newHistory.push({ type: 'output', lines: COMMANDS[cmd]() });
    } else if (cmd === '') {
      // do nothing
    } else {
      newHistory.push({ type: 'output', lines: [`command not found: ${cmd} — type 'help' for available commands.`] });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section style={{ padding: '80px 0', borderTop: '0.5px solid #1e1e1e' }}>
      <p style={{ fontSize: '11px', color: '#f0a500', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Terminal</p>
      <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '32px' }}>Prefer the terminal?</h2>

      <div
        onClick={() => inputRef.current?.focus()}
        style={{
          background: '#0d0d0d',
          border: '0.5px solid #2a2a2a',
          borderRadius: '12px',
          overflow: 'hidden',
          cursor: 'text',
          maxWidth: '780px',
        }}
      >
        {/* Terminal header */}
        <div style={{
          background: '#1a1a1a',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '0.5px solid #2a2a2a'
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
          <span style={{ marginLeft: '8px', fontSize: '12px', color: '#444', fontFamily: 'monospace' }}>george@portfolio</span>
        </div>

        {/* Terminal body */}
        <div
          onWheel={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown') {
              e.stopPropagation();
            }
          }}
          style={{
            padding: '20px',
            fontFamily: 'monospace',
            fontSize: '13px',
            lineHeight: '1.8',
            height: '340px',
            overflowY: 'auto',
          }}
        >
          {history.map((entry, i) => (
            <div key={i}>
              {entry.type === 'input' && (
                <div>
                  <span style={{ color: '#f0a500' }}>george@portfolio</span>
                  <span style={{ color: '#555' }}>:~$ </span>
                  <span style={{ color: '#fff' }}>{entry.text}</span>
                </div>
              )}
              {entry.type === 'output' && (
                <div style={{ color: '#888', marginBottom: '8px' }}>
                  {(Array.isArray(entry.lines) ? entry.lines : [entry.lines]).map((line, j) => (
                    <div key={j}>{line || '\u00A0'}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#f0a500' }}>george@portfolio</span>
            <span style={{ color: '#555' }}>:~$ </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontFamily: 'monospace',
                fontSize: '13px',
                flex: 1,
                caretColor: '#f0a500',
              }}
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
}