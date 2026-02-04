"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Check initial preference
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle("light-mode", storedTheme === "light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("light-mode", newTheme === "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-5 right-5 z-[50] p-3 rounded-full glass-panel hover:bg-white/10 transition-all hover:scale-110 shadow-lg group"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun className="w-6 h-6 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
                <Moon className="w-6 h-6 text-purple-600 group-hover:-rotate-12 transition-transform duration-500" />
            )}
        </button>
    );
};
