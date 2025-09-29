"use client";
import { useEffect, useState, useRef } from "react";
import { useClickAway } from "react-use";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, easeOut, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));
  const isActive = (href) =>
    pathname === href
      ? "dark:text-white text-gray-900"
      : "dark:text-[#ffffffa3] text-[#0c0407] dark:hover:text-gray-100";
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav
      id="nav"
      className=" w-full dark:bg-[#323232] dark:text-white bg-white text-[#0c0407]"
    >
      <div className="max-w-7xl mx-auto  lg:px-8 md:px-4 nav-menu">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold">
            <div className="text-3xl ">Ayush.</div>
          </div>

          <div className="hidden md:flex lg:inline-block space-x-11">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${isActive(
                  href
                )}  text-xl list-none relative inline-block px-3 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 dark:after:bg-white after:bg-[#9b36f2] after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div ref={ref} className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="toggleButton"
              className="relative flex flex-col justify-center  items-center w-10 h-10"
            >
              <span
                className={`absolute w-6 h-[2px] dark:bg-white bg-black shadow-inner rounded transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-[2px] dark:bg-white bg-black shadow-inner rounded transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>

              <span
                className={`absolute w-6 h-[2px] dark:bg-white bg-black shadow-inner rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`
                absolute top-20 left-0 right-0 z-50
          lg:hidden  w-full dark:bg-[#1f1f1f] bg-white  shadow-lg flex flex-col items-center
          drawer
          
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${isActive(href)} block px-4 py-2 list-none `}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
