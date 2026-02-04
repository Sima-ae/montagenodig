'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const constructionButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-construction-accent-gold/50',
  {
    variants: {
      variant: {
        default:
          'bg-construction-brown-500 text-white hover:bg-construction-brown-600',
        outline:
          'border border-construction-accent-gold/50 bg-transparent hover:bg-construction-accent-gold/10 text-foreground',
        ghost: 'hover:bg-white/10 text-foreground',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3',
        lg: 'h-10 px-6',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ConstructionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof constructionButtonVariants> {
  asChild?: boolean;
}

const ConstructionButton = React.forwardRef<
  HTMLButtonElement,
  ConstructionButtonProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={ref}
      className={cn(constructionButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
});
ConstructionButton.displayName = 'ConstructionButton';

export { ConstructionButton, constructionButtonVariants };
