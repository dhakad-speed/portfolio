"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, easeOut, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href
      ? "dark:text-white text-gray-900"
      : "dark:text-[#ffffffa3] text-black dark:hover:text-gray-100";
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
      className=" w-full dark:bg-[#323232] dark:text-white bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl  dark:text-[#ffffffeb] text-black font-bold">
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

          <div className="md:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="toggleButton"
              className="relative flex flex-col  items-center w-10 h-10"
            >
              <motion.span
                animate={
                  isOpen
                    ? { rotate: 45, y: 0, scaleX: 0.9 }
                    : { rotate: 0, y: -10 }
                }
                className="block w-10 h-[3px] bg-black dark:bg-white rounded"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-10 h-[3px] bg-black dark:bg-white rounded"
              />
              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: 0, scaleX: 0.9 }
                    : { rotate: 0, y: 10 }
                }
                className="block w-10 h-[3px] bg-black dark:bg-white rounded"
              />
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`
                fixed top-20 left-0 right-0 z-50
          lg:hidden  w-full dark:bg-[#1f1f1f] bg-white  shadow-lg flex flex-col items-center
          drawer
          
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${isActive(
                  href
                )} block px-4 py-2 list-none dark:text-white text-black`}
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
