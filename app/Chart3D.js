'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const data = [
  { skill: 'SQL',      values: [0, 5, 7, 8, 9] },
  { skill: 'Looker',   values: [0, 0, 0, 8, 9] },
  { skill: 'Qlik',     values: [0, 7, 9, 9, 9] },
  { skill: 'Talend',   values: [0, 6, 8, 8, 8] },
  { skill: 'Python',   values: [0, 3, 5, 6, 6] },
  { skill: 'BigQuery', values: [0, 0, 0, 6, 7] },
  { skill: 'Oracle',   values: [0, 4, 8, 8, 8] },
];

const years = ['2021', '2022', '2023', '2024', '2025'];
const COLORS = ['#f0a500', '#e8932a', '#d4720a', '#bf5500', '#a33d00'];

function Bar({ position, height, color, hovered, setHovered, label }) {
  const mesh = useRef();
  const actualHeight = Math.max(height * 0.35, 0.01);

  return (
    <mesh
      ref={mesh}
      position={[position[0], actualHeight / 2, position[2]]}
      onPointerOver={() => setHovered(label)}
      onPointerOut={() => setHovered(null)}
    >
      <boxGeometry args={[0.5, actualHeight, 0.5]} />
      <meshStandardMaterial
        color={hovered === label ? '#ffffff' : color}
        metalness={0.3}
        roughness={0.4}
        opacity={height === 0 ? 0 : 1}
        transparent
      />
    </mesh>
  );
}

function Scene({ hovered, setHovered }) {
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.002;
  });

  return (
    <group ref={group}>
      {data.map((item, si) => (
        <group key={item.skill}>
          {item.values.map((val, yi) => (
            <Bar
              key={yi}
              position={[si * 1.2 - (data.length * 1.2) / 2, 0, yi * 1.2 - (years.length * 1.2) / 2]}
              height={val}
              color={COLORS[yi]}
              hovered={hovered}
              setHovered={setHovered}
              label={`${item.skill}-${years[yi]}`}
            />
          ))}
          <Text
            position={[si * 1.2 - (data.length * 1.2) / 2, -0.4, (years.length * 1.2) / 2 + 0.6]}
            fontSize={0.28}
            color="#f0a500"
            anchorX="center"
            anchorY="top"
          >
            {item.skill}
          </Text>
        </group>
      ))}
    </group>
  );
}

export default function Chart3D() {
  const [hovered, setHovered] = useState(null);

  const hoveredData = hovered ? {
    skill: hovered.split('-')[0],
    year: hovered.split('-')[1],
    value: data.find(d => d.skill === hovered.split('-')[0])?.values[years.indexOf(hovered.split('-')[1])]
  } : null;

  return (
    <div style={{ width: '100%', background: '#0f0f0f', borderRadius: '16px', border: '0.5px solid #1e1e1e' }}>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '20px', padding: '16px 24px', borderBottom: '0.5px solid #1e1e1e', flexWrap: 'wrap' }}>
        {years.map((year, i) => (
          <div key={year} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: COLORS[i] }} />
            <span style={{ fontSize: '12px', color: '#666' }}>{year}</span>
          </div>
        ))}
        {hoveredData && (
          <div style={{ marginLeft: 'auto', fontSize: '12px', color: '#f0a500' }}>
            {hoveredData.skill} — {hoveredData.year}: <strong>{hoveredData.value}/10</strong>
          </div>
        )}
      </div>

      {/* Canvas */}
      <div style={{ height: '340px' }}>
        <Canvas camera={{ position: [0, 6, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#f0a500" />
          <pointLight position={[-10, 5, -10]} intensity={0.4} />
          <Scene hovered={hovered} setHovered={setHovered} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Footer label */}
      <div style={{ padding: '12px 24px', borderTop: '0.5px solid #1e1e1e' }}>
        <span style={{ fontSize: '11px', color: '#333', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Skills progression 2021–2025 · hover a bar · drag to rotate
        </span>
      </div>

    </div>
  );
}