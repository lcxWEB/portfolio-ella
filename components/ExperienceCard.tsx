"use client";
import React from 'react';
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {TypewriterEffectSmooth} from "@/components/ui/typewrter-effect";

const testimonials = [
    {
        quote:
            ['● Led Agile team to refactor monolithic OEM management system into 3 microservices.',
             '● Designed scalable Renovation & Expansion Project Management System from scratch.'],
        name: "Software Development Engineer, BOE, China",
        title: "Mar, 2022 - Sep, 2023",
    },
    {
        quote:
            ['● Designed distributed driver tracking service handling 50K+ active drivers'],
        name: "Senior Software Development Engineer, Shihui, China",
        title: "May, 2021 - Dec, 2021",
    },
    {
        quote:
            ['● Delivered Archives Management System from scratch using Spring Boot and MongoDB, leveraging RabbitMQ for text extraction from attachments using OCR, video processing, and notification sending.'],
        name: "Software Development Engineer, Xinyingjie, China",
        title: "Apr, 2019 - Mar, 2021",
    },
    {
        quote:
            ['● Built RESTful APIs for e-commerce platform Zhuanba Mall using Spring Boot and MySQL.',
                '● Developed internet cafe management system using React, Express and MySQL'
            ],
        name: "Software Engineer, Yunzhi Internet, China",
        title: "Mar, 2017 - Apr, 2019",
    },
    {
        quote:
            ['● Automated Web UI testing for the Franchise Management Platform using Python, improving test efficiency by 80%'],
        name: "Software Test Engineer, Shunwang, China",
        title: "Apr, 2015 - Mar, 2017",
    }
];

const words = [{text: "Experience"}]

const ExperienceCard = () => {
    return (
        <div
            className="relative w-full mt-16 flex flex-col items-center"
            id="experience"
        >
            <TypewriterEffectSmooth words={words}/>
            <p className="text-neutral-500 text-sm w-1/2 mb-4 mt-8 dark:text-neutral-300">
                I have 8 years of professional experience as a software testing engineer and software development engineer in China, involving tech-startups and enterprise environments. Now I am volunteering as a Full Stack Developer in Suogogo, and I am dedicated to developing enterprise-grade, high-performance applications by writing maintainable and high-quality code.
            </p>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
                className="mt-10"
            />
        </div>
    );
};

export default ExperienceCard;




