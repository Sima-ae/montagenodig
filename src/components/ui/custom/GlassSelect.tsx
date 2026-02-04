'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface GlassSelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface GlassSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  options: GlassSelectOption[];
  placeholder?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
}

const GlassSelect = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  GlassSelectProps
>(
  (
    {
      value,
      onValueChange,
      options,
      placeholder = 'Select...',
      error,
      className,
      disabled,
    },
    ref
  ) => {
    return (
      <div className="space-y-1">
        <SelectPrimitive.Root
          value={value === undefined || value === null ? undefined : value}
          onValueChange={onValueChange}
          disabled={disabled}
        >
          <SelectPrimitive.Trigger
            ref={ref}
            className={cn(
              'glass-input flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
              'focus-visible:border-construction-accent-gold/50 focus-visible:ring-2 focus-visible:ring-construction-accent-gold/20',
              'data-placeholder:text-muted-foreground',
              'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
              className
            )}
            aria-invalid={!!error}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon asChild>
              <ChevronDownIcon className="size-4 opacity-50" />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className={cn(
                'relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-white/20 bg-white/10 shadow-xl backdrop-blur-xl',
                'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
              )}
              position="popper"
              sideOffset={4}
            >
              <SelectPrimitive.Viewport className="p-1">
                {options.map((opt) => (
                  <SelectPrimitive.Item
                    key={opt.value}
                    value={opt.value}
                    className={cn(
                      'relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none',
                      'focus:bg-construction-accent-gold/20 focus:text-construction-accent-gold',
                      'data-disabled:pointer-events-none data-disabled:opacity-50'
                    )}
                  >
                    {opt.icon}
                    <span>{opt.label}</span>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
GlassSelect.displayName = 'GlassSelect';

export { GlassSelect };
