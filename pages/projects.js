import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const projects = [
    {
        title: "QuizNotes",
        description: "Learn music theory through gamified interactive quizzes",
        fullDescription: "An educational platform that teaches music theory through gamification. Features include staff identification, ear training exercises, XP & leveling systems, achievements, daily streaks, and global leaderboards. Includes educator tools for creating classes, custom quizzes with professional notation, and student progress tracking.",
        image: "",
        tags: ["Next.js", "React", "Supabase"],
        demoLink: "https://www.quiznotes.ca/",
        repoLink: "https://github.com/Dtham14/QuizNotes",
    },
    {
        title: "AI Draft-Assistant for Epic Seven",
        description: "AI-powered prediction tool for mobile game PvP matches",
        fullDescription: "A web tool to help millions of players who play the mobile game Epic Seven predict player versus-player match outcomes using data-centric and machine-learning techniques. Built for CMPT 419 at Simon Fraser University.",
        image: "",
        tags: ["Python", "Scikit-learn", "Flask"],
        demoLink: "https://epic-seven-real-time-arena-draft.onrender.com/",
        repoLink: "https://github.com/Dtham14/AI-Tool-for-Mobile-Game-Epic-Seven-",
    },
    {
        title: "Classical Music AI Assistant",
        description: "Local AI agent powered by Ollama",
        fullDescription: "An AI agent implementation using Ollama for local LLM inference. Explores autonomous task completion with prompt engineering, tool use, and agent orchestration patterns—all running locally without API costs.",
        image: "",
        tags: ["Next.js", "Hugging Face", "PostgreSQL"],
        demoLink: "https://nextjs-3s6wdupnr-daniel-thams-projects.vercel.app/",
        repoLink: "https://github.com/Dtham14/Ollama-AI-Agent",
    },
    {
        title: "Portfolio Website",
        description: "The website you're currently viewing",
        fullDescription: "A modern, responsive portfolio built with Next.js and Tailwind CSS. Features a refined dark theme with amber accents, smooth animations, glass-morphism effects, and a mobile-friendly design. Showcases my projects, services, and blog.",
        image: "",
        tags: ["Next.js", "React", "Tailwind CSS"],
        demoLink: "/",
        repoLink: "https://github.com/Dtham14/Portfolio-Website",
    },
];

export default function Projects() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Layout title="Projects - Daniel Tham">
            {/* Header */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="max-w-2xl">
                        <span className="badge mb-4">Portfolio</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Featured <span className="text-gradient">Projects</span>
                        </h1>
                        <p className="text-lg text-[#a1a1aa] leading-relaxed">
                            A showcase of my work in software development, AI, data science, and STEM education. Each project represents a unique challenge and learning experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="glass-card overflow-hidden group flex flex-col"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1f] to-transparent z-10" />
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1f] via-[#27272a] to-[#1c1c1f] flex items-center justify-center">
                                            <div className="text-6xl font-bold text-amber-500/20 group-hover:text-amber-500/30 transition-colors">
                                                {project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs font-medium bg-[#27272a] text-[#a1a1aa] rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                                        {project.title}
                                    </h2>

                                    <p className="text-[#a1a1aa] text-sm mb-4">
                                        {project.description}
                                    </p>

                                    {/* Expanded Content */}
                                    {expandedIndex === index && (
                                        <div className="mb-4 pt-4 border-t border-[#27272a]">
                                            <p className="text-[#a1a1aa] text-sm leading-relaxed">
                                                {project.fullDescription}
                                            </p>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex items-center gap-3 mt-auto pt-4">
                                        {project.repoLink && (
                                            <a
                                                href={project.repoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#27272a] hover:bg-[#3f3f46] rounded-lg transition-colors"
                                            >
                                                <FaGithub />
                                                Code
                                            </a>
                                        )}
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-amber-500 hover:bg-amber-400 text-[#0a0a0b] rounded-lg transition-colors"
                                            >
                                                <FaExternalLinkAlt className="text-xs" />
                                                Demo
                                            </a>
                                        )}
                                        <button
                                            onClick={() => toggleExpand(index)}
                                            className="ml-auto flex items-center gap-1 text-sm text-[#71717a] hover:text-amber-500 transition-colors"
                                        >
                                            {expandedIndex === index ? (
                                                <>
                                                    Less <FaChevronUp className="text-xs" />
                                                </>
                                            ) : (
                                                <>
                                                    More <FaChevronDown className="text-xs" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-600/5" />
                        <div className="relative">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                Have a project in mind?
                            </h2>
                            <p className="text-[#a1a1aa] mb-6 max-w-md mx-auto">
                                I&apos;m always open to discussing new projects and creative ideas.
                            </p>
                            <Link href="/contact" className="btn-primary">
                                Start a Conversation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
