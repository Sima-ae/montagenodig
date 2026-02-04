'use client';

import type { UseFormRegister, Control, FieldErrors } from 'react-hook-form';
import type { QuoteFormData } from '@/lib/validation/quote-schema';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface ScopePanelProps {
  register: UseFormRegister<QuoteFormData>;
  control: Control<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

export default function ScopePanel({ register, errors }: ScopePanelProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">
        Scope & Requirements
      </h3>
      <div className="space-y-2">
        <Label htmlFor="area">Area (m²)</Label>
        <Input
          id="area"
          type="number"
          min={1}
          max={10000}
          className="glass-input"
          {...register('area', { valueAsNumber: true })}
        />
        {errors.area && (
          <p className="text-sm text-destructive">{errors.area.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label>Rooms</Label>
        <p className="text-sm text-muted-foreground">
          Room selection UI (checkboxes) – connect to control
        </p>
        {errors.rooms && (
          <p className="text-sm text-destructive">{errors.rooms.message}</p>
        )}
      </div>
    </div>
  );
}
