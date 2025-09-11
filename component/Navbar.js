"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href ? "text-white" : "text-[#ffffffa3] hover:text-white";
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <nav
      id="nav"
      className=" shadow-sm fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl text-[#ffffffeb] font-bold">
            <div className="text-3xl">Ayush.</div>
          </div>

          <div className="hidden md:flex lg:inline-block space-x-11">
            <Link
              href="/"
              className={`${isActive(
                "/"
              )} text-xl list-none relative inline-block px-3 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${isActive(
                "/about"
              )} text-xl list-none relative inline-block px-3 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              About
            </Link>
            <Link
              href="/project"
              className={`${isActive(
                "/project"
              )} text-xl list-none relative inline-block px-3 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`${isActive(
                "/contact"
              )} text-xl list-none relative inline-block px-3 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center mt-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex flex-col justify-between items-center w-8 h-8"
            >
              <span
                className={`absolute w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>

              <span
                className={`absolute w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`
          md:hidden fixed top-16 left-0 w-full bg-[#1f1f1f] shadow-lg flex flex-col items-center
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
        >
          <Link
            href="/"
            className={isActive("/") + " block px-4 py-2 list-none"}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={isActive("/about") + " block px-4 py-2 list-none"}
          >
            About
          </Link>
          <Link
            href="/project"
            className={isActive("/project") + " block px-4 py-2 list-none"}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={isActive("/contact") + " block px-4 py-2 list-none"}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
