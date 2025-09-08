"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install: npm i lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000]  shadow-sm fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl text-[#ffffffeb] font-bold">
            <span>Ayush.</span>
          </div>
          <div className="logo w-[32px] h-[32px] md:hidden justify-self-center flex absolute left-[50%] translate-x-[5%]">
            <img
              src="https://iili.io/3znizAJ.png"
              alt="pfimage"
              className="w-100 h-auto"
            />
          </div>

          <div className="hidden md:flex space-x-11">
            <a href="#" className="text-[#ffffffa3] text-xl">
              Home
            </a>
            <a href="#" className="text-[#ffffffa3] text-xl">
              About
            </a>
            <a href="#" className="text-[#ffffffa3] text-xl">
              Services
            </a>
            <a href="#" className="text-[#ffffffa3] text-xl">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1f1f1f] shadow-lg flex items-center flex-col">
          <a href="#" className="block px-4 py-2 text-white">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-white">
            About
          </a>
          <a href="#" className="block px-4 py-2 text-white">
            Services
          </a>
          <a href="#" className="block px-4 py-2 text-white">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
