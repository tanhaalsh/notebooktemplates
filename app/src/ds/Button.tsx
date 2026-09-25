import type { ButtonHTMLAttributes, CSSProperties, MouseEvent, ReactNode } from 'react';

// Port of the CoreWeave design-system Button (components/core/Button.jsx).
// `variant` sets emphasis; `appearance="outline"` switches to the outlined form.

type Variant = 'primary' | 'secondary' | 'tertiary' | 'support';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children?: ReactNode;
  variant?: Variant;
  appearance?: 'filled' | 'outline';
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  style?: CSSProperties;
}

const SIZES: Record<Size, { height: number; padding: string; font: number; gap: number; radius: string }> = {
  sm: { height: 34, padding: '0 14px', font: 13, gap: 6, radius: 'var(--radius-sm)' },
  md: { height: 42, padding: '0 18px', font: 14, gap: 8, radius: 'var(--radius-md)' },
  lg: { height: 50, padding: '0 24px', font: 16, gap: 8, radius: 'var(--radius-md)' },
};

type Look = { background: string; color: string; border: string; hover: string };

const FILLED: Record<Variant, Look> = {
  primary: { background: 'var(--cw-blue-500)', color: '#fff', border: '1px solid transparent', hover: 'var(--cw-blue-700)' },
  secondary: { background: 'var(--cw-blue-50)', color: 'var(--cw-blue-700)', border: '1px solid transparent', hover: 'var(--cw-blue-100)' },
  tertiary: { background: 'transparent', color: 'var(--cw-blue-700)', border: '1px solid transparent', hover: 'var(--cw-blue-50)' },
  support: { background: 'var(--cw-gray-100)', color: 'var(--cw-gray-950)', border: '1px solid transparent', hover: 'var(--cw-gray-200)' },
};

const OUTLINE: Record<Variant, Look> = {
  primary: { background: 'transparent', color: 'var(--cw-blue-700)', border: '1px solid var(--cw-blue-500)', hover: 'var(--cw-blue-50)' },
  secondary: { background: 'transparent', color: 'var(--cw-blue-700)', border: '1px solid var(--cw-blue-300)', hover: 'var(--cw-blue-50)' },
  tertiary: { background: 'transparent', color: 'var(--cw-blue-700)', border: '1px solid transparent', hover: 'var(--cw-blue-50)' },
  support: { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--color-border-strong)', hover: 'var(--cw-gray-100)' },
};

export function Button({
  children,
  variant = 'primary',
  appearance = 'filled',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}: ButtonProps) {
  const s = SIZES[size] ?? SIZES.md;
  const look = (appearance === 'outline' ? OUTLINE : FILLED)[variant] ?? FILLED.primary;
  const base: CSSProperties = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: 'var(--font-brand)',
    fontSize: s.font,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    borderRadius: s.radius,
    background: look.background,
    color: look.color,
    border: look.border,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition:
      'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    ...style,
  };
  const paint = (e: MouseEvent<HTMLButtonElement>, bg: string) => {
    if (!disabled) e.currentTarget.style.background = bg;
  };
  const press = (e: MouseEvent<HTMLButtonElement>, scale: string) => {
    if (!disabled) e.currentTarget.style.transform = `scale(${scale})`;
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => paint(e, look.hover)}
      onMouseLeave={(e) => paint(e, look.background)}
      onMouseDown={(e) => press(e, '0.98')}
      onMouseUp={(e) => press(e, '1')}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
