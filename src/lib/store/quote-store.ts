// src/lib/store/quote-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ConstructionProject, QuoteEstimate, FormStep } from '@/lib/types';

interface QuoteStore {
  // Form Data
  projectData: Partial<ConstructionProject>;
  currentStep: number;
  steps: FormStep[];
  isFormValid: boolean;

  // 3D Scene State
  activePanel: string | null;
  cameraPosition: [number, number, number];
  isRotating: boolean;

  // Actions
  updateProjectData: (data: Partial<ConstructionProject>) => void;
  setCurrentStep: (step: number) => void;
  setActivePanel: (panelId: string | null) => void;
  setCameraPosition: (position: [number, number, number]) => void;
  toggleRotation: () => void;
  validateForm: () => boolean;
  resetForm: () => void;

  // Calculations
  calculateEstimate: () => Promise<QuoteEstimate>;
}

const initialSteps: FormStep[] = [
  { id: 'project', title: 'Project Overview', icon: '🏗️', isCompleted: false, data: {} },
  { id: 'scope', title: 'Scope & Requirements', icon: '📐', isCompleted: false, data: {} },
  { id: 'budget', title: 'Budget & Timeline', icon: '💰', isCompleted: false, data: {} },
  { id: 'contact', title: 'Contact Details', icon: '👤', isCompleted: false, data: {} },
];

export const useQuoteStore = create<QuoteStore>()(
  persist(
    (set, get) => ({
      projectData: {},
      currentStep: 0,
      steps: initialSteps,
      isFormValid: false,
      activePanel: null,
      cameraPosition: [0, 2, 10],
      isRotating: true,

      updateProjectData: (data) => {
        set((state) => ({
          projectData: { ...state.projectData, ...data },
        }));
        get().validateForm();
      },

      setCurrentStep: (step) => {
        set({ currentStep: step });
      },

      setActivePanel: (panelId) => {
        set({ activePanel: panelId });
      },

      setCameraPosition: (position) => {
        set({ cameraPosition: position });
      },

      toggleRotation: () => {
        set((state) => ({ isRotating: !state.isRotating }));
      },

      validateForm: () => {
        const { projectData, currentStep } = get();
        let isValid = false;

        switch (currentStep) {
          case 0:
            isValid = Boolean(
              projectData.type &&
                projectData.propertyType &&
                projectData.startDate &&
                projectData.timeline
            );
            break;
          case 1:
            isValid = Boolean(projectData.area && projectData.rooms?.length);
            break;
          case 2:
            isValid = Boolean(projectData.budgetRange && projectData.timeline);
            break;
          case 3:
            isValid = Boolean(projectData.contactName && projectData.contactEmail);
            break;
        }

        set({ isFormValid: isValid });
        return isValid;
      },

      resetForm: () => {
        set({
          projectData: {},
          currentStep: 0,
          steps: initialSteps.map((step) => ({ ...step, isCompleted: false, data: {} })),
          isFormValid: false,
        });
      },

      calculateEstimate: async () => {
        // Implement calculation logic
        return {
          subtotal: 0,
          vat: 0,
          total: 0,
          materialsCost: 0,
          laborCost: 0,
          timeline: 0,
          breakdown: [],
        };
      },
    }),
    {
      name: 'construction-quote-storage',
      partialize: (state) => ({
        projectData: state.projectData,
        currentStep: state.currentStep,
        steps: state.steps,
      }),
    }
  )
);
