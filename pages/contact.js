import { useState } from "react";
import Layout from "../components/Layout";
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheck } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_qn47yxf",
                "template_gao1j2o",
                formData,
                "94QOsJNGIn1cs52UV"
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    setSubmitted(true);
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.error("Email error:", error.text);
                    alert("Something went wrong. Please try again later.");
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <Layout title="Contact - Daniel Tham">
            {/* Header */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <span className="badge mb-4">Contact</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Let&apos;s <span className="text-gradient">Connect</span>
                    </h1>
                    <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
                        Have a project in mind or interested in tutoring services? I&apos;d love to hear from you. Fill out the form below and I&apos;ll get back to you soon.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                                <p className="text-[#a1a1aa] leading-relaxed">
                                    Whether you&apos;re looking for development services, tutoring, or just want to say hello, I&apos;m here to help.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-amber-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Email</h3>
                                        <a
                                            href="mailto:decodewithdaniel@gmail.com"
                                            className="text-[#a1a1aa] hover:text-amber-500 transition-colors"
                                        >
                                            decodewithdaniel@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="text-amber-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Location</h3>
                                        <p className="text-[#a1a1aa]">
                                            Vancouver, BC, Canada
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-[#27272a]">
                                <h3 className="font-medium mb-4">Connect on Social</h3>
                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/Dtham14"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-[#1c1c1f] border border-[#27272a] flex items-center justify-center text-[#a1a1aa] hover:text-amber-500 hover:border-amber-500 transition-all"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub className="text-xl" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/dtham14/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-[#1c1c1f] border border-[#27272a] flex items-center justify-center text-[#a1a1aa] hover:text-amber-500 hover:border-amber-500 transition-all"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="glass-card p-8 md:p-10">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                            <FaCheck className="text-3xl text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                        <p className="text-[#a1a1aa] mb-6">
                                            Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="btn-secondary"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm text-[#a1a1aa] mb-2" htmlFor="name">
                                                    Your Name
                                                </label>
                                                <input
                                                    className="input-field"
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm text-[#a1a1aa] mb-2" htmlFor="email">
                                                    Email Address
                                                </label>
                                                <input
                                                    className="input-field"
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-[#a1a1aa] mb-2" htmlFor="message">
                                                Your Message
                                            </label>
                                            <textarea
                                                className="input-field resize-none"
                                                id="message"
                                                name="message"
                                                rows="6"
                                                placeholder="Tell me about your project or how I can help..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn-primary w-full sm:w-auto"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <FaPaperPlane className="text-sm" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ or Quick Info */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent" />

                        <div className="relative grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h3 className="text-3xl font-bold text-gradient mb-2">24h</h3>
                                <p className="text-[#a1a1aa]">Average Response Time</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gradient mb-2">100%</h3>
                                <p className="text-[#a1a1aa]">Commitment to Quality</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gradient mb-2">Free</h3>
                                <p className="text-[#a1a1aa]">Initial Consultation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
