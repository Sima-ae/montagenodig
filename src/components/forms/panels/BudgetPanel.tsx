'use client';

import { Controller, type UseFormRegister, type Control, type FieldErrors } from 'react-hook-form';
import type { QuoteFormData } from '@/lib/validation/quote-schema';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface BudgetPanelProps {
  register: UseFormRegister<QuoteFormData>;
  control: Control<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

export default function BudgetPanel({ register, control, errors }: BudgetPanelProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">
        Budget & Timeline
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="materials">Materials</Label>
          <Controller
            name="materials"
            control={control}
            rules={{ required: 'Required' }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="materials" className="glass-input">
                  <SelectValue placeholder="Select tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.materials && (
            <p className="text-sm text-destructive">{errors.materials.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="urgency">Urgency</Label>
          <Controller
            name="urgency"
            control={control}
            rules={{ required: 'Required' }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="urgency" className="glass-input">
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="ready">Ready to start</SelectItem>
                  <SelectItem value="immediate">Immediate</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.urgency && (
            <p className="text-sm text-destructive">{errors.urgency.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Budget Range</Label>
        <p className="text-sm text-muted-foreground">
          Min–max inputs – connect to control for budgetRange
        </p>
        {errors.budgetRange && (
          <p className="text-sm text-destructive">{errors.budgetRange.message}</p>
        )}
      </div>
    </div>
  );
}
