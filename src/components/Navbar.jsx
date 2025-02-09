import { useEffect } from "react";
import { MenuItems } from "../constants";
import { FaDownload } from "react-icons/fa"; 
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from '@/assets/logo.png';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-240 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg">
      <div className="px-8 lg:px-24 py-3 lg:py-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={Logo} alt="Logo" width={140} height={120} />

          {/* Mobile Menu Button */}
          <button
            className="w-7 h-5 relative cursor-pointer z-40 lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menü umschalten"
          >
            < HiMenuAlt2 className="text-black w-9 h-9" />;
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {MenuItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-gray-700 hover:text-black transition-colors text-lg"
              >
                {label}
              </a>
            ))}

            {/* Download CV Button */}
            <a
              href="/Lebenslauf.pdf" 
              download="Lebenslauf.pdf"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md shadow-md transition-all hover:bg-gray-900 hover:scale-105 "
            >
              <span>Lebenslauf</span>
              <FaDownload className="text-white w-4 h-4" /> 
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
