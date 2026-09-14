"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo.png" alt="Mandate Global Logo" width={50} height={50} className="object-contain" />
                        <span className="font-bold text-xl text-brand-primary tracking-wide">THE MANDATE GLOBAL</span>
                    </Link>
                    <div className="hidden md:flex space-x-8 items-center font-medium">
                        <Link href="/" className="hover:text-brand-secondary transition">Home</Link>
                        <Link href="/about" className="hover:text-brand-secondary transition">About</Link>
                        <Link href="/contact" className="hover:text-brand-secondary transition">Contact</Link>
                        <Link href="/register" className="bg-brand-primary text-white px-5 py-2.5 rounded-full hover:bg-brand-secondary transition">
                            Register Free
                        </Link>
                    </div>
                    <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-t px-4 pt-2 pb-6 space-y-3 flex flex-col font-medium">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link href="/register" onClick={() => setIsOpen(false)} className="bg-brand-primary text-white text-center py-2 rounded-md">
                        Register Free
                    </Link>
                </div>
            )}
        </nav>
    );
}