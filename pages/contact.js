import { useState } from "react";
import Layout from "../components/Layout";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Replace with email sending logic (API, EmailJS, Formspree, etc.)
        console.log("Form submitted:", formData);

        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <Layout title="Contact - Daniel Tham">
            <h1 className="text-4xl font-bold text-teal-500 mb-4">Contact Me</h1>
            <p className="text-lg mb-8 dark:text-gray-200">
                Have a question or want to work together? Fill out the form below and I'll get back to you!
            </p>

            {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
                    Thank you for your message! I'll be in touch soon.
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
            >
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 rounded-md hover:opacity-90 transition"
                >
                    Send Message
                </button>
            </form>
        </Layout>
    );
}
