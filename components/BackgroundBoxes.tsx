"use client";
import React from "react";
import {FlipWordsDemo} from "@/components/Flipwords";
import Image from "next/image";
import {SparklesCore} from "@/components/ui/sparles";
import {Button} from "@/components/ui/button";

export function BackgroundBoxes() {
    return (
        <div
            className="h-96 relative w-full overflow-hidden flex items-center justify-center rounded-lg mt-12 gap-20"
            id="home"
        >
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className={"w-full h-full flex items-center justify-center"} >
                <div className={"w-3/5 flex flex-col justify-start z-10 gap-12"}>
                    <FlipWordsDemo/>
                    <a href="/Chunxia(Ella)%20Li-Resume-SDE.pdf" download>
                        <Button className="w-48">
                            Download Resume
                        </Button>
                    </a>
            </div>
                <div className={"w-60 h-60 rounded-full flex justify-center items-center z-10"}>
                    <Image src="/myphoto.jpg" alt="logo" width={800} height={800} className={"rounded-full"}/>
                </div>
            </div>
        </div>
    );
}
