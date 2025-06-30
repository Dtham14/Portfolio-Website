import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../data/blogposts";

export default function Blog() {
    return (
        <Layout title="Blog - Daniel Tham">
            <section className="max-w-5xl mx-auto px-6 py-12 text-center">
                <h1 className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-4">Blog</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-7">
                    Insights, tutorials, and thoughts on coding, AI, education, and technology. Explore my latest posts below!
                </p>
            </section>

            <section className="max-w-5xl mx-auto px-6 pb-12 space-y-10">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="relative w-full h-64 md:w-1/3 md:h-auto">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 flex flex-col justify-between md:w-2/3">
                            <div>
                                <h2 className="text-3xl font-semibold text-teal-600 dark:text-teal-400 mb-3">
                                    {post.title}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 leading-6">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="mt-6">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Layout>
    );
}
