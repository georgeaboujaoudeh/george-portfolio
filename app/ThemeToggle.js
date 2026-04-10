'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{
        background: 'transparent',
        border: '0.5px solid #2a2a2a',
        borderRadius: '8px',
        padding: '8px 14px',
        cursor: 'pointer',
        fontSize: '16px',
        color: '#666',
      }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}