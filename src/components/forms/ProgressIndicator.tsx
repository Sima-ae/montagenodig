'use client';

import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface StepItem {
  id: string;
  icon: LucideIcon;
  title: string;
}

interface ProgressIndicatorProps {
  steps: StepItem[];
  currentStep: number;
  className?: string;
}

export default function ProgressIndicator({
  steps,
  currentStep,
  className,
}: ProgressIndicatorProps) {
  return (
    <div className={cn('flex items-center justify-between gap-2', className)}>
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        return (
          <div
            key={step.id}
            className={cn(
              'flex flex-1 items-center gap-2',
              index < steps.length - 1 && 'flex-1'
            )}
          >
            <div
              className={cn(
                'flex size-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
                isCompleted &&
                  'border-construction-accent-gold bg-construction-accent-gold/20 text-construction-accent-gold',
                isActive &&
                  'border-construction-accent-gold bg-construction-accent-gold/10 text-construction-accent-gold',
                !isActive &&
                  !isCompleted &&
                  'border-white/20 bg-white/5 text-muted-foreground'
              )}
            >
              <Icon className="size-5" />
            </div>
            <span
              className={cn(
                'hidden text-sm font-medium sm:inline-block',
                isActive ? 'text-construction-accent-gold' : 'text-muted-foreground'
              )}
            >
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div className="mx-2 hidden h-px flex-1 bg-white/10 sm:block" />
            )}
          </div>
        );
      })}
    </div>
  );
}
