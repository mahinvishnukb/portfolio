import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Photography", href: "#photography" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#"
          className="max-w-[190px] text-xl font-black leading-tight text-white sm:max-w-none md:text-2xl"
        >
          Mahin Vishnu K B
        </a>

        <ul className="hidden items-center gap-8 text-base font-medium text-white md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition duration-300 hover:text-yellow-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/30 text-3xl font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-black md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-black/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-white transition hover:text-yellow-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;