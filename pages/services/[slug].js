import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { services } from "../../data/services";
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function ServiceDetail() {
    const router = useRouter();
    const { slug } = router.query;
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const service = services.find((s) => s.slug === slug);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: `Service: ${service?.title}\n\n${formData.message}`,
        };

        emailjs
            .send("service_qn47yxf", "template_gao1j2o", templateParams, "94QOsJNGIn1cs52UV")
            .then(() => {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Email error:", error);
                alert("Something went wrong. Please try again later.");
            })
            .finally(() => setLoading(false));
    };

    if (!service) {
        return (
            <Layout title="Service Not Found">
                <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">Service Not Found</h1>
                    <p className="text-[#a1a1aa] mb-8">
                        Sorry, we couldn't find the service you're looking for.
                    </p>
                    <Link href="/services" className="btn-primary">
                        View All Services
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title={`${service.title} - Daniel Tham`}>
            {/* Header */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-amber-500 transition-colors mb-8"
                    >
                        <FaArrowLeft className="text-xs" />
                        Back to Services
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
                            <service.icon className="text-4xl text-amber-500" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.title}</h1>
                            <div className="flex items-center gap-4">
                                <span className="text-2xl font-bold text-gradient">{service.rate}</span>
                                <span className="text-[#71717a]">per session</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Overview */}
                            <div className="glass-card p-8">
                                <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
                                <p className="text-[#a1a1aa] leading-relaxed">
                                    {service.longDescription}
                                </p>
                            </div>

                            {/* Outline */}
                            <div className="glass-card p-8">
                                <h2 className="text-xl font-semibold mb-6">What You'll Learn</h2>
                                <div className="space-y-4">
                                    {service.outline.map((item, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                                <FaCheck className="text-amber-500 text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-[#fafafa]">{item}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Booking Form */}
                        <div className="md:col-span-1">
                            <div className="glass-card p-6 sticky top-28">
                                <h3 className="text-lg font-semibold mb-4">Book This Service</h3>
                                {submitted ? (
                                    <div className="text-center py-8">
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                            <FaCheck className="text-xl text-green-500" />
                                        </div>
                                        <h4 className="font-semibold mb-2">Request Sent!</h4>
                                        <p className="text-sm text-[#a1a1aa] mb-4">
                                            I'll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-sm text-amber-500 hover:text-amber-400"
                                        >
                                            Send another request
                                        </button>
                                    </div>
                                ) : (
                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <div>
                                            <label className="block text-sm text-[#a1a1aa] mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="input-field"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[#a1a1aa] mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="input-field"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[#a1a1aa] mb-2">
                                                Message / Preferred Schedule
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                rows="4"
                                                className="input-field resize-none"
                                                placeholder="Tell me about your goals and availability..."
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="btn-primary w-full" disabled={loading}>
                                            {loading ? "Sending..." : "Send Request"}
                                        </button>
                                    </form>
                                )}

                                <div className="mt-6 pt-6 border-t border-[#27272a]">
                                    <p className="text-xs text-[#71717a] text-center">
                                        First consultation is free!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-6">Other Services</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {services
                            .filter((s) => s.slug !== slug)
                            .slice(0, 2)
                            .map((s, i) => (
                                <Link
                                    key={i}
                                    href={`/services/${s.slug}`}
                                    className="glass-card glass-card-hover p-6 flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                                        <s.icon className="text-xl text-amber-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium group-hover:text-amber-500 transition-colors">
                                            {s.title}
                                        </h3>
                                        <p className="text-sm text-[#71717a]">{s.rate}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
