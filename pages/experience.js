import Layout from "../components/Layout";
import Link from "next/link";
import { experience } from "../data/experience";
import { FaBriefcase, FaGraduationCap, FaArrowRight, FaMusic } from "react-icons/fa";

export default function Experience() {
    return (
        <Layout title="Experience & Education - Daniel Tham">
            {/* Header */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <span className="badge mb-4">Experience & Education</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Where I&apos;ve <span className="text-gradient">Taught</span>
                    </h1>
                    <p className="text-lg text-[#6b5d4c] leading-relaxed max-w-2xl mx-auto">
                        My current work supporting students in the classroom and at the piano, the curricula I&apos;ve built, and the background behind how I teach.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="pb-16">
                <div className="max-w-3xl mx-auto px-6 space-y-6">
                    {experience.map((item, index) => (
                        <div key={index} className="glass-card p-8 relative">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                    <FaBriefcase className="text-amber-500" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-1">
                                        <h2 className="text-xl font-semibold">{item.role}</h2>
                                        {item.current && (
                                            <span className="px-2 py-0.5 text-xs font-medium bg-amber-500/10 text-amber-500 rounded-full">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-[#9c8b73] mb-4">
                                        {item.org} · {item.period}
                                    </p>
                                    <ul className="space-y-2">
                                        {item.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-2 text-[#6b5d4c] text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                    {item.curriculumLink && (
                                        <div className="mt-4">
                                            <Link
                                                href={item.curriculumLink}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
                                            >
                                                <FaMusic className="text-xs" />
                                                View piano curriculum
                                                <FaArrowRight className="text-xs" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Academic Background */}
            <section className="pb-24">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="glass-card p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                <FaGraduationCap className="text-amber-500" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-1">Education</h2>
                                <p className="text-sm text-[#9c8b73] mb-4">Simon Fraser University · Burnaby, BC</p>
                                <p className="text-[#6b5d4c] text-sm leading-relaxed">
                                    Bachelor of Science, Major in Computer Science, Concentration in Information Systems — the technical foundation behind the coding, robotics, and AI curricula I build.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
                        <div className="relative">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                Want the full picture?
                            </h2>
                            <p className="text-[#6b5d4c] mb-6 max-w-md mx-auto">
                                Get in touch and I&apos;m happy to talk through any of it.
                            </p>
                            <Link href="/contact" className="btn-primary group">
                                Get In Touch
                                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
