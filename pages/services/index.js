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
                        Piano Lessons & <span className="text-gradient">Teaching</span>
                    </h1>
                    <p className="text-lg text-[#6b5d4c] leading-relaxed max-w-2xl mx-auto mb-4">
                        Personalized 1-on-1 piano lessons, plus a look at past tutoring services I&apos;ve offered.
                    </p>
                    <p className="text-amber-500 font-medium">
                        First consultation is free!
                    </p>
                </div>
            </section>

            {/* Piano Lessons - Primary */}
            <section className="pb-16">
                <div className="max-w-6xl mx-auto px-6">
                    {services
                        .filter((service) => service.category === "current")
                        .map((service, index) => (
                            <div
                                key={index}
                                className="glass-card p-8 md:p-12 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-600/10" />
                                <div className="relative grid md:grid-cols-3 gap-8 items-center">
                                    <div className="md:col-span-2">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center mb-6">
                                            <service.icon className="text-2xl text-amber-500" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                            {service.title}
                                        </h2>
                                        <p className="text-[#6b5d4c] leading-relaxed mb-6">
                                            {service.shortDescription}
                                        </p>
                                        <ul className="space-y-2 mb-6">
                                            {service.curriculum.slice(0, 3).map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-[#6b5d4c]">
                                                    <FaCheck className="text-amber-500 text-xs flex-shrink-0 mt-1" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <div className="mb-4">
                                            <span className="text-3xl font-bold text-gradient">{service.rate}</span>
                                        </div>
                                        <p className="text-sm text-[#9c8b73] mb-6">{service.format}</p>
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="btn-primary group w-full justify-center"
                                        >
                                            Book a Lesson
                                            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            {/* Past Tutoring & Technical Services - Secondary */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-8">
                        <span className="badge mb-4">Past Work</span>
                        <h2 className="text-2xl font-bold">Past Tutoring & Technical Services</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services
                            .filter((service) => service.category === "past")
                            .map((service, index) => (
                                <div
                                    key={index}
                                    className="glass-card glass-card-hover p-6 flex flex-col group opacity-80"
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center mb-4 group-hover:from-amber-500/30 group-hover:to-orange-600/30 transition-all">
                                        <service.icon className="text-xl text-amber-500" />
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#6b5d4c] text-sm leading-relaxed mb-4 flex-grow">
                                        {service.shortDescription}
                                    </p>

                                    {/* Rate & CTA */}
                                    <div className="pt-4 border-t border-[#e7dac3] flex items-center justify-between">
                                        <span className="text-sm text-[#9c8b73]">{service.rate}</span>
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
                                <p className="text-[#6b5d4c] leading-relaxed mb-6">
                                    Between my work as an Education Assistant and teaching piano, I bring a patient, structured approach that helps students of all ages build confidence and real skills.
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
                                            <p className="text-sm text-[#9c8b73]">{item.desc}</p>
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
                    <p className="text-[#6b5d4c] mb-6 max-w-md mx-auto">
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
