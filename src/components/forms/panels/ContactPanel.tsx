'use client';

import type { UseFormRegister, Control, FieldErrors } from 'react-hook-form';
import type { QuoteFormData } from '@/lib/validation/quote-schema';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface ContactPanelProps {
  register: UseFormRegister<QuoteFormData>;
  control: Control<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

export default function ContactPanel({ register, errors }: ContactPanelProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Contact Details</h3>
      <div className="space-y-2">
        <Label htmlFor="contactName">Name</Label>
        <Input
          id="contactName"
          className="glass-input"
          placeholder="Your name"
          {...register('contactName')}
        />
        {errors.contactName && (
          <p className="text-sm text-destructive">{errors.contactName.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="contactEmail">Email</Label>
        <Input
          id="contactEmail"
          type="email"
          className="glass-input"
          placeholder="you@example.com"
          {...register('contactEmail')}
        />
        {errors.contactEmail && (
          <p className="text-sm text-destructive">{errors.contactEmail.message}</p>
        )}
      </div>
    </div>
  );
}
