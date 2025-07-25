import React from 'react';
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import {TypewriterEffectSmooth} from "@/components/ui/typewrter-effect";

const SkillCard = () => {
    const skills1 = [
        {
            id:1,
            name: "Next.js",
            image:"/nextjs.png"
        },{
            id:2,
            name: "React.js",
            image:"/react-logo.png"
        },{
            id:3,
            name: "TypeScript",
            image:"/ts.png"
        },{
            id:4,
            name: "JavaScript",
            image:"/js.png"
        },{
            id:5,
            name: "Node.js",
            image:"/node.png"
        },{
            id:6,
            name: "Redux (Toolkit)",
            image:"/redux-icon.png"
        }
    ];
    const skills2 = [
        {
            id:1,
            name: "HTML",
            image:"/html.png"
        },{
            id:2,
            name: "CSS",
            image:"/css.png"
        },{
            id:3,
            name: "SASS",
            image:"/sass.png"
        },{
            id:4,
            name: "Tailwind",
            image:"/tailwind.png"
        },{
            id:5,
            name: "Express.js",
            image:"/express.png"
        },{
            id:6,
            name: "Python",
            image:"/python.png"
        },{
            id:7,
            name: "Java",
            image:"/java.png"
        },{
            id:8,
            name: "Github",
            image:"/git-logo.svg"
        }
    ];

    const words = [{text: "Skill"}]
    return (
        <div
            className="relative w-full mt-12 flex flex-col items-center"
            id="skill"
        >
            <TypewriterEffectSmooth words={words}/>
            <p className="text-neutral-500 text-sm w-1/2 mb-4 mt-8 dark:text-neutral-300">
                Proficiency in programming languages such as Java, JavaScript(TypeScript) and Python. Familiar with front-end frameworks such as Next.js and React.js, combined with various tools to build and maintain front-end systems. Understand the working mechanism of backend API and related development tools.
            </p>
            <div className="flex flex-col mt-16 gap-16 justify-center items-center">
                <div className="flex">
                    <AnimatedTooltip items={skills1}/>
                </div>
                <div className="flex">
                    <AnimatedTooltip items={skills2}/>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;