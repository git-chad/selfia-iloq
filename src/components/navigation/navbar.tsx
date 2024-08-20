import { useState } from "react";
//@ts-ignore
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu as Bars3Icon, X as XMarkIcon } from "lucide-react";
import Container from "../ui/container";

const navigation = [
  { name: "Quienes somos", href: "#about" },
  { name: "Productos", href: "#solutions" },
  { name: "Sustentabilidad", href: "#sust" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 bg-white fixed top-0 left-0 w-full">
      <Container>
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between gap-x-6 py-3"
        >
          <div className="flex lg:flex-1">
            <a href="#">
              <img src="/logos/logo-selfia-classic.png" className="w-36" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-faded-black"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-faded-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-selfia-green"
            >
              Contacto
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </Container>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Linkedin
                </a>
                <a
                  href="mailto:contacto@selfia.net"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  contacto@selfia.net
                </a>
                <a
                  href="tel:+57 601 7460030"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  +57 (601) 7460030
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

// old
// import Container from "../ui/container";

// const Navbar = () => {
//   return (
//     <header className="z-50 fixed top-0 left-0 w-full animate-fade-in bg-white">
//       <Container className="w-full h-full bg-white py-4 flex items-center justify-between">
//         <a href="#">
//           <img src="/logos/logo-selfia-black.png" className="w-24 ml-3" />
//         </a>
//         <nav className="flex gap-4 text-lg font-medium">
//           <a className="hover:font-semibold" href="#about">
//             Quienes somos
//           </a>
//           <a className="hover:font-semibold" href="#solutions">
//             Productos
//           </a>
//           <a className="hover:font-semibold" href="#sust">
//             Sustentabilidad
//           </a>
//         </nav>
//         <a
//           href="#contact"
//           className="mr-3 text-faded-white bg-faded-black px-4 py-1 rounded-lg text-lg"
//         >
//           Contacto
//         </a>
//       </Container>
//     </header>
//   );
// };

// export default Navbar;