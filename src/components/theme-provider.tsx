import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/**
 * Luthia Theme System
 *
 * Manages two independent axes:
 *   1. Mode:  "dark" | "light" — controls the base palette via .light class on <html>
 *   2. Theme: one of five accent themes — controls --accent via data-theme attribute on <html>
 *
 * Both are persisted to localStorage and restored on page load.
 * The .light class approach matches shadcn/ui's dark mode convention.
 */

const THEMES = ["beeswax", "amber", "maple", "mahogany", "spruce"] as const;
type Theme = (typeof THEMES)[number];
type Mode = "dark" | "light";

const STORAGE_KEY_MODE = "luthia-mode";
const STORAGE_KEY_THEME = "luthia-theme";
const DEFAULT_MODE: Mode = "dark";
const DEFAULT_THEME: Theme = "amber";

interface ThemeContextValue {
  mode: Mode;
  theme: Theme;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  setTheme: (theme: Theme) => void;
  themes: readonly Theme[];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * Reads stored values from localStorage, falling back to defaults.
 * Runs once on initial render to avoid a flash of wrong theme.
 */
function getStoredMode(): Mode {
  if (typeof window === "undefined") return DEFAULT_MODE;
  const stored = localStorage.getItem(STORAGE_KEY_MODE);
  return stored === "light" ? "light" : DEFAULT_MODE;
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const stored = localStorage.getItem(STORAGE_KEY_THEME);
  if (stored && THEMES.includes(stored as Theme)) return stored as Theme;
  return DEFAULT_THEME;
}

/**
 * Apply mode and theme to the <html> element.
 * Mode:  adds/removes the "light" class (dark is default — no class needed).
 * Theme: sets data-theme attribute.
 */
function applyToDocument(mode: Mode, theme: Theme) {
  const root = document.documentElement;

  if (mode === "light") {
    root.classList.add("light");
  } else {
    root.classList.remove("light");
  }

  root.setAttribute("data-theme", theme);
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: Mode;
  defaultTheme?: Theme;
}

export function ThemeProvider({
  children,
  defaultMode,
  defaultTheme,
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<Mode>(
    () => defaultMode ?? getStoredMode()
  );
  const [theme, setThemeState] = useState<Theme>(
    () => defaultTheme ?? getStoredTheme()
  );

  // Apply to DOM on mount and whenever mode/theme changes
  useEffect(() => {
    applyToDocument(mode, theme);
  }, [mode, theme]);

  const setMode = (newMode: Mode) => {
    localStorage.setItem(STORAGE_KEY_MODE, newMode);
    setModeState(newMode);
  };

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(STORAGE_KEY_THEME, newTheme);
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ mode, theme, setMode, toggleMode, setTheme, themes: THEMES }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access the theme context from any component.
 *
 * Usage:
 *   const { mode, theme, toggleMode, setTheme } = useTheme();
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { THEMES, type Theme, type Mode };
