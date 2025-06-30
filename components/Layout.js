import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Layout({ children, title = "Daniel Tham Portfolio" }) {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Daniel Tham Portfolio Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white px-6 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
                <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
                    <h1 className="font-burtons text-xl text-teal-500">STEMphonic</h1>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link href="/" className="hover:text-teal-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-teal-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-teal-400">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-teal-400">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-teal-400">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-teal-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="max-w-4xl mx-auto">
                    {children}
                </div>

                <footer className="mt-20 py-10 border-t border-gray-300 dark:border-gray-700 text-center dark:text-gray-400">
                    <div className="flex justify-center gap-10 text-4xl text-gray-600 dark:text-gray-400 mb-4">
                        <a className="hover:text-teal-500 transition" href="https://github.com/Dtham14" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                        <a className="hover:text-teal-500 transition" href="https://www.linkedin.com/in/dtham14/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin />
                        </a>
                        <a className="hover:text-teal-500 transition" href="https://huggingface.co/dtham14" target="_blank" rel="noopener noreferrer">
                            <img src="/huggingface.svg" alt="Hugging Face" className="w-10 h-10 inline" />
                        </a>
                    </div>
                    <p className="text-sm">© 2025 Daniel Tham. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
}
