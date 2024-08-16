import { ChevronsUp, Contact, Linkedin } from "lucide-react";
import React from "react";
import Container from "../ui/container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-faded-black items-center relative pt-8 pb-4 md:pt-16 md:pb-8 text-base">
      <Container className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="flex flex-col gap-2 text-white/80 col-span-1 md:col-span-2 md:col-start-1">
          <h1 className="text-2xl md:text-3xl text-white font-semibold mb-2">
            Secciones
          </h1>
          <a href="#about">Nosotros</a>
          <a href="#iloq5">ILOQ S5</a>
          <a href="#iloq50">ILOQ S50</a>
          <a href="#solutions">Soluciones</a>
          <a href="#sust">Sustentabilidad</a>
          <a href="#contact">Contacto</a>
        </div>

        <div className="flex flex-col gap-2 items-start text-white/80 col-span-1 md:col-span-2 md:col-start-4">
          <h1 className="text-2xl md:text-3xl text-white font-semibold">
            Redes
          </h1>
          <div className="flex flex-col gap-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/selfia-iloq"
              className="flex items-center gap-2"
            >
              {/* <Linkedin /> */}
              <span>Linkedin</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-white/80 col-span-1 md:col-span-2 md:col-start-11 mt-4 md:mt-0">
          <h1 className="text-2xl md:text-3xl text-white font-semibold">
            Contacto
          </h1>
          <a href="mailto:mail@mail.com" className=" text-selfia-green">
            selfia@mail.com
          </a>
          <a href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a>
        </div>

        <h1 className="col-span-1 md:col-span-12 text-6xl md:text-[16rem] tracking-tighter font-bold text-white leading-none mt-8 md:mt-16">
          Selfia
        </h1>

        <p className="col-span-1 md:col-span-12 text-xs text-center text-white/80">
          © 2024 Selfia. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
