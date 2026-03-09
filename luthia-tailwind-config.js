/**
 * Luthia — Tailwind v3 Theme Extension
 *
 * Maps the CSS custom properties from luthia-tailwind-theme.css
 * to Tailwind utility classes. Import this into tailwind.config.ts.
 *
 * Usage examples:
 *   bg-background     → var(--background)
 *   text-foreground   → var(--foreground)
 *   bg-accent         → var(--accent)
 *   text-accent-foreground → var(--accent-foreground)
 *   border-border     → var(--border)
 *   bg-card           → var(--card)
 *
 * Compatible with shadcn/ui — uses the same token naming conventions.
 */

const luthiaTheme = {
  colors: {
    // ── Base palette ──
    background:        'var(--background)',
    foreground:        'var(--foreground)',

    card: {
      DEFAULT:         'var(--card)',
      foreground:      'var(--card-foreground)',
    },

    popover: {
      DEFAULT:         'var(--popover)',
      foreground:      'var(--popover-foreground)',
    },

    muted: {
      DEFAULT:         'var(--muted)',
      foreground:      'var(--muted-foreground)',
    },

    // ── Accent (theme-dependent) ──
    accent: {
      DEFAULT:         'var(--accent)',
      dim:             'var(--accent-dim)',
      foreground:      'var(--accent-foreground)',
    },

    // ── Borders & inputs ──
    border:            'var(--border)',
    'border-strong':   'var(--border-strong)',
    input: {
      DEFAULT:         'var(--input)',
      border:          'var(--input-border)',
    },
    ring:              'var(--ring)',

    // ── Text hierarchy (for granular control beyond foreground/muted) ──
    'text-primary':    'var(--text-primary)',
    'text-secondary':  'var(--text-secondary)',
    'text-tertiary':   'var(--text-tertiary)',
    'text-muted':      'var(--text-muted)',
    'text-faint':      'var(--text-faint)',
    'text-dim':        'var(--text-dim)',

    // ── Interactive states ──
    'hover-bg':        'var(--hover-bg)',
    'surface-raised':  'var(--surface-raised)',
    'row-border':      'var(--row-border)',
    'row-hover':       'var(--row-hover)',

    // ── Sidebar ──
    sidebar: {
      rail:            'var(--sidebar-rail)',
      hover:           'var(--sidebar-hover)',
    },

    // ── Semantic ──
    success: {
      DEFAULT:         'var(--success)',
      foreground:      'var(--success-foreground)',
    },

    error: {
      DEFAULT:         'var(--error)',
      foreground:      'var(--error-foreground)',
      bg:              'var(--error-bg)',
    },

    warning: {
      DEFAULT:         'var(--warning)',
      foreground:      'var(--warning-foreground)',
    },

    info: {
      DEFAULT:         'var(--info)',
      foreground:      'var(--info-foreground)',
    },

    destructive: {
      DEFAULT:         'var(--destructive)',
      foreground:      'var(--destructive-foreground)',
    },

    // ── Edit mode (blue) ──
    edit: {
      accent:          'var(--edit-accent)',
      bg:              'var(--edit-bg)',
      surface:         'var(--edit-surface)',
      'active-row':    'var(--edit-active-row)',
    },

    // ── Category badges ──
    'cat-body': {
      bg:              'var(--cat-body-bg)',
      text:            'var(--cat-body-text)',
      border:          'var(--cat-body-border)',
    },
    'cat-neck': {
      bg:              'var(--cat-neck-bg)',
      text:            'var(--cat-neck-text)',
      border:          'var(--cat-neck-border)',
    },
    'cat-fretboard': {
      bg:              'var(--cat-fretboard-bg)',
      text:            'var(--cat-fretboard-text)',
      border:          'var(--cat-fretboard-border)',
    },
    'cat-top': {
      bg:              'var(--cat-top-bg)',
      text:            'var(--cat-top-text)',
      border:          'var(--cat-top-border)',
    },
    'cat-carpentry': {
      bg:              'var(--cat-carpentry-bg)',
      text:            'var(--cat-carpentry-text)',
      border:          'var(--cat-carpentry-border)',
    },
    'cat-finished': {
      bg:              'var(--cat-finished-bg)',
      text:            'var(--cat-finished-text)',
      border:          'var(--cat-finished-border)',
    },
    'cat-default': {
      bg:              'var(--cat-default-bg)',
      text:            'var(--cat-default-text)',
      border:          'var(--cat-default-border)',
    },
  },

  // ── Spacing & layout tokens ──
  spacing: {
    'sidebar':           'var(--sidebar-width)',
    'sidebar-collapsed': 'var(--sidebar-width-collapsed)',
    'header':            'var(--header-height)',
  },

  // ── Transition ──
  transitionTimingFunction: {
    'sidebar': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  transitionDuration: {
    'sidebar': '220ms',
  },

  // ── Font families (matching luthia-primary.css) ──
  fontFamily: {
    brand: ["'Cormorant'", "'Georgia'", 'serif'],
    sans:  ["'IBM Plex Sans'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
    mono:  ["'IBM Plex Mono'", 'monospace'],
  },

  // ── Border radius (matching existing component styling) ──
  borderRadius: {
    'sm': '4px',
    'md': '6px',
    'DEFAULT': '7px',
    'lg': '8px',
    'xl': '10px',
    '2xl': '12px',
    'full': '20px',    // chips, badges
  },
};

module.exports = { luthiaTheme };
