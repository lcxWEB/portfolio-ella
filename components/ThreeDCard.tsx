"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo({img , pro}:{img: string, pro: object}) {
    const info: {
        title: string,
        desc: string,
        git: string,
        link: string
    } = {
        title: "",
        desc: "",
        git: "",
        link: "",
        ...pro
    };
    return (
        <CardContainer className="inter-var w-full mt-6">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-neutral-600 dark:text-white"
                >
                    {info.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {info.desc}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={img}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="app-image"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={info.git}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center gap-4"
                    >
                        <Image src={"/git-logo.svg"} alt="git" width="20" height="20" />
                        Git Repo
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={info.link}
                        target="__blank"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Try Now
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
