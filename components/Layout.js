import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function Layout({ children, title = "Daniel Tham Portfolio" }) {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/services", label: "Services" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path) => {
        if (path === "/") return router.pathname === "/";
        return router.pathname.startsWith(path);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Daniel Tham - Software Developer & STEM Educator" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "py-3 bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-[#27272a]"
                        : "py-5 bg-transparent"
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-[#0a0a0b] text-lg transition-transform group-hover:scale-105">
                            D
                        </div>
                        <span className="font-semibold text-lg hidden sm:block">
                            Daniel<span className="text-amber-500">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                                        isActive(link.href)
                                            ? "text-amber-500"
                                            : "text-[#a1a1aa] hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                    {isActive(link.href) && (
                                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 rounded-full" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button (Desktop) */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="btn-primary text-sm"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-2xl text-[#a1a1aa] hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <HiX /> : <HiMenuAlt4 />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-[#111113] border-b border-[#27272a] py-4 animate-fade-in">
                        <ul className="max-w-6xl mx-auto px-6 space-y-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                            isActive(link.href)
                                                ? "bg-[#1c1c1f] text-amber-500"
                                                : "text-[#a1a1aa] hover:bg-[#1c1c1f] hover:text-white"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="btn-primary w-full justify-center"
                                >
                                    Let&apos;s Talk
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-1 pt-24">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-[#27272a] bg-[#0a0a0b]">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-[#0a0a0b] text-lg">
                                    D
                                </div>
                                <span className="font-semibold text-lg">
                                    Daniel<span className="text-amber-500">.</span>
                                </span>
                            </Link>
                            <p className="text-[#71717a] text-sm leading-relaxed max-w-sm mb-6">
                                Software Developer & STEM Educator passionate about building intelligent systems and empowering the next generation of learners.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/Dtham14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-[#1c1c1f] border border-[#27272a] flex items-center justify-center text-[#a1a1aa] hover:text-amber-500 hover:border-amber-500 transition-all"
                                    aria-label="GitHub"
                                >
                                    <AiFillGithub className="text-xl" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dtham14/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-[#1c1c1f] border border-[#27272a] flex items-center justify-center text-[#a1a1aa] hover:text-amber-500 hover:border-amber-500 transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <AiFillLinkedin className="text-xl" />
                                </a>
                                <a
                                    href="https://www.quiznotes.ca/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-[#1c1c1f] border border-[#27272a] flex items-center justify-center hover:border-amber-500 transition-all overflow-hidden group"
                                    aria-label="QuizNotes"
                                >
                                    <Image src="/quiznotes logo.jpg" alt="QuizNotes" width={24} height={24} className="rounded object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#a1a1aa] mb-4">
                                Navigation
                            </h4>
                            <ul className="space-y-3">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[#71717a] hover:text-amber-500 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#a1a1aa] mb-4">
                                Services
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services/coding-lessons" className="text-sm text-[#71717a] hover:text-amber-500 transition-colors">
                                        Coding Lessons
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ai-education" className="text-sm text-[#71717a] hover:text-amber-500 transition-colors">
                                        AI Education
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/3d-modeling" className="text-sm text-[#71717a] hover:text-amber-500 transition-colors">
                                        3D Modeling
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/math-tutoring" className="text-sm text-[#71717a] hover:text-amber-500 transition-colors">
                                        Math Tutoring
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-[#1f1f22] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-[#71717a]">
                            © 2025 Daniel Tham. All rights reserved.
                        </p>
                        <p className="text-xs text-[#52525b]">
                            Built with Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
