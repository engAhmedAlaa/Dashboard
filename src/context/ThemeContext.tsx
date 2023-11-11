import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

function detectSystemTheme() {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  return systemTheme;
}

function applyTheme(theme: Omit<ThemeType, 'system'>) {
  const htmlElement = document.documentElement;
  const metaTheme = document
    .getElementsByTagName('meta')
    .namedItem('theme-color')!;

  if (theme === 'dark') {
    htmlElement.classList.add('dark');
    metaTheme.content = '#0f172a';
  } else {
    htmlElement.classList.remove('dark');
    metaTheme.content = '#ffffff';
  }
}

function getInitialState() {
  const initialTheme =
    (localStorage.getItem('theme') as null | ThemeType) || 'system';
  applyTheme(initialTheme === 'system' ? detectSystemTheme() : initialTheme);

  return initialTheme;
}

type ThemeType = 'light' | 'dark' | 'system';

type StateType = {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
};

const initialState: StateType = {
  theme: 'system',
  setTheme: () => {},
};

export const ThemeContext = createContext<StateType>(initialState);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(getInitialState);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    function handleChange(e: MediaQueryListEvent) {
      if (e.matches) applyTheme('dark');
      else applyTheme('light');
    }

    switch (theme) {
      case 'light':
        applyTheme('light');
        break;
      case 'dark':
        applyTheme('dark');
        break;
      case 'system':
        applyTheme(detectSystemTheme());
        mql.addEventListener('change', handleChange);
        break;
      default:
        throw new Error('Unknown theme');
    }

    localStorage.setItem('theme', theme);

    return () => {
      mql.removeEventListener('change', handleChange);
    };
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
