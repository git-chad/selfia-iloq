import { ChevronsUp, Contact, Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';
import Container from '../ui/container';

const Footer: React.FC = () => {
    return (
        <footer className=" bg-faded-black items-center relative pt-16 pb-4">

            <Container className='grid grid-cols-12 gap-5'>
      
            <div className='flex flex-col gap-2 text-white/80 col-span-2 col-start-1'>
                <h1 className='text-3xl text-white text-semibold mb-2'>Secciones</h1>
                <a href='#about'>Nosotros</a>
                <a href='#iloq5'>ILOQ 5</a>
                <a href='#iloq50'>ILOQ 50</a>
                <a href='#solutions'>Soluciones</a>
                <a href='#sust'>Sustentabilidad</a>
                <a href='#contact'>Contacto</a>
            </div>
            
            <div className='flex flex-col gap-4 items-start text-white/80 col-span-2 col-start-4'>
                <h1 className='text-3xl text-white text-semibold'>Redes</h1>
                <div className='flex flex-col gap-2 '>
                    <a href='https://www.linkedin.com/company/selfia-iloq' className='flex items-center gap-2 leading-none '><Linkedin/> Linkedin</a>
                    </div>
                </div>

            <div className='flex flex-col gap-2 text-white/80 col-span-2 col-start-11'>
                <h1 className='text-3xl text-white text-semibold'>Contacto</h1>
                <a href='mailto:mail@mail.com' className=' text-xl text-selfia-green'>selfia@mail.com</a>
            </div>

            <h1 className='col-span-12 text-[16rem] tracking-tighter font-bold text-white leading-none'>Selfia</h1>

            <p className='col-span-12 text-center text-white/80'>© 2024 Selfia. All rights reserved.</p>
            
            </Container>
        
          
        </footer>
    )
}

export default Footer;