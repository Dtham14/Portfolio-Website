import Layout from "../components/Layout";
import Image from "next/image";
import {
    FaPython,
    FaReact,
    FaJs,
    FaGitAlt,
    FaRobot,
    FaJava,
    FaDocker,
    FaDatabase,
    FaServer,
    FaCloud,
    FaNetworkWired,
    FaTerminal
} from "react-icons/fa";


export default function About() {
    return (
        <Layout title="About - Daniel Tham">
            <section className="max-w-6xl mx-auto px-6 py-12 md:flex md:items-center md:gap-12">

                {/* LEFT SIDE */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-4">About Me</h1>

                    <div className="space-y-2">
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold text-teal-600 dark:text-teal-400">EMAIL:</span> dantham14@gmail.com
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold text-teal-600 dark:text-teal-400">ROLE:</span> Software Developer & Educator
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold text-teal-600 dark:text-teal-400">PHONE:</span> (+1) 604 352 9130
                        </p>
                    </div>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-7">
                        I am Daniel Tham, a skilled software developer specializing in AI programming and web development, with a strong commitment to delivering high-quality, innovative solutions. As a STEM educator, I am dedicated to creating accessible and engaging learning experiences that empower students to explore technology with confidence.
                    </p>

                    <a
                        href="/Daniel_Tham_CV.pdf"  // Replace with your actual CV link
                        className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-md shadow hover:opacity-90 transition"
                    >
                        Download CV
                    </a>
                </div>

                {/* RIGHT SIDE PHOTO */}
                <div className="relative mt-12 md:mt-0 md:w-1/2 flex justify-center">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
                        <div className="absolute -top-4 -right-4 w-full h-full rounded-full bg-teal-500 opacity-20 z-0"></div>
                        <Image
                            src=""   // Replace with your photo
                            alt="Daniel Tham"
                            fill
                            className="object-cover z-10"
                        />
                    </div>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-8 text-center">
                    Skills & Technologies
                </h2><br /><br />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    <div className="flex flex-col items-center">
                        <FaPython className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">Python</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaJs className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaReact className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaDatabase className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">SQL</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaJava className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">Java</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGitAlt className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">Git</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaRobot className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">AI Agents</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaServer className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">Data Analysis</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaDocker className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">Docker</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaTerminal className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">Bash</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaCloud className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">AWS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaNetworkWired className="text-5xl text-teal-600 dark:text-teal-400" />
                        <span className="mt-2 text-gray-700 dark:text-gray-300">Restful APIs</span>
                    </div>
                </div>
            </section>
        </Layout >
    );
}
