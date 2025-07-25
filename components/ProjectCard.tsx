import React from 'react';
import {TypewriterEffectSmooth} from "@/components/ui/typewrter-effect";
import {ThreeDCardDemo} from "@/components/ThreeDCard";

const ProjectCard = () => {
    const words = [{text: "Project"}]
    const bank= {
        title: "Inventory Management",
        desc: "Next.js framework, styled with Tailwind CSS and featuring Material UI Data Grid for complex data handling, leveraging Node.js for backend APIs, using Prisma as the ORM to facilitate database interactions.",
        git: "https://github.com/lcxWEB/inventory-manage",
        link: "https://inventory-manage-seven.vercel.app/"
    }
    // const bms= {
    //     title: "Backstage System",
    //     desc: "React.js framework, using ReChart to achieve data visualization. Manage store information, inventory, and operations all-in-one.",
    //     git: "https://github.com/ruizhili518/BMS",
    //     link: "https://bms-e54qjf8ux-ruizhili518s-projects.vercel.app/login"
    // }
    // const eco = {
    //     title: "E-commerce Platform",
    //     desc: "Next.js framework, leveraging Node.js for backend APIs, Stripe for payment, and many features you can imagine for a e-com company.",
    //     git: "https://github.com/ruizhili518/coffee-shop",
    //     link: "https://eunnikoo.vercel.app/"
    // }

    return (
        <div
            className="relative w-full mt-16 flex flex-col items-center"
            id={"project"}
        >
            <TypewriterEffectSmooth words={words}/>
            <div className="flex w-full items-center gap-8 justify-center">
                <div className="w-1/3">
                    <ThreeDCardDemo img={"/inventory.jpg"} pro={bank}/>
                </div>
                {/* <div className="w-1/3">
                    <ThreeDCardDemo img={"/eco.jpg"} pro={eco}/>
                </div>
                <div className="w-1/3">
                    <ThreeDCardDemo img={"/bms.png"} pro={bms}/>
                </div> */}
            </div>
        </div>
    );
};

export default ProjectCard;


