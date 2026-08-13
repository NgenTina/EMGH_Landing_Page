import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
}

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800',
    outline: 'border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900',
    ghost: 'hover:bg-slate-100 text-slate-600',
    white: 'bg-white text-slate-900 hover:bg-slate-50 shadow-sm'
  };

  return (
    <button
      className={cn(
        'px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-95',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
