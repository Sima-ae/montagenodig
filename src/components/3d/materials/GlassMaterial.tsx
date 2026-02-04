// src/components/3d/materials/GlassMaterial.tsx
'use client';

import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';
import type { ReactThreeFiber } from '@react-three/fiber';

const GlassShaderMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color('#8B7355'),
    opacity: 0.2,
    distortion: 0.1,
    distortionSpeed: 0.5,
    borderThickness: 0.02,
    borderColor: new THREE.Color('#FFFFFF'),
  },
  // Vertex Shader
  `
    uniform float time;
    uniform float distortion;
    uniform float distortionSpeed;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      
      // Add subtle distortion
      vec3 pos = position;
      float distortionAmount = sin(time * distortionSpeed + position.x * 2.0) * 
                               sin(time * distortionSpeed + position.y * 3.0) * 
                               distortion;
      pos += normal * distortionAmount;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float time;
    uniform vec3 color;
    uniform float opacity;
    uniform float borderThickness;
    uniform vec3 borderColor;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    void main() {
      // Fresnel effect for edges
      float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
      
      // Border detection
      float border = step(1.0 - borderThickness, vUv.x) + 
                     step(1.0 - borderThickness, vUv.y) +
                     step(vUv.x, borderThickness) + 
                     step(vUv.y, borderThickness);
      
      // Animated noise for glass texture
      float noise = sin(vUv.x * 50.0 + time) * sin(vUv.y * 30.0 + time) * 0.1;
      
      // Combine effects
      vec3 finalColor = mix(color, borderColor, border);
      finalColor += vec3(fresnel * 0.3);
      
      float finalOpacity = opacity + fresnel * 0.2 + noise * 0.05;
      
      gl_FragColor = vec4(finalColor, finalOpacity);
    }
  `
);

extend({ GlassShaderMaterial });

// TypeScript declaration for the extended material
declare module '@react-three/fiber' {
  interface ThreeElements {
    glassShaderMaterial: ReactThreeFiber.Object3DNode<
      typeof GlassShaderMaterial,
      typeof GlassShaderMaterial
    >;
  }
}

// React component wrapper with time animation
export function GlassMaterial({
  color = '#8B7355',
  opacity = 0.2,
  distortion = 0.1,
  distortionSpeed = 0.5,
  borderThickness = 0.02,
  borderColor = '#FFFFFF',
  ...props
}: {
  color?: string;
  opacity?: number;
  distortion?: number;
  distortionSpeed?: number;
  borderThickness?: number;
  borderColor?: string;
} & ReactThreeFiber.Object3DProps<typeof GlassShaderMaterial>) {
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.time = state.clock.elapsedTime;
    }
  });

  return (
    <glassShaderMaterial
      ref={materialRef}
      color={color}
      opacity={opacity}
      distortion={distortion}
      distortionSpeed={distortionSpeed}
      borderThickness={borderThickness}
      borderColor={borderColor}
      transparent
      {...props}
    />
  );
}

export default GlassShaderMaterial;
