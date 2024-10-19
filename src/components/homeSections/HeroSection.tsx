"use client";

import "../../components/app.css";
import Image from "next/image";
import HeroModel from "../3dmodels/heroModel";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {Menu, MenuItem, ProductItem, HoveredLink} from '../ui/navbarMenu';
import { useState } from "react";
//import { Button } from "./ui/moving-border";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function HeroSection({className}: {className?: string}) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <HeroModel />
            <header>
                <div className={cn("fixed top-7 inset-x-0 mx-auto z-50", className)}>

                    <Menu setActive={setActive}>
                        <Link href="/" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Home">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/web-dev">Web dev</HoveredLink>
                                    <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                    <HoveredLink href="/seo">Search engine optimization</HoveredLink>
                                    <HoveredLink href="/branding">Branding</HoveredLink>
                                </div>
                            </MenuItem>
                        </Link>
                        <Link href="/services" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Services">
                                <div className="flex flex-col space-y-4 text-sm">
                                    
                                    <ProductItem title="design" description="Website Design
                                                Website Redesign
                                                Rapid Web Design
                                                Social Media Design
                                                Ecommerce Website Design
                                                Email Marketing Testing & Design" href="/ui-ux-design" src='https://tse4.mm.bing.net/th?id=OIP.doYHfVKgVncrGIL5jmSOMgHaE8&pid=Api&P=0&h=180'  />
                                </div>
                            </MenuItem>
                        </Link>
                        <Link href="/portfolio" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Portfolio" />
                        </Link>
                        <Link href="/cokntact-us" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Contact Us" />
                        </Link>
                    </Menu>
                </div>

            </header>

            <div className="hero-content flex flex-col justify-center absolute  h-80">
                <TextGenerateEffect words={"Drive More Growth"}  />
                <TextGenerateEffect  words={"Digital Marketing"}  />
                <br />
                <br />
                    <Link href="/">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="text-center dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        
                        <span>All Case Studies</span>
                        </HoverBorderGradient>
                    </Link>
            </div>
            
        </>
        );
    }
            

        