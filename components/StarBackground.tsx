"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const generateSpherePoints = (count: number, radius: number) => {
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = Math.cbrt(Math.random()) * radius; // Cubic root for uniform distribution

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        // Verify NaN just in case
        points[i * 3] = isNaN(x) ? 0 : x;
        points[i * 3 + 1] = isNaN(y) ? 0 : y;
        points[i * 3 + 2] = isNaN(z) ? 0 : z;
    }
    return points;
};

const StarField = ({ theme, ...props }: any) => {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => generateSpherePoints(5000, 1.2));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;

            // Twinkle effect: subtly pulse opacity
            if (ref.current.material) {
                ref.current.material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
            }
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color={theme === 'light' ? "#4F46E5" : "#f272c8"} // Indigo vs Pink
                    size={theme === 'light' ? 0.003 : 0.002} // Slightly larger in day
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarBackground = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Observer to watch for class changes on html element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    const isLight = document.documentElement.classList.contains("light-mode");
                    setTheme(isLight ? "light" : "dark");
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        // Initial check
        if (document.documentElement.classList.contains("light-mode")) {
            setTheme("light");
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full h-auto fixed inset-0 z-[0]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarField theme={theme} />
                    {/* Core Object: Black Hole (Dark) vs Sun/Orb (Light) */}
                    <mesh position={[0, 0, -2]} scale={theme === 'light' ? [8, 8, 1] : [5, 5, 1]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshBasicMaterial
                            color={theme === 'light' ? "#ffffff" : "#000000"}
                            transparent
                            opacity={theme === 'light' ? 0.4 : 1}
                        />
                    </mesh>
                    <pointLight
                        position={[0, 0, -1]}
                        intensity={theme === 'light' ? 100 : 50}
                        color={theme === 'light' ? "#00c3ff" : "#7042f8"}
                        distance={theme === 'light' ? 10 : 5}
                    />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarBackground;
