'use client'
import {NavLink, NavLinks} from "@/app/components/NavLink";
import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {MenuOverlay} from "@/app/components/MenuOverlay";

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='mx-auto p-4 flex md:p-8'>
                <div className='ml-auto mobile-menu block md:hidden'>
                    {!navbar ? (
                        <button onClick={() => setNavbar(true)} className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white'><Bars3Icon className='h-5 w-5' /></button>
                    ) : (
                        <button
                            onClick={() => setNavbar(false)}
                            className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5'/></button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto ml-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {NavLinks.map((link, index) => (
                            <li key={index}><NavLink href={link.href} title={link.title} /></li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbar ? <MenuOverlay links={NavLinks}/> : null}
        </nav>
)
}
