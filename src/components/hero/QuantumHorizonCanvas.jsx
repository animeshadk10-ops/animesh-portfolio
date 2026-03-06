import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { TorusKnot, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export const ChromaticWireframeMaterial = () => {
    const materialRef = useRef();

    useFrame((state) => {
        if (materialRef.current) {
            // Pass the elapsed time into the shader every frame
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }
    });

    // The Math: Calculates waves of Cyan, Magenta, and Gold based on physical 3D position
    const vertexShader = `varying vec3 vPosition; void main() { vPosition = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

    const fragmentShader = `
uniform float uTime;
varying vec3 vPosition;

void main() {
  // Brand Colors
  vec3 cyan = vec3(0.0, 0.94, 1.0);   // #00F0FF
  vec3 magenta = vec3(1.0, 0.0, 0.5); // #FF007F
  vec3 amber = vec3(1.0, 0.84, 0.0);  // #FFD700

  // Mathematical wave generation based on time and space
  float wave1 = sin(vPosition.x * 0.4 + uTime * 0.8) * 0.5 + 0.5;
  float wave2 = cos(vPosition.y * 0.5 + uTime * 1.1) * 0.5 + 0.5;
  float wave3 = sin(vPosition.z * 0.6 + uTime * 0.6) * 0.5 + 0.5;

  // Blend the colors smoothly
  vec3 colorMix = mix(cyan, magenta, wave1);
  colorMix = mix(colorMix, amber, wave2 * wave3);

  // Multiply by 2.5 to force a blown-out, emissive neon glow
  gl_FragColor = vec4(colorMix * 2.5, 1.0);
}
`;

    return (
        <shaderMaterial
            ref={materialRef}
            wireframe={true}
            transparent={true}
            uniforms={{ uTime: { value: 0 } }}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            toneMapped={false} // Crucial for the neon burn effect
        />
    );
};

const QuantumGeometry = () => {
    const meshRef = useRef();
    const { mouse, viewport, camera } = useThree();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.1;
            meshRef.current.rotation.y = time * 0.15;

            // Map mouse to rotation violently
            const targetX = (mouse.y * viewport.height) / 4;
            const targetY = (mouse.x * viewport.width) / 4;

            meshRef.current.rotation.x += targetX * 0.1;
            meshRef.current.rotation.y += targetY * 0.1;

            // Camera parallax
            camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
            camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);
        }
    });

    return (
        <TorusKnot ref={meshRef} args={[3, 1, 200, 40]} scale={1.5}>
            <ChromaticWireframeMaterial />
        </TorusKnot>
    );
};

const QuantumHorizonCanvas = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full bg-[#000000]">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.08)_0%,transparent_60%)] pointer-events-none"></div>
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                {/* No lights needed since the WebGL Shader calculates its own emissive math for zero GPU load */}

                <QuantumGeometry />

                <Sparkles
                    count={200}
                    scale={20}
                    size={2}
                    speed={0.5}
                    color="#FFD700"
                    opacity={0.8}
                />
                <Sparkles
                    count={100}
                    scale={25}
                    size={1.5}
                    speed={0.8}
                    color="#00F0FF"
                    opacity={0.4}
                />
            </Canvas>
        </div>
    );
};

export default QuantumHorizonCanvas;
