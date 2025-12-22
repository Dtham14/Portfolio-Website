import Layout from "../../components/Layout";
import Link from "next/link";
import { services } from "../../data/services";
import { FaArrowRight, FaCheck } from "react-icons/fa";

export default function Services() {
    return (
        <Layout title="Services - Daniel Tham">
            {/* Header */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <span className="badge mb-4">Services</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Teaching <span className="text-gradient">Services</span>
                    </h1>
                    <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto mb-4">
                        Personalized 1-on-1 lessons designed to help students master STEM, AI, and the arts. Choose a service that fits your learning goals.
                    </p>
                    <p className="text-amber-500 font-medium">
                        First consultation is free!
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="glass-card glass-card-hover p-8 flex flex-col group"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center mb-6 group-hover:from-amber-500/30 group-hover:to-orange-600/30 transition-all">
                                    <service.icon className="text-2xl text-amber-500" />
                                </div>

                                {/* Title & Description */}
                                <h2 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                                    {service.title}
                                </h2>
                                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4 flex-grow">
                                    {service.shortDescription}
                                </p>

                                {/* Outline Preview */}
                                <div className="mb-6">
                                    <ul className="space-y-2">
                                        {service.outline.slice(0, 2).map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-[#71717a]">
                                                <FaCheck className="text-amber-500 text-xs flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Rate & CTA */}
                                <div className="pt-4 border-t border-[#27272a] flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gradient">{service.rate.replace('/hour', '')}</span>
                                        <span className="text-[#71717a] text-sm">/hour</span>
                                    </div>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
                                    >
                                        Details
                                        <FaArrowRight className="text-xs" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Me */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />

                        <div className="relative grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="badge mb-4">Why Choose Me</span>
                                <h2 className="text-3xl font-bold mb-4">
                                    Expert guidance, personalized approach
                                </h2>
                                <p className="text-[#a1a1aa] leading-relaxed mb-6">
                                    With years of experience in both software development and education, I bring a unique perspective that combines real-world industry knowledge with effective teaching methodologies.
                                </p>
                                <Link href="/contact" className="btn-primary">
                                    Book a Session
                                </Link>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { title: "Personalized Curriculum", desc: "Lessons tailored to your goals and learning style" },
                                    { title: "Hands-on Projects", desc: "Learn by building real-world applications" },
                                    { title: "Flexible Scheduling", desc: "Sessions that fit your schedule" },
                                    { title: "Ongoing Support", desc: "Help available between sessions" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                            <FaCheck className="text-amber-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium mb-1">{item.title}</h3>
                                            <p className="text-sm text-[#71717a]">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Ready to start learning?
                    </h2>
                    <p className="text-[#a1a1aa] mb-6 max-w-md mx-auto">
                        Get in touch to discuss your learning goals and schedule your first session.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        Contact Me
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
