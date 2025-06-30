import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { services } from "../../data/services";

export default function ServiceDetail() {
    const router = useRouter();
    const { slug } = router.query;

    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return (
            <Layout title="Service Not Found">
                <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl font-bold text-red-600 mb-4">Service Not Found</h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Sorry, we couldn't find the service you're looking for.
                    </p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title={`${service.title} - Daniel Tham`}>
            <section className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex flex-col items-center text-center mb-8">
                    <service.icon className="text-6xl text-teal-600 dark:text-teal-400 mb-4" />
                    <h1 className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">{service.title}</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{service.rate}</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400 mb-4">Course Overview</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-7">{service.longDescription}</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400 mb-4">Course Outline</h2>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-7">
                        {service.outline.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-12">
                    <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400 mb-4">Book This Service</h2>
                    <form
                        className="space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert('Booking request sent! I will contact you shortly.');
                        }}
                    >
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-1">Message / Preferred Schedule</label>
                            <textarea
                                required
                                rows="4"
                                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md hover:opacity-90 transition"
                        >
                            Send Request
                        </button>
                    </form>
                </div>

            </section>
        </Layout>


    );
}
