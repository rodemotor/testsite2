import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md dark:bg-black/90"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <Link href="/">
          <a className="font-bold text-xl text-neutral-900 dark:text-white">
            MauroKrekels
          </a>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-neutral-700 dark:text-neutral-300 font-medium">
          <li>
            <a href="#hero" className="hover:text-black dark:hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-black dark:hover:text-white transition">
              Werk
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black dark:hover:text-white transition">
              Over mij
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-neutral-900 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 pb-6">
          <ul className="flex flex-col space-y-4 font-medium text-neutral-900 dark:text-white">
            <li>
              <a
                href="#hero"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-black dark:hover:text-neutral-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-black dark:hover:text-neutral-300"
              >
                Werk
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-black dark:hover:text-neutral-300"
              >
                Over mij
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-black dark:hover:text-neutral-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
