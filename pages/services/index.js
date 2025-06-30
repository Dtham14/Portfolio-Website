import Layout from "../../components/Layout";
import Link from "next/link";
import { services } from "../../data/services";

export default function Services() {
    return (
        <Layout title="Services - Daniel Tham">
            <section className="max-w-5xl mx-auto px-6 py-12 text-center">
                <h1 className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-4">Teaching Services</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-7">
                    Personalized 1-on-1 lessons designed to help students master STEM, AI, and the arts. Choose a service to see details!
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 pb-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center text-center"
                    >
                        <div className="mb-4">
                            <service.icon className="text-5xl text-teal-600 dark:text-teal-400" />
                        </div>
                        <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
                            {service.title}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-6 mb-4">
                            {service.shortDescription}
                        </p>
                        <p className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-6">
                            {service.rate}
                        </p>
                        <Link
                            href={`/services/${service.slug}`}
                            className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md hover:opacity-90 transition"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </section>
        </Layout>
    );
}
