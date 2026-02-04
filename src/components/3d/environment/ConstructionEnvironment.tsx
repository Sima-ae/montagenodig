// src/components/3d/environment/ConstructionEnvironment.tsx
'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useQuoteStore } from '@/lib/store/quote-store';

export default function ConstructionEnvironment() {
  const gridRef = useRef<THREE.Group>(null);
  const { currentStep } = useQuoteStore();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = -Math.PI / 2;
    }
  });

  return (
    <group>
      {/* Ground Grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          mirror={0.75}
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={10}
          depthScale={1}
          minDepthThreshold={0.85}
          maxDepthThreshold={1}
          color="#3A3A3A"
          metalness={0.5}
          roughness={0.8}
        />
      </mesh>

      {/* Grid Lines */}
      <group ref={gridRef}>
        {Array.from({ length: 21 }).map((_, i) => {
          const points = [
            new THREE.Vector3(i - 10, 0, -10),
            new THREE.Vector3(i - 10, 0, 10),
          ];
          return (
            <line key={`x-${i}`}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={points.length}
                  array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#8B7355" opacity={0.1} transparent />
            </line>
          );
        })}
        {Array.from({ length: 21 }).map((_, i) => {
          const points = [
            new THREE.Vector3(-10, 0, i - 10),
            new THREE.Vector3(10, 0, i - 10),
          ];
          return (
            <line key={`z-${i}`}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={points.length}
                  array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#8B7355" opacity={0.1} transparent />
            </line>
          );
        })}
      </group>

      {/* Floating Construction Elements */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Crane Model (Placeholder) */}
        <mesh position={[-8, 3, -5]} castShadow>
          <boxGeometry args={[0.2, 6, 0.2]} />
          <meshStandardMaterial color="#A3B1C6" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Construction Materials */}
        <mesh position={[6, 1, 4]} castShadow>
          <boxGeometry args={[2, 0.5, 1]} />
          <meshStandardMaterial color="#8B7355" metalness={0.3} roughness={0.7} />
        </mesh>
      </Float>

      {/* Step Indicator */}
      <Text
        position={[0, 4, -8]}
        fontSize={0.5}
        color="#D4A76A"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {`STEP ${currentStep + 1}/4`}
      </Text>
    </group>
  );
}
