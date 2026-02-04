'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Building,
  Ruler,
  DollarSign,
  User,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { useQuoteStore } from '@/lib/store/quote-store';
import { quoteSchema, type QuoteFormData } from '@/lib/validation/quote-schema';
import { GlassCard } from '../ui/custom/GlassCard';
import { ConstructionButton } from '../ui/custom/ConstructionButton';
import ProgressIndicator from './ProgressIndicator';
import ProjectPanel from './panels/ProjectPanel';
import ScopePanel from './panels/ScopePanel';
import BudgetPanel from './panels/BudgetPanel';
import ContactPanel from './panels/ContactPanel';
import QuoteSummary from './panels/QuoteSummary';

const steps = [
  { id: 'project', icon: Building, title: 'Project Overview' },
  { id: 'scope', icon: Ruler, title: 'Scope & Requirements' },
  { id: 'budget', icon: DollarSign, title: 'Budget & Timeline' },
  { id: 'contact', icon: User, title: 'Contact Details' },
];

const defaultValues: Partial<QuoteFormData> = {
  type: undefined,
  propertyType: undefined,
  area: 0,
  rooms: [],
  specialRequirements: [],
  materials: 'standard',
  urgency: 'planning',
  budgetRange: [0, 100000],
  startDate: new Date(),
  timeline: 12,
  contactName: '',
  contactEmail: '',
};

export default function MainForm() {
  const { currentStep, setCurrentStep, isFormValid, updateProjectData } =
    useQuoteStore();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    trigger,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    mode: 'onChange',
    defaultValues,
  });

  const formValues = watch();
  useEffect(() => {
    updateProjectData(formValues);
  }, [formValues, updateProjectData]);

  const stepFields: (keyof QuoteFormData)[][] = [
    ['type', 'propertyType', 'startDate', 'timeline'],
    ['area', 'rooms'],
    ['materials', 'urgency', 'budgetRange', 'startDate', 'timeline'],
    ['contactName', 'contactEmail'],
  ];

  const handleNext = async () => {
    const fields = stepFields[currentStep];
    const isStepValid = fields ? await trigger(fields) : true;
    if (isStepValid && currentStep < steps.length - 1) {
      const values = watch();
      updateProjectData(values);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: QuoteFormData) => {
    updateProjectData(data);
    console.log('Form submitted:', data);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ProjectPanel register={register} control={control} errors={errors} />
        );
      case 1:
        return (
          <ScopePanel register={register} control={control} errors={errors} />
        );
      case 2:
        return (
          <BudgetPanel register={register} control={control} errors={errors} />
        );
      case 3:
        return (
          <ContactPanel register={register} control={control} errors={errors} />
        );
      default:
        return <QuoteSummary />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8"
    >
      <GlassCard className="p-6 md:p-8">
        <ProgressIndicator steps={steps} currentStep={currentStep} />

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
            <ConstructionButton
              type="button"
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="glass-button"
            >
              <ChevronLeft className="mr-2 size-4" />
              Previous
            </ConstructionButton>

            {currentStep < steps.length - 1 ? (
              <ConstructionButton
                type="button"
                onClick={handleNext}
                disabled={!isFormValid}
                className="glass-button"
              >
                Next Step
                <ChevronRight className="ml-2 size-4" />
              </ConstructionButton>
            ) : (
              <ConstructionButton
                type="submit"
                className="glass-button bg-linear-to-r from-construction-accent-gold/30 to-construction-accent-safety/30"
              >
                Generate Quote
              </ConstructionButton>
            )}
          </div>
        </form>
      </GlassCard>
    </motion.div>
  );
}
