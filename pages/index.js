import Layout from "../components/Layout";
import Link from "next/link";
import {
    FaPython,
    FaReact,
    FaJs,
    FaGitAlt,
    FaRobot,
    FaJava,
    FaDocker,
    FaDatabase,
    FaCloud,
    FaNetworkWired,
    FaTerminal,
    FaArrowRight,
    FaDownload,
    FaQuoteLeft,
    FaStar,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { testimonials } from "../data/testimonials";

const skills = [
    { icon: FaPython, name: "Python", category: "Languages" },
    { icon: FaJs, name: "JavaScript", category: "Languages" },
    { icon: SiTypescript, name: "TypeScript", category: "Languages" },
    { icon: FaJava, name: "Java", category: "Languages" },
    { icon: FaReact, name: "React", category: "Frontend" },
    { icon: SiNextdotjs, name: "Next.js", category: "Frontend" },
    { icon: SiTailwindcss, name: "Tailwind", category: "Frontend" },
    { icon: FaDatabase, name: "SQL", category: "Backend" },
    { icon: FaDocker, name: "Docker", category: "DevOps" },
    { icon: FaCloud, name: "AWS", category: "Cloud" },
    { icon: FaGitAlt, name: "Git", category: "Tools" },
    { icon: FaRobot, name: "AI/ML", category: "AI" },
    { icon: FaNetworkWired, name: "REST APIs", category: "Backend" },
    { icon: FaTerminal, name: "Bash", category: "Tools" },
];

export default function Home() {
    return (
        <Layout title="Daniel Tham - Software Developer & STEM Educator">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
                </div>

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#fafafa 1px, transparent 1px), linear-gradient(90deg, #fafafa 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6 py-20">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="animate-fade-up stagger-1">
                            <span className="badge mb-6">
                                Available for Projects
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="animate-fade-up stagger-2 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                            Building the future with{" "}
                            <span className="text-gradient">code</span> &{" "}
                            <span className="text-gradient">education</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="animate-fade-up stagger-3 text-xl md:text-2xl text-[#a1a1aa] leading-relaxed mb-8 max-w-2xl">
                            Software Developer & STEM Educator crafting intelligent systems and empowering learners to thrive in an AI-driven world.
                        </p>

                        {/* CTA Buttons */}
                        <div className="animate-fade-up stagger-4 flex flex-wrap gap-4">
                            <Link href="/projects" className="btn-primary group">
                                View My Work
                                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link href="/contact" className="btn-secondary">
                                Get In Touch
                            </Link>
                            <a
                                href="/resume.pdf"
                                download
                                className="btn-secondary group"
                            >
                                <FaDownload className="text-sm" />
                                Resume
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="animate-fade-up stagger-5 mt-16 flex flex-wrap gap-12">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-gradient">250+</div>
                                <div className="text-sm text-[#71717a] mt-1">Students Taught</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-gradient">20+</div>
                                <div className="text-sm text-[#71717a] mt-1">Schools</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-gradient">5+</div>
                                <div className="text-sm text-[#71717a] mt-1">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in stagger-6">
                    <div className="w-6 h-10 rounded-full border-2 border-[#27272a] flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-amber-500 rounded-full animate-bounce" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left - Visual */}
                        <div className="relative">
                            <div className="aspect-square max-w-md mx-auto relative">
                                {/* Decorative elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-3xl transform rotate-6" />
                                <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1f] to-[#0a0a0b]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-amber-500/30">
                                                <img
                                                    src="/profile-image.jpg"
                                                    alt="Daniel Tham"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-semibold mb-2">Daniel Tham</h3>
                                            <p className="text-[#a1a1aa]">Software Developer</p>
                                            <p className="text-[#a1a1aa]">STEM Educator</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center text-amber-500 text-3xl animate-float" style={{animationDuration: '3s'}}>
                                    <FaPython />
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-amber-500 text-2xl animate-float" style={{animationDuration: '4s', animationDelay: '1s'}}>
                                    <FaReact />
                                </div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div>
                            <span className="badge mb-4">About Me</span>
                            <h2 className="section-title">
                                Passionate about technology & teaching
                            </h2>
                            <div className="space-y-4 text-[#a1a1aa] leading-relaxed">
                                <p>
                                    I'm <span className="text-white font-medium">Daniel Tham</span>, a dedicated software developer and STEM educator with a passion for building meaningful technology and delivering high-impact learning experiences.
                                </p>
                                <p>
                                    I specialize in modern web development using <span className="text-amber-500">Next.js</span>, <span className="text-amber-500">React</span>, and <span className="text-amber-500">Tailwind CSS</span>, with fluency in Python, JavaScript, Java, and more. My work spans both software engineering and education.
                                </p>
                                <p>
                                    I've created and led curriculum in coding, robotics, mathematics, music, and artificial intelligence for learners aged 9 to 18. Whether developing AI tools or guiding students through their first Python project, I bring a thoughtful, structured approach that supports growth and curiosity.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link href="/services" className="btn-secondary group">
                                    Explore My Services
                                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111113] to-transparent" />

                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="badge mb-4">Skills & Technologies</span>
                        <h2 className="section-title">
                            Tools I work with
                        </h2>
                        <p className="section-subtitle mx-auto">
                            A curated set of technologies I use to build modern, scalable solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="glass-card glass-card-hover p-4 flex flex-col items-center gap-3 group cursor-default"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <skill.icon className="text-3xl text-[#a1a1aa] group-hover:text-amber-500 transition-colors" />
                                <span className="text-sm font-medium text-[#a1a1aa] group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="badge mb-4">Testimonials</span>
                        <h2 className="section-title">
                            What people say
                        </h2>
                        <p className="section-subtitle mx-auto">
                            Feedback from students, parents, and educators I've worked with
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 relative group"
                            >
                                {/* Quote Icon */}
                                <div className="absolute -top-3 -left-3 w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                                    <FaQuoteLeft className="text-amber-500 text-sm" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4 mt-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-amber-500 text-sm" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-[#a1a1aa] leading-relaxed mb-6">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-[#27272a]">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
                                        <span className="text-amber-500 font-semibold text-sm">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-[#71717a]">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="relative glass-card p-12 md:p-16 text-center overflow-hidden">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-600/10" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to start a project?
                            </h2>
                            <p className="text-[#a1a1aa] text-lg mb-8 max-w-xl mx-auto">
                                Whether you need a developer for your next project or a tutor for STEM education, I'd love to hear from you.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/contact" className="btn-primary group">
                                    Let's Connect
                                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link href="/projects" className="btn-secondary">
                                    View Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
