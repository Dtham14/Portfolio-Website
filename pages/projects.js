import Layout from "../components/Layout";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Projects() {
    const projects = [
        {
            title: "AI Web Tool for Epic Seven",
            description: "This project was created for an Artificial Intelligence class at Simon Fraser University (CMPT 419)",
            fullDescription: "It is a web tool to help a player base of millions who play the mobile game, Epic Seven, to predict the outcome of player versus-player matches using data-centric and machine-learning techniques.",
            image: web1,
            demoLink: "https://example.com/project-one",
            repoLink: "https://github.com/Dtham14/AI-Tool-for-Mobile-Game-Epic-Seven-",
        },
        {
            title: "Spotify Song Data Analysis",
            description: "This project was created for my computational data science class at Simon Fraser University (CMPT 353)",
            image: web2,
            fullDescription: "A data pipeline was constructed in Python to gather and clean 50, 000 songs using Spotify’s web API, Spotipy to train Machine Learning models to predict which genres of songs are popular.",
            demoLink: "https://example.com/project-one",
            repoLink: "https://github.com/Dtham14/Spotify-Song-Popularity-Analysis",
        },
        {
            title: "AI Agent Project",
            description: "N/A",
            image: web3,
            fullDescription: "This is a more detailed explanation about the project, its goals, challenges, and technologies used.",
            demoLink: "https://example.com/project-one",
            repoLink: "https://github.com/yourusername/project-one",
        },
        {
            title: "Project Four",
            description: "Interactive learning game with Micro:bit.",
            image: web4,
            fullDescription: "This is a more detailed explanation about the project, its goals, challenges, and technologies used.",
            demoLink: "https://example.com/project-one",
            repoLink: "https://github.com/yourusername/project-one",
        },
        {
            title: "Project Five",
            description: "Portfolio website with Next.js.",
            image: web5,
            fullDescription: "This is a more detailed explanation about the project, its goals, challenges, and technologies used.",
            demoLink: "https://example.com/project-one",
            repoLink: "https://github.com/yourusername/project-one",
        },
        {
            title: "Project Six",
            description: "Custom e-commerce platform.",
            image: web6,
            fullDescription: "This is a more detailed explanation about the project, its goals, challenges, and technologies used.",
            demoLink: "https://example.com/project-one",
            repoLink: "https://github.com/yourusername/project-one",
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Layout title="Projects - Daniel Tham">
            <h1 className="text-4xl font-bold text-teal-500 mb-4">Projects</h1>
            <p className="text-lg mb-8 dark:text-gray-200">
                A showcase of some of my work in software development, design, and STEM education.
            </p>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                    >
                        <div className="relative h-48 w-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                {project.description}
                            </p>

                            {/* Expand/Collapse Section */}
                            {expandedIndex === index && (
                                <div className="mt-4 space-y-4">
                                    <p className="text-gray-700 dark:text-gray-300">{project.fullDescription}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {project.extraImages?.map((img, i) => (
                                            <div key={i} className="relative w-full h-40 rounded overflow-hidden">
                                                <Image src={img} alt={`Extra ${i}`} fill className="object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-4 flex gap-4">
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center border border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-50 dark:hover:bg-gray-700 transition"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {project.repoLink && (
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center border border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-50 dark:hover:bg-gray-700 transition"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>

                            <button
                                onClick={() => toggleExpand(index)}
                                className="mt-4 w-full text-teal-500 border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-50 dark:hover:bg-gray-700 transition"
                            >
                                {expandedIndex === index ? "Show Less" : "Show More"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
