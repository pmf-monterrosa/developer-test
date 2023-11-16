import React from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { QueryClient, QueryClientProvider } from 'react-query';

import Project from '../Project';
import { THEME_CONFIG } from '../configs/AppConfigs';

const themes = {
  light: `http://localhost:5173/css/light-theme.css`,
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme={THEME_CONFIG.currentTheme} insertionPoint="styles-insertion-point">
        <Project />
      </ThemeSwitcherProvider>
    </QueryClientProvider>
  );
};

export default App;