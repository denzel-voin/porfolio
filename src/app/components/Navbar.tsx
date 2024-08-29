'use client'

import {NavLink, NavLinks} from "@/app/components/NavLink";
import {useState} from "react";

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
            <div className='mx-auto p-8 flex'>
                <div className='mobile-menu block md:hidden'>
                    {
                        navbar ? (
                            <button></button>
                        ) : (
                            <button></button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto ml-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {NavLinks.map((link, index) => (
                            <li key={index}><NavLink href={link.href} title={link.title} /></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
)
}
