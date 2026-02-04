'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface GlassInputProps extends React.ComponentProps<'input'> {
  error?: string;
}

const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <input
          ref={ref}
          data-slot="input"
          className={cn(
            'glass-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 md:text-sm',
            'focus-visible:border-construction-accent-gold/50 focus-visible:ring-2 focus-visible:ring-construction-accent-gold/20',
            'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
GlassInput.displayName = 'GlassInput';

export { GlassInput };
