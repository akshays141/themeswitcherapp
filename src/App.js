import React from 'react';
import { ThemeProvider } from './context';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
