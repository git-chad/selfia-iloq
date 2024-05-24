import Container from "../ui/container"

const Navbar = () => {
  return (
    <header className="z-50 fixed top-4 left-0 w-full animate-fade-in">
        <Container className="w-full h-full bg-white py-2 backdrop-blur-3xl border-2 border-slate-100/90 rounded-xl flex items-center justify-between">
            <a href="#" className="pl-3 text-xl font-semibold tracking-tighter">Selfia</a>
            <nav className="flex gap-4 text-xs font-medium">
                <a className="hover:font-semibold" href="#about">Quienes somos</a>
                <a className="hover:font-semibold" href="#products">Productos</a>
                <a className="hover:font-semibold" href="#sust">Sustentabilidad</a>
            </nav>
            <a href="#contact" className="mr-3 text-faded-white bg-faded-black px-4 py-1 rounded-lg text-xs">Contacto</a>
        </Container>
    </header>
  )
}

export default Navbar