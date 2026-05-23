const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            Mahin Vishnu K B
          </h1>
  
          <ul className="flex gap-6 text-sm md:text-base">
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#photography" className="hover:text-cyan-400">Photography</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;