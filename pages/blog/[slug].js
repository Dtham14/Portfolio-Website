import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import { blogPosts } from "../../data/blogposts";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaCalendar, FaClock, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;

    const postIndex = blogPosts.findIndex((p) => p.slug === slug);
    const post = blogPosts[postIndex];
    const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
    const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

    if (!post) {
        return (
            <Layout title="Post Not Found">
                <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">Post Not Found</h1>
                    <p className="text-[#a1a1aa] mb-8">
                        Sorry, we couldn't find the blog post you're looking for.
                    </p>
                    <Link href="/blog" className="btn-primary">
                        View All Posts
                    </Link>
                </div>
            </Layout>
        );
    }

    // Parse content into paragraphs and handle bold text
    const renderContent = (content) => {
        return content.split("\n\n").map((paragraph, index) => {
            // Check if it's a heading (starts and ends with **)
            const headingMatch = paragraph.match(/^\*\*(.+)\*\*$/);
            if (headingMatch) {
                return (
                    <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">
                        {headingMatch[1]}
                    </h2>
                );
            }

            // Handle inline bold text
            const parts = paragraph.split(/\*\*(.*?)\*\*/g);
            return (
                <p key={index} className="text-[#a1a1aa] leading-relaxed mb-6">
                    {parts.map((part, i) =>
                        i % 2 === 1 ? (
                            <strong key={i} className="text-white font-medium">
                                {part}
                            </strong>
                        ) : (
                            part
                        )
                    )}
                </p>
            );
        });
    };

    return (
        <Layout title={`${post.title} - Daniel Tham`}>
            {/* Header */}
            <section className="py-12 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-[#71717a] hover:text-amber-500 transition-colors mb-8"
                    >
                        <FaArrowLeft className="text-xs" />
                        Back to Blog
                    </Link>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#71717a] mb-4">
                        <div className="flex items-center gap-2">
                            <FaCalendar className="text-xs" />
                            {formatDate(post.date)}
                        </div>
                        {post.readTime && (
                            <div className="flex items-center gap-2">
                                <FaClock className="text-xs" />
                                {post.readTime}
                            </div>
                        )}
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-[#a1a1aa] leading-relaxed mb-8">{post.excerpt}</p>

                    {/* Author Card */}
                    <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-amber-500/30 relative">
                            <Image
                                src={post.author.image}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-semibold">{post.author.name}</p>
                            <p className="text-sm text-[#71717a]">{post.author.role}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            {post.image && (
                <section className="pb-12">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="relative aspect-video rounded-2xl overflow-hidden glass-card">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Content */}
            <section className="pb-16">
                <div className="max-w-3xl mx-auto px-6">
                    <article className="prose prose-invert prose-lg max-w-none">
                        {renderContent(post.content)}
                    </article>
                </div>
            </section>

            {/* Share & Author Bio */}
            <section className="pb-16">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="glass-card p-8 rounded-2xl">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-amber-500/30 flex-shrink-0 relative">
                                <Image
                                    src={post.author.image}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-amber-500 font-medium mb-1">Written by</p>
                                <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4">
                                    {post.author.role}. Passionate about building meaningful technology and delivering high-impact learning experiences.
                                </p>
                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/Dtham14"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg bg-[#27272a] flex items-center justify-center text-[#a1a1aa] hover:text-amber-500 hover:bg-[#3f3f46] transition-all"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/dtham14/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg bg-[#27272a] flex items-center justify-center text-[#a1a1aa] hover:text-amber-500 hover:bg-[#3f3f46] transition-all"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="https://www.quiznotes.ca/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg bg-[#27272a] flex items-center justify-center text-[#a1a1aa] hover:text-amber-500 hover:bg-[#3f3f46] transition-all"
                                    >
                                        <FaGlobe />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="border-t border-[#27272a] pt-8">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {prevPost ? (
                                <Link
                                    href={`/blog/${prevPost.slug}`}
                                    className="glass-card glass-card-hover p-6 group"
                                >
                                    <div className="flex items-center gap-2 text-sm text-[#71717a] mb-2">
                                        <FaArrowLeft className="text-xs" />
                                        Previous
                                    </div>
                                    <h3 className="font-medium group-hover:text-amber-500 transition-colors line-clamp-1">
                                        {prevPost.title}
                                    </h3>
                                </Link>
                            ) : (
                                <div />
                            )}

                            {nextPost && (
                                <Link
                                    href={`/blog/${nextPost.slug}`}
                                    className="glass-card glass-card-hover p-6 group text-right"
                                >
                                    <div className="flex items-center justify-end gap-2 text-sm text-[#71717a] mb-2">
                                        Next
                                        <FaArrowRight className="text-xs" />
                                    </div>
                                    <h3 className="font-medium group-hover:text-amber-500 transition-colors line-clamp-1">
                                        {nextPost.title}
                                    </h3>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
