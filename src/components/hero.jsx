import { TypewriterEffect } from "./ui/typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {Button, Link} from "@nextui-org/react";

export default function Hero(){

    const words = [
        { text: "Hi," },
        { text: "my" },
        { text: "name" },
        { text: "is" },
        { text: "Shahab" },
    ]

    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="p-4 text-center">
                <TypewriterEffect words={words}/>
            </div>
            <div className="p-4 text-center">
                <p>I am a Data Engineer at Shopify</p>
            </div>
            <div className="px-4 flex justify-center">
                <Button isIconOnly variant="light">
                    <a href="https://github.com/shahaba">
                        <FaGithub />
                    </a>
                </Button>
                <Button isIconOnly variant="light" >
                    <a href="https://www.linkedin.com/in/shahab-akmal/">
                        <FaLinkedin />
                    </a>
                </Button>
            </div>
        </div>
    )
}