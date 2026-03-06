import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Terrain = ({ activeColor }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        if (meshRef.current) {
            const position = meshRef.current.geometry.attributes.position;
            for (let i = 0; i < position.count; i++) {
                const x = position.getX(i);
                const y = position.getY(i);
                // Adjust Z coordinate to mimic digital waves based on time
                const z = Math.sin(x * 0.5 + time) * 0.5 + Math.cos(y * 0.5 + time) * 0.5;
                position.setZ(i, z);
            }
            position.needsUpdate = true;
        }
    });

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[50, 50, 64, 64]} />
            <meshStandardMaterial
                wireframe
                color={activeColor}
                emissive={activeColor}
                emissiveIntensity={2}
            />
        </mesh>
    );
};

const CyberTopographyBackground = ({ activeColor }) => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-1000 ease-in-out">
            <Canvas
                dpr={[1, 1.5]}
                gl={{ powerPreference: "high-performance", antialias: false, alpha: false }}
                camera={{ position: [0, 5, 10], fov: 60, focus: 10 }}
            >
                <color attach="background" args={['#020005']} />
                <ambientLight intensity={0.5} />
                <Terrain activeColor={activeColor} />
            </Canvas>
        </div>
    );
};

export default CyberTopographyBackground;
