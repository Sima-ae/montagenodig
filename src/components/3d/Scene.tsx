// src/components/3d/Scene.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import { useQuoteStore } from '@/lib/store/quote-store';
import ConstructionEnvironment from './environment/ConstructionEnvironment';
import FloatingPanels from './panels/FloatingPanels';
import Effects from './effects/PostEffects';
import CameraController from './controls/CameraController';

export default function Scene3D() {
  const { isRotating, cameraPosition } = useQuoteStore();

  return (
    <Canvas
      className="absolute inset-0 z-0"
      shadows
      dpr={[1, 2]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
        toneMappingExposure: 1.2,
      }}
      camera={{ position: cameraPosition, fov: 60 }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 15, 10]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0001}
        />
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#D4A76A" />

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={isRotating}
          maxPolarAngle={Math.PI / 2}
          minDistance={3}
          maxDistance={20}
          autoRotate={isRotating}
          autoRotateSpeed={0.5}
        />
        <CameraController />

        {/* Scene Elements */}
        <ConstructionEnvironment />
        <FloatingPanels />

        {/* Effects */}
        <Effects />

        {/* Environment */}
        <Environment preset="city" />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
