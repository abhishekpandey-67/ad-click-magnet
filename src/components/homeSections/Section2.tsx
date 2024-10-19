"use client";

import Image from "next/image";
import adclickImage from "../../public/images/logo/adclickmagnetlogogrey.png"
import { useEffect } from "react";
import {gsap} from 'gsap'
import { TypewriterEffect } from "../ui/typewriter-effect";
 

const words = [
    {
      text: "Bondless",
    },
    {
      text: "Talents",
    },
    {
      text: "One",
    },
    {
      text: "Team",
    },
    {
      text: "Acm.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

export default function Section2() {
    useEffect(() => {
        let t1 = gsap.timeline({
            scrollTrigger:{
                trigger: ".sec2-container",
                start: "80% 50%",
                end: "100% 50%",
                markers: true,
                scrub: 1
            },
            
        })
        t1.to(".text-area-hover", {
            width: "100%"
        })
    })
    return (
        <div className="sec2-container">
            <Image width={150} height={150} src={adclickImage} alt="acmlogo" className="mb-3"/>
            
            <TypewriterEffect words={words} />
        </div>
    )
}

// text hover animation
//<div className="text-area">Bondless Talents One Team Acm</div>
//<div className="text-area-hover">Bondless Talents One Team Acm</div>