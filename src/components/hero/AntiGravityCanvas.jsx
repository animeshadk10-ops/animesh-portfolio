import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, Icosahedron } from '@react-three/drei';

const AntiGravityCanvas = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />

                <group position={[2, 0, 0]}>
                    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                        <Icosahedron args={[1.2, 0]}>
                            <MeshDistortMaterial
                                color="#FF6B00"
                                envMapIntensity={1}
                                clearcoat={1}
                                clearcoatRoughness={0.1}
                                metalness={0.8}
                                roughness={0.2}
                                distort={0.4}
                                speed={2}
                            />
                        </Icosahedron>
                    </Float>
                </group>

                <Sparkles
                    count={150}
                    scale={10}
                    size={2}
                    speed={0.4}
                    color="#007BFF"
                    opacity={0.8}
                />
            </Canvas>
        </div>
    );
};

export default AntiGravityCanvas;
