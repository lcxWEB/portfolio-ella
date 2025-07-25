//@ts-nocheck
"use client";
import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@/components/ui/my-navbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function NavList() {
    // @ts-ignore
    const adjustScroll= (event) => {
        event.preventDefault();
        const ele = document.getElementById(event.target.href.split("#")[1]);
        if(ele){
            const yOffset = -150;
            const yPosition = ele.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({
                top: yPosition,
                behavior: 'smooth'
            })
        }
    }
    return (
        <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 w-full">
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-bold text-xl"
            >
                <a href="#home" className="flex items-center hover:text-blue-500 transition-colors" onClick={adjustScroll}
                >
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-bold text-xl"
            >
                <a href="#project" className="flex items-center hover:text-blue-500 transition-colors"
                   onClick={adjustScroll}>
                    Project
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-bold text-xl"
            >
                <a href="#education" className="flex items-center hover:text-blue-500 transition-colors"
                   onClick={adjustScroll}>
                    Education
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-bold text-xl"
            >
                <a href="#skill" className="flex items-center hover:text-blue-500 transition-colors"
                   onClick={adjustScroll}>
                    Skill
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-bold text-xl"
            >
                <a href="#experience" className="flex items-center hover:text-blue-500 transition-colors"
                   onClick={adjustScroll}>
                    Experience
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-bold text-xl"
            >
                <a href="#contact" className="flex items-center hover:text-blue-500 transition-colors"
                   onClick={adjustScroll}>
                    Contact
                </a>
            </Typography>
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    // @ts-ignore
    return (
        <Navbar className="mx-auto max-w-screen-xl px-12 py-3 sticky top-0 z-50 bg-gray-800 border-0">
            <div className="flex items-center justify-between text-white">
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 flex gap-4 text-2xl"
                >
                    <Image src="/ella.png" alt="logo" width={100} height={100} />
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}