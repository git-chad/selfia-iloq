import { ChevronsUp, Contact, Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="grid grid-cols-12 gap-5 bg-faded-black items-center relative">


            <h1 className=" col-span-12  text-center text-white font-semibold text-[4rem] leading-none tracking-tighter my-16">SELFIA</h1>

            <div className="flex flex-row col-span-12 justify-around items-center ">
                <div className='flex flex-col gap-3'>
                    <a href='mailTo:selfia@email.com' className='text-4xl text-white font-semibold '> selfia@email.com</a>
                    <div className=' h-px bg-white'></div>
                </div>
                <div className="flex flex-row gap-2">
                    <Contact size={80} color='white' />
                    <div className='flex flex-col gap-2'>
                        <a href='tel:+1234567890' className='text-white text-2xl font-semibold'> +1234567890</a>
                        <div className=' h-px bg-white'></div>
                        <a href="maps:location" className=' text-gray-500 text-lg font-semibold'>Colombia / Bogotá</a>
                    </div>
                </div>
            </div>

            <div className='col-span-10 col-start-2 items-center justify-center h-px bg-white/30'></div>


            <ChevronsUp className='text-white absolute right-10 bottom-10' size={40} />

            <div className='col-span-12 flex justify-center gap-4'>
                <div className='p-2 rounded-full border border-gray-500 '>
                    <Linkedin className='text-white' />
                </div>
                <div className='p-2 rounded-full border border-gray-500 '>
                    <Facebook className='text-white' />
                </div>
                <div className='p-2 rounded-full border border-gray-500 '>
                    <Instagram className='text-white' />
                </div>
            </div>


            <div className="col-span-12 flex justify-center">
                <p className="text-center text-sm">© 2021 iLOQ. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;