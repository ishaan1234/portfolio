// FloatingNavDemo.tsx

"use client";

import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "#about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Experience",
            link: "#experience",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Projects",
            link: "#projects",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact Me",
            link: "#contact",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    return (
        <div className="relative w-full dark">
            <FloatingNav navItems={navItems} />
        </div>
    );
}

export default FloatingNavDemo;
