import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { blogPosts } from "../../data/blogposts";
import Image from "next/image";

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <Layout title="Post Not Found">
                <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl font-bold text-red-600 mb-4">Post Not Found</h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Sorry, we couldn't find the blog post you're looking for.
                    </p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title={`${post.title} - Daniel Tham`}>
            <section className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-8">
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={1000}
                        height={500}
                        className="rounded-lg object-cover w-full h-auto"
                    />
                </div>

                <h1 className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-6">{post.title}</h1>

                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    {post.content.split("\n\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </section>
        </Layout>
    );
}
