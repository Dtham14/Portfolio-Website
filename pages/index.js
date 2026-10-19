import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import {
    FaMusic,
    FaChalkboardTeacher,
    FaArrowRight,
    FaGraduationCap,
    FaQuoteLeft,
    FaStar,
    FaBriefcase,
} from "react-icons/fa";
import { testimonials } from "../data/testimonials";
import { experience } from "../data/experience";

export default function Home() {
    return (
        <Layout title="Daniel Tham - Education Assistant & Piano Teacher">
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
                        backgroundImage: `linear-gradient(#2b2319 1px, transparent 1px), linear-gradient(90deg, #2b2319 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6 py-20">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="animate-fade-up stagger-1">
                            <span className="badge mb-6">
                                Now Accepting Piano Students
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="animate-fade-up stagger-2 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                            Empowering learners through{" "}
                            <span className="text-gradient">education</span> &{" "}
                            <span className="text-gradient">music</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="animate-fade-up stagger-3 text-xl md:text-2xl text-[#6b5d4c] leading-relaxed mb-8 max-w-2xl">
                            Education Assistant supporting IEP students, and a piano teacher helping young musicians ages 4–12 build confidence through music.
                        </p>

                        {/* CTA Buttons */}
                        <div className="animate-fade-up stagger-4 flex flex-wrap gap-4">
                            <Link href="/services/piano-lessons" className="btn-primary group">
                                Book a Piano Lesson
                                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link href="/contact" className="btn-secondary">
                                Get In Touch
                            </Link>
                            <Link href="/experience" className="btn-secondary group">
                                <FaGraduationCap className="text-sm" />
                                Experience & Education
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="animate-fade-up stagger-5 mt-16 flex flex-wrap gap-8 md:gap-12">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-gradient">4–12</div>
                                <div className="text-sm text-[#9c8b73] mt-1">Ages Taught (Piano)</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-gradient">1-on-1</div>
                                <div className="text-sm text-[#9c8b73] mt-1">In-Person Lessons</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-gradient">3+</div>
                                <div className="text-sm text-[#9c8b73] mt-1">Years Teaching</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in stagger-6">
                    <div className="w-6 h-10 rounded-full border-2 border-[#e7dac3] flex items-start justify-center p-2">
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
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#fffdf7] to-[#fbf5ea]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-amber-500/30 relative">
                                                <Image
                                                    src="/profile-image.jpg"
                                                    alt="Daniel Tham"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-semibold mb-2">Daniel Tham</h3>
                                            <p className="text-[#6b5d4c]">Education Assistant</p>
                                            <p className="text-[#6b5d4c]">Piano Teacher</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating elements */}
                                <div className="hidden sm:flex absolute -top-4 -right-4 w-20 h-20 glass-card rounded-2xl items-center justify-center text-amber-500 text-3xl animate-float" style={{animationDuration: '3s'}}>
                                    <FaMusic />
                                </div>
                                <div className="hidden sm:flex absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-2xl items-center justify-center text-amber-500 text-2xl animate-float" style={{animationDuration: '4s', animationDelay: '1s'}}>
                                    <FaChalkboardTeacher />
                                </div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div>
                            <span className="badge mb-4">About Me</span>
                            <h2 className="section-title">
                                Passionate about teaching & music
                            </h2>
                            <div className="space-y-4 text-[#6b5d4c] leading-relaxed">
                                <p>
                                    I&apos;m <span className="text-[#2b2319] font-medium">Daniel Tham</span>, an Education Assistant and piano teacher dedicated to helping students learn, grow, and build confidence — whether that&apos;s in the classroom or at the piano.
                                </p>
                                <p>
                                    As an <span className="text-amber-500">Education Assistant</span> at a CISVA elementary school, I support students with Individualized Education Plans (IEPs), help manage classroom activities, and work alongside the classroom teacher to create a structured, supportive learning environment.
                                </p>
                                <p>
                                    I&apos;ve taught <span className="text-amber-500">piano</span> for the past year at Simusique Studio in Coquitlam, BC, teaching students ages 4 to 12 in 1-on-1, in-person lessons, and previously spent two years teaching ADST, coding, robotics, and 3D modeling at CISVA elementary schools — experience that shaped how I approach hands-on, student-centered teaching today.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link href="/services/piano-lessons" className="btn-secondary group">
                                    Explore Piano Lessons
                                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f4ead9] to-transparent" />

                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="badge mb-4">Experience</span>
                        <h2 className="section-title">
                            Where I&apos;ve taught
                        </h2>
                        <p className="section-subtitle mx-auto">
                            Current roles supporting students in the classroom and at the piano, plus the teaching background behind them
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {experience.map((item, index) => (
                            <div key={index} className="glass-card glass-card-hover p-5 flex flex-col">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-3">
                                    <FaBriefcase className="text-amber-500 text-sm" />
                                </div>
                                <h3 className="font-semibold text-sm mb-1">{item.role}</h3>
                                <p className="text-xs text-[#9c8b73]">{item.org}</p>
                                <p className="text-xs text-[#9c8b73]">{item.period}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/experience" className="btn-secondary group">
                            View Full Experience
                            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                        </Link>
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
                            Feedback from past coding & STEM tutoring students
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
                                <p className="text-[#6b5d4c] leading-relaxed mb-6">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-[#e7dac3]">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
                                        <span className="text-amber-500 font-semibold text-sm">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-[#9c8b73]">{testimonial.role}</p>
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
                                Ready to start lessons?
                            </h2>
                            <p className="text-[#6b5d4c] text-lg mb-8 max-w-xl mx-auto">
                                Whether you&apos;re looking for piano lessons for your child or just want to say hello, I&apos;d love to hear from you.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/contact" className="btn-primary group">
                                    Let&apos;s Connect
                                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link href="/projects" className="btn-secondary">
                                    See Past Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
