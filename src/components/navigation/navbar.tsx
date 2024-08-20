import Container from "../ui/container";

const Navbar = () => {
  return (
    <header className="z-50 fixed top-0 left-0 w-full animate-fade-in bg-white">
      <Container className="w-full h-full bg-white py-4 flex items-center justify-between">
        <a href="#">
          <img src="/logos/logo-selfia-classic.png" className="w-36 ml-3" />
        </a>
        <nav className="flex gap-4 text-lg font-semibold">
          <a className="hover:font-semibold" href="#about">
            Quienes somos
          </a>
          <a className="hover:font-semibold" href="#solutions">
            Productos
          </a>
          <a className="hover:font-semibold" href="#sust">
            Sustentabilidad
          </a>
        </nav>
        <a
          href="#contact"
          className="mr-3 text-faded-black bg-selfia-green/80 px-4 py-1 rounded-lg text-lg font-semibold"
        >
          Contacto
        </a>
      </Container>
    </header>
  );
};

export default Navbar;
