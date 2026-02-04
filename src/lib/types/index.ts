// src/lib/types/index.ts
export interface ConstructionProject {
  id: string;
  type: 'renovation' | 'new-build' | 'extension' | 'commercial' | 'other';
  propertyType: 'house' | 'apartment' | 'commercial' | 'industrial' | 'other';
  area: number; // m²
  rooms: RoomType[];
  specialRequirements: string[];
  materials: 'budget' | 'standard' | 'premium';
  urgency: 'planning' | 'ready' | 'immediate';
  budgetRange: [number, number];
  startDate: Date;
  timeline: number; // months
  contactName?: string;
  contactEmail?: string;
}

export type RoomType =
  | 'living-room'
  | 'kitchen'
  | 'bedroom'
  | 'bathroom'
  | 'garage'
  | 'basement'
  | 'office'
  | 'other';

export interface QuoteEstimate {
  subtotal: number;
  vat: number;
  total: number;
  materialsCost: number;
  laborCost: number;
  timeline: number;
  breakdown: CostBreakdown[];
}

export interface CostBreakdown {
  category: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  total: number;
}

export interface FormStep {
  id: string;
  title: string;
  icon: string;
  isCompleted: boolean;
  data: Record<string, any>;
}

export interface ThreeDPanel {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  isActive: boolean;
  isHovered: boolean;
}
