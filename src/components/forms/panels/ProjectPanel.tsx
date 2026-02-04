'use client';

import { Building, Home, Building2, Factory } from 'lucide-react';
import { Controller, type Control, type FieldErrors, type UseFormRegister } from 'react-hook-form';
import { GlassInput } from '../../ui/custom/GlassInput';
import { GlassSelect } from '../../ui/custom/GlassSelect';
import type { QuoteFormData } from '@/lib/validation/quote-schema';

interface ProjectPanelProps {
  register: UseFormRegister<QuoteFormData>;
  control: Control<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

const projectTypes = [
  { value: 'renovation', label: 'Home Renovation', icon: <Home className="size-4" /> },
  { value: 'new-build', label: 'New Construction', icon: <Building className="size-4" /> },
  { value: 'extension', label: 'Room Extension', icon: <Building2 className="size-4" /> },
  { value: 'commercial', label: 'Commercial Build', icon: <Factory className="size-4" /> },
  { value: 'other', label: 'Other', icon: null },
];

const propertyTypes = [
  { value: 'house', label: 'Single Family House' },
  { value: 'apartment', label: 'Apartment/Condo' },
  { value: 'commercial', label: 'Commercial Building' },
  { value: 'industrial', label: 'Industrial Facility' },
  { value: 'other', label: 'Other' },
];

const timelineOptions = [
  { value: '2', label: '1-3 months' },
  { value: '5', label: '3-6 months' },
  { value: '9', label: '6-12 months' },
  { value: '18', label: '12+ months' },
];

export default function ProjectPanel({ register, control, errors }: ProjectPanelProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2 text-2xl font-bold text-construction-brown-700">
          Project Overview
        </h2>
        <p className="text-construction-gray-600">
          Tell us about your construction project
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-construction-gray-700">
            Project Type *
          </label>
          <Controller
            name="type"
            control={control}
            rules={{ required: 'Project type is required' }}
            render={({ field }) => (
              <GlassSelect
                value={field.value}
                onValueChange={field.onChange}
                options={projectTypes}
                placeholder="Select project type"
                error={errors.type?.message}
              />
            )}
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-construction-gray-700">
            Property Type *
          </label>
          <Controller
            name="propertyType"
            control={control}
            rules={{ required: 'Property type is required' }}
            render={({ field }) => (
              <GlassSelect
                value={field.value}
                onValueChange={field.onChange}
                options={propertyTypes}
                placeholder="Select property type"
                error={errors.propertyType?.message}
              />
            )}
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-construction-gray-700">
            Desired Start Date
          </label>
          <GlassInput
            type="date"
            {...register('startDate')}
            error={errors.startDate?.message}
            className="glass-input"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-construction-gray-700">
            Timeline Expectations *
          </label>
          <Controller
            name="timeline"
            control={control}
            rules={{ required: 'Timeline is required' }}
            render={({ field }) => (
              <GlassSelect
                value={field.value != null ? String(field.value) : undefined}
                onValueChange={(v) => field.onChange(v === '' ? undefined : Number(v))}
                options={timelineOptions}
                placeholder="Select timeline"
                error={errors.timeline?.message}
              />
            )}
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-construction-gray-700">
          Project Description
        </label>
        <textarea
          {...register('description')}
          rows={4}
          className="glass-input w-full resize-none rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none backdrop-blur-md transition-colors focus:border-construction-accent-gold/50 focus:bg-white/10"
          placeholder="Describe your project in detail..."
        />
        {errors.description && (
          <p className="text-sm text-destructive">{errors.description.message}</p>
        )}
      </div>
    </div>
  );
}
