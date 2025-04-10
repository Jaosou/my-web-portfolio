'use client'

import { assets } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { DarkMode } from "./DarkMode";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import Menubar from "./Menubar";
import { use, useState } from "react";

const Navbar = () => {

    const themeOb = useTheme()
    const [isClick, setIsClick] = useState(false)

    return (
        <nav className="navbarContainner">
                <div className="navbarContainnerFormat">
                    {/* LOGO */}
                    <Link href="/" className="logo">
                        <Image className="logoImage" src={assets.logo} alt="logo" />
                        <p
                            className="textLogo"
                        >
                            Jao<span>Sou</span>
                        </p>
                    </Link>

                    
                    {/* LINKS HOME ABOUT PROJECTS */}
                    <div className="divButtonNav">
                        <Menubar isClick={isClick} setIsClick={setIsClick} />
                    </div>


                    {/* Theme and Contact */}
                    <div className="w-1/12">
                        <DarkMode />
                    </div>
                </div>
            <div>
                {
                    isClick
                        ? <div className="menuActionContainner">
                            <Link href="/" className="menuActionHome">
                                Home
                            </Link>
                            <Link href="#About" className="menuActionHome">
                                About
                            </Link>
                            <Link href="#Projects" className="menuActionHome">
                                Projects
                            </Link>
                            <Link href="#Contact" className="menuActionHome">
                                Contact
                            </Link>
                        </div>
                        : ""
                }
            </div>
        </nav>
    );
};

export default Navbar
