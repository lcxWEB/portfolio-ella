import React from 'react';
import EmailForm from "@/components/EmailForm";
import {TypewriterEffectSmooth} from "@/components/ui/typewrter-effect";

const EmailCard = () => {
    const words = [{text: "Contact Me"}]
    return (
        <div
            className="relative w-full mt-12 flex flex-col items-center"
            id="contact"
        >
            <TypewriterEffectSmooth words={words}/>
            <EmailForm/>
        </div>
    );
};

export default EmailCard;