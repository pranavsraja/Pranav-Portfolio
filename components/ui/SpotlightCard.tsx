"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

export const SpotlightCard = ({
    children,
    className = "",
    spotlightColor = "rgba(112, 66, 248, 0.15)",
    ...props
}: SpotlightCardProps) => {
    const mouseXPos = useMotionValue(0);
    const mouseYPos = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseXPos.set(e.clientX - rect.left);
        mouseYPos.set(e.clientY - rect.top);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`relative group rounded-2xl border border-[var(--glass-border)] bg-[var(--card-glass)] overflow-hidden transition-all duration-300 ${className}`}
            {...props}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            300px circle at ${mouseXPos}px ${mouseYPos}px,
                            ${spotlightColor},
                            transparent 80%
                        )
                    `,
                }}
            />
            {children}
        </div>
    );
};

export default SpotlightCard;
