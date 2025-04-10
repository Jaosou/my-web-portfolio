import Link from "next/link"
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { type } from "os";

type MenubarProps = {
    isClick: boolean,
    setIsClick: (isClick: boolean) => void
}

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const Menubar = ({ isClick, setIsClick }: MenubarProps) => {

    const toggleOnClick = async () => {
        await delay(100);
        setIsClick(!isClick)
    }

    return (
        <div>
            <div className="menuBarContainner">
                <Link href="/" className="navbarCss">
                    Home
                </Link>
                <Link href="#About" className="navbarCss">
                    About
                </Link>
                <Link href="#Projects" className="navbarCss">
                    Projects
                </Link>
                <Link href="#Contact" className="navbarCss">
                    Contact
                </Link>
            </div>
            <div className="w-full flex justify-end">
                <div className="menuBarBtn">
                    {
                        !isClick
                            ? <button className="menuBtnNav" onClick={toggleOnClick}>
                                <Menu className="mr-2" />
                                <p>Menu</p>
                            </button>
                            : <button className="menuBtnNav" onClick={toggleOnClick}>
                                <X className="mr-2" />
                                <p>Close</p>
                            </button>
                    }
                </div>
            </div>


        </div>
    )
}
export default Menubar