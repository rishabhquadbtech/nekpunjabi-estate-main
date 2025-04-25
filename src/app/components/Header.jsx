
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { RiMenu2Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const pathname = usePathname();

  // Animate on mount
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#logo", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
    });
    tl.from("#nav-links a", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });
    tl.from("#contact-button", {
      y: -30,
      opacity: 0,
      duration: 0.5,
    });
  }, []);

  // Animate mobile menu when it opens
  useEffect(() => {
    if (menuOpen) {
      gsap.from("#mobile-menu a", {
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });
    }
  }, [menuOpen]);

  // Hide/show navbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideNavbar(true); 
      } else {
        setHideNavbar(false); 
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 py-8 backdrop-blur-lg bg-white/30 shadow-md z-50 font-poppins rounded-b-3xl transition-transform duration-500 ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center">
        <div id="logo">
          <Image src="/neklogo.png" alt="QuadB Tech" width={120} height={40} />
        </div>

        <div id="nav-links" className="hidden md:flex space-x-6 font-medium text-lg">
          {[
            { path: "/about", label: "About" },
            { path: "/service", label: "Service" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-1 rounded-full ${
                pathname === path ? "border-2 font-semibold" : "hover:text-black"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/getAdvice">
            <button
              id="contact-button"
              className={`px-4 py-2 rounded-full font-semibold ${
                pathname === "/getAdvice" ? "text-black" : "hover:text-black"
              }`}
            >
              Get Advice
            </button>
          </Link>
        </div>

        <button onClick={() => setMenuOpen(true)} className="md:hidden text-black">
          <RiMenu2Fill size={32} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 sm:w-2/5 shadow-lg bg-white p-6 transition-transform duration-500 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <button onClick={() => setMenuOpen(false)} className="text-black">
            <FaXmark size={32} />
          </button>
        </div>

        <div id="mobile-menu" className="flex flex-col items-end p-10 space-y-6 text-lg mt-10">
          {[
            { path: "/about", label: "About" },
            { path: "/service", label: "Services" },
            { path: "/getAdvice", label: "Get Advice" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 rounded-full ${
                pathname === path ? "border-2 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

