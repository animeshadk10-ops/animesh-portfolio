import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sparkles, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

const QuantumGeometry = () => {
    const meshRef = useRef();
    const materialRef = useRef();
    const { mouse, viewport } = useThree();

    const colorCyan = new THREE.Color("#00F0FF");
    const colorOrange = new THREE.Color("#FF6B00");

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            // Base rotation
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;

            // Target rotation based on mouse (violent & instant reaction)
            const targetX = (mouse.y * viewport.height) / 2;
            const targetY = (mouse.x * viewport.width) / 2;

            meshRef.current.rotation.x += targetX * 0.5;
            meshRef.current.rotation.y += targetY * 0.5;
        }

        if (materialRef.current) {
            // Dynamic color transition using sine wave
            const t = (Math.sin(time * 1.5) + 1) / 2;
            materialRef.current.color.lerpColors(colorCyan, colorOrange, t);
        }
    });

    return (
        <group>
            <TorusKnot ref={meshRef} args={[2.5, 0.8, 128, 32]} scale={1.2}>
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#00F0FF"
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.8}
                    roughness={0.2}
                    distort={0.6}
                    speed={5}
                    wireframe={true}
                />
            </TorusKnot>
        </group>
    );
};

const QuantumCanvas = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full bg-black">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#00F0FF" />
                <directionalLight position={[-10, -10, -5]} intensity={2} color="#FF6B00" />

                <QuantumGeometry />

                <group>
                    <Sparkles
                        count={600}
                        scale={15}
                        size={2}
                        speed={0.8}
                        color="#FF6B00"
                        opacity={0.8}
                    />
                    <Sparkles
                        count={600}
                        scale={20}
                        size={1.5}
                        speed={1.2}
                        color="#00F0FF"
                        opacity={0.6}
                    />
                </group>
            </Canvas>
        </div>
    );
};

export default QuantumCanvas;
