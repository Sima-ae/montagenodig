// src/components/3d/controls/CameraController.tsx
'use client';

import { useFrame } from '@react-three/fiber';
import { useQuoteStore } from '@/lib/store/quote-store';
import { useRef } from 'react';

export default function CameraController() {
  const { cameraPosition, setCameraPosition } = useQuoteStore();
  const cameraRef = useRef<any>(null);

  useFrame(() => {
    if (cameraRef.current) {
      // Sync camera with store position
      // Additional camera logic can be added here
    }
  });

  return null; // Camera is controlled via Canvas camera prop
}
