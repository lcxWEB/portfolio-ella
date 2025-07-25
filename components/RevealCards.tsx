"use client";
import React, {ReactNode} from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";

const ba =
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Bachelor Degree</h2>
        <p>Beijing University of Posts and Telecommunications, China</p>
        <p>Bachelor of Mechanical Engineering and Automation</p>
        <p className="text-base">Courses: Data Structures and Algorithms, C Programming, Advanced Mathematics, Linear Algebra, ... </p>
        <p>Sep 2008 - Jul 2012</p>
    </div>

const ms =
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Master Degree</h2>
        <p className="text-base">Beijing University of Posts and Telecommunications, China</p>
        <p>Master of Mechanics and Electronics</p>
        <p className="text-base">Courses: Structural Design, Material Engineering... </p>
        <p>Sep 2012 - Mar 2015</p>
    </div>

const other =
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Master Degree</h2>
        <p>Fairleigh Dickinson University, Vancouver</p>
        <p>Master of Computer Science</p>
        <p className="text-base">Courses: .Net, C++, React, JavaScript, Node.js, Express, ... </p>
        <p>Sep 2023 - Dec 2024</p>
    </div>

export function RevealCards() {
    return (
        <>
            <div className="mt-16 mb-8 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-transparent w-full gap-4 mx-auto px-8">
                <Card outText="Bachelor Degree" inText={ba} logo={"/bupt-logo.png"} size={160}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card outText="Master Degree" inText={ms} logo={"/bupt-logo.png"} size={160}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-pink-900"
                        colors={[
                            // [255, 78, 114],
                            [244, 165, 255],
                        ]}
                        // dotSize={2}
                    />
                </Card>
                <Card outText="Master Degree" inText={other} logo={"/fdu-logo.jpg"} size={260}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </>
    );
}

const Card = ({
                  outText,
                  inText,
                  logo,
                  size,
                  children,
              }: {
    outText: string;
    inText: ReactNode;
    logo: string;
    size: number;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center text-2xl font-bold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-300 w-full mx-auto flex flex-col items-center justify-center absolute inset-0 z-10 gap-12">
                    {outText}
                    <div className="w-3/5 h-40 overflow-hidden flex justify-center items-center">
                        <Image src={logo} alt="school logo" width={size} height={size} />
                    </div>
                </div>
                <div className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-300">
                    {inText}
                </div>
            </div>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
