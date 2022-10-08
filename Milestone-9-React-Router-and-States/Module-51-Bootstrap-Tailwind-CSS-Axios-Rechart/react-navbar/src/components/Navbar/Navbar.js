import React, { useState } from 'react';
import Links from '../Links/Links';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Products', path: '/products' },
        { id: 3, name: 'About', path: '/about' },
        { id: 4, name: 'Orders', path: '/orders' },
        { id: 5, name: 'Contact', path: '/contact' },
    ]
    return (
        <nav className='bg-indigo-500 w-full'>
            {/* <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6" />
            <span>{open ? "open " : "close  "}</span> */}

            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {open ? <XMarkIcon /> : <Bars3Icon />}
            </div>

            {/* {
                open ?
                    <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6" />
                    :
                    <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6" />
            } */}
            <ul className={`md:flex justify-center bg-indigo-400 w-full text-center p-4 absolute duration-500 ease-in md:static ${open ? 'top-6' : 'top-[-170px]'}`}>
                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;