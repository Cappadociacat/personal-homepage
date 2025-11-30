'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeType = 'colorful' | 'tech-minimal';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('tech-minimal'); // 默认为深色科技风

  const toggleTheme = () => {
    setTheme(prev => prev === 'colorful' ? 'tech-minimal' : 'colorful');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}