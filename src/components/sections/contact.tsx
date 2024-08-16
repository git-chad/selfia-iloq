import { Building2, Mail, Phone } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="grid grid-cols-12 gap-5 py-24">
      <div className="col-span-12 relative isolate text-black">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                <div
                  aria-hidden="true"
                  className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                >
                  <div
                    style={{
                      clipPath:
                        "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                      transform: "scaleX(-1)",
                    }}
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-selfia-blue to-selfia-green/30 opacity-20"
                  />
                </div>
              </div>
              <h2 className="text-5xl md:text-[4rem] font-bold tracking-tight text-black">
                Contactanos
              </h2>
              <p className="mt-6 text-lg leading-8 text-black text-balance">
                Envianos un email con tus consultas y nos pondremos en contacto a la brevedad.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-black">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <Building2
                      aria-hidden="true"
                      className="h-7 w-6 text-black"
                    />
                  </dt>
                  <dd>
                    545 Calle Falsa
                    <br />
                    Bogota, Colombia
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <Phone
                      aria-hidden="true"
                      className="h-7 w-6 text-black"
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:+576017460030"
                      className="hover:text-black transition-colors"
                    >
                      +57 (601) 7460030
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <Mail
                      aria-hidden="true"
                      className="h-7 w-6 text-black"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:contacto@selfia.net"
                      className="hover:text-black transition-colors"
                    >
                      contacto@selfia.net
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-gray-900 w-full rounded-xl text-white">
            <img src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full object-cover rounded-xl"/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
