'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const bars = [0.4, 0.7, 0.5, 1.0, 0.6, 0.8, 0.9, 0.55];

function Bar({ position, height }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.003;
  });
  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[0.4, height, 0.4]} />
      <meshStandardMaterial color="#f0a500" metalness={0.4} roughness={0.3} />
    </mesh>
  );
}

export default function Chart3D() {
  return (
    <div style={{ width: '100%', height: '300px', background: '#0f0f0f', borderRadius: '16px', border: '0.5px solid #1e1e1e' }}>
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f0a500" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        {bars.map((h, i) => (
          <Bar
            key={i}
            height={h * 3}
            position={[(i - bars.length / 2) * 0.7, (h * 3) / 2, 0]}
          />
        ))}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}