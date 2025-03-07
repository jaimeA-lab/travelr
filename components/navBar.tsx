'use client'
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function NavBar() {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScroll(true)
            } else { setScroll(false) }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (

        <nav className={`fixed w-full z-50 ${scroll ? 'bg-black/20 backdrop-blur-xl backdrop-brightness-[0.9]' : 'bg-black/00'} transition duration-300 px-8`}>
            <div className={`container h-[70px] mx-auto flex items-center justify-between rounded-b-2xl px-6`}>
                <Image src={"/images/dfm-light.svg"} alt='logo' width={120} height={120} className='h-[26px] w-[auto]' />
                <ul className='flex flex-row gap-14'>
                    <li>
                        <a className='text-white flex items-center gap-4 transform transition-transform duration-300 hover:scale-125' href="tel:+34910228319">
                            <Phone color='white' />
                        </a>
                    </li>
                    <li>
                        <a className="text-white flex items-center gap-4 transform transition-transform duration-300 hover:scale-125" href="mailto:info@dfmtravel.com">
                            <Mail color="white" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
