import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logoHeader.png";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Investment", to: "/investment" },
  { name: "Projects", to: "/projects" },
  { name: "Business Model", to: "/business" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup: reset scroll when component unmounts or menu state changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#ffffff] shadow-md fixed top-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">
            <img src={logo} className="w-[200px]" alt="BUILDIFIE Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {navLinks.map(({ name, to }, index) => (
              <li key={index}>
                <Link
                  to={to}
                  className={`${
                    pathname === to ? "text-[#426e2f]" : "text-[#000]"
                  } hover:text-[#426e2f] transition text-lg`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-[#454b68] focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Slide Down) */}
      {isMenuOpen && (
        <div
          ref={menuRef} // Ref attached to the menu
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-40"
        >
          <nav className="space-y-4 px-4 py-2">
            {navLinks.map(({ name, to }, index) => (
              <Link
                key={index}
                to={to}
                onClick={toggleMenu} // Close menu on link click
                className="block text-[#000] hover:text-[#a5c6ff] transition text-lg"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
