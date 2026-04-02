"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Vaihda vaaleaan teemaan" : "Vaihda tummaan teemaan"}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] hover:bg-[var(--color-border)] transition-colors text-sm"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
