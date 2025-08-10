import { ChevronsUp, Contact, Linkedin } from "lucide-react";
import React from "react";
import Container from "../ui/container";

const Footer: React.FC = () => {
  return (
    <footer
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      className="bg-stone-950 items-center relative pt-8 pb-4 md:pt-16 md:pb-8 text-base h-[780px]"
    >
      <div className="fixed bottom-0 h-[780px] w-full py-8">
        <Container className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="flex flex-col gap-2 text-white/80 col-span-1 md:col-span-2 md:col-start-1">
            <h1 className="text-2xl md:text-3xl text-white font-semibold mb-2">
              Secciones
            </h1>
            <a href="#about">Nosotros</a>
            <a href="#solutions">Soluciones</a>
            <a href="#s5ys50">ILOQ S5 y S50</a>
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

          <div className="flex flex-col gap-2 text-white/80 col-span-1 md:col-span-2 md:col-start-7">
            <h1 className="text-2xl md:text-3xl text-white font-semibold">
              Legales
            </h1>
            <a href="/terminos-condiciones" className="hover:text-selfia-green transition-colors">
              Términos y Condiciones
            </a>
          </div>

          <div className="flex flex-col gap-2 text-white/80 col-span-1 md:col-span-2 md:col-start-11 mt-4 md:mt-0">
            <h1 className="text-2xl md:text-3xl text-white font-semibold">
              Contacto
            </h1>
            <a href="mailto:contacto@selfia.net" className=" text-selfia-green">
              contacto@selfia.net
            </a>
            <a href="tel:+576017460030">+57 (601) 7460030</a>
            <a href="https://maps.app.goo.gl/FC5rwUt2gmYTFqWx7" target="_blank">
              Calle 74a # 23 -19. Barrio San Felipe. Bogotá. Colombia. ZIP
              111211{" "}
            </a>
          </div>

          <img
            className="col-span-1 md:col-span-12 mt-8 md:mt-16  "
            src="/logos/Group.svg"
          ></img>

          <p className="col-span-1 md:col-span-12 text-xs text-center text-white/80">
            © 2024 Selfia. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
