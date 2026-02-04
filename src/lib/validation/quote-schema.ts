import { z } from 'zod';

const roomTypeEnum = z.enum([
  'living-room',
  'kitchen',
  'bedroom',
  'bathroom',
  'garage',
  'basement',
  'office',
  'other',
]);

export const quoteSchema = z.object({
  type: z.enum(['renovation', 'new-build', 'extension', 'commercial', 'other']),
  propertyType: z.enum(['house', 'apartment', 'commercial', 'industrial', 'other']),
  area: z.number().min(1, 'Area is required').max(10000),
  rooms: z.array(roomTypeEnum).min(1, 'Select at least one room'),
  specialRequirements: z.array(z.string()).default([]),
  materials: z.enum(['budget', 'standard', 'premium']),
  urgency: z.enum(['planning', 'ready', 'immediate']),
  budgetRange: z.tuple([z.number(), z.number()]),
  startDate: z.coerce.date(),
  timeline: z.number().min(1).max(60),
  contactName: z.string().min(1, 'Name is required'),
  contactEmail: z.string().email('Invalid email'),
  description: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
