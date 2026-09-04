"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Wrapper from "../global/wrapper";
import MobileMenu from "./mobile-menu";

const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "#services" },
    { name: "WORKS", href: "#works" },
    { name: "BLOGS", href: "#blogs" },
    { name: "TEAM", href: "#team" },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
            <Wrapper className="py-5">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img
                            src="/icons/icon-dark.png"
                            alt="Dhaka Designer"
                            className="w-12 h-12 object-contain"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex items-center">
                        <ul className="flex items-center">
                            {navLinks.map((link, index) => (
                                <li key={index} className="flex items-center">
                                    <Link
                                        href={link.href}
                                        className={`px-8 py-3 text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                                            pathname === link.href
                                                ? "text-blue-600"
                                                : "text-foreground hover:text-blue-600"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                    {index < navLinks.length - 1 && (
                                        <div className="w-px h-6 bg-gray-300" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Button */}
                    <div className="flex items-center">
                        <Link href="#contact" className="hidden lg:block">
                            <button className="bg-blue-600 text-white px-10 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black hover:text-yellow-400 transition-colors cursor-pointer">
                                CONTACT
                            </button>
                        </Link>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Navbar;
