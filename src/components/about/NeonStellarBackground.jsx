import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';

const MovingStarfield = () => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        // Continuously rotate the entire starfield on the Y and X axis
        if (groupRef.current) {
            groupRef.current.rotation.y -= delta * 0.03;
            groupRef.current.rotation.x -= delta * 0.01;
        }
    });

    return (
        <group ref={groupRef}>
            <Stars radius={100} depth={50} count={1500} factor={6} saturation={1} fade speed={4} />
            <Sparkles count={400} scale={25} size={2} speed={2} opacity={0.6} color="#FF007F" />
            <Sparkles count={400} scale={25} size={2} speed={3} opacity={0.4} color="#00F0FF" />
        </group>
    );
};

const NeonStellarBackground = () => {
    return (
        <>
            {/* Ambient Glow Divs */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#7000FF] rounded-full blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#FF007F] rounded-full blur-[150px] opacity-20 translate-x-1/3 translate-y-1/3 z-[1] pointer-events-none" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none mix-blend-overlay"></div>

            {/* 3D Canvas */}
            <div className="absolute inset-0 z-0 bg-[#05000A] pointer-events-none">
                <Canvas dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false, alpha: false, stencil: false, depth: false }} camera={{ position: [0, 0, 5], fov: 60 }}>
                    <color attach="background" args={['#05000A']} />
                    <MovingStarfield />
                </Canvas>
            </div>
        </>
    );
};

export default NeonStellarBackground;
