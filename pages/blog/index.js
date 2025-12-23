import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../data/blogposts";
import { FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function Blog() {
    return (
        <Layout title="Blog - Daniel Tham">
            {/* Header */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="max-w-2xl">
                        <span className="badge mb-4">Blog</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Insights & <span className="text-gradient">Thoughts</span>
                        </h1>
                        <p className="text-lg text-[#a1a1aa] leading-relaxed">
                            Exploring coding, AI, education, and technology. Dive into tutorials, insights, and lessons learned along the way.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    {blogPosts.length === 0 ? (
                        <div className="glass-card p-12 text-center">
                            <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
                            <p className="text-[#a1a1aa]">
                                Stay tuned for upcoming articles on coding, AI, and education.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {/* Featured Post (First) */}
                            {blogPosts.length > 0 && (
                                <Link
                                    href={`/blog/${blogPosts[0].slug}`}
                                    className="block glass-card overflow-hidden group"
                                >
                                    <div className="grid md:grid-cols-2">
                                        <div className="relative h-64 md:h-80">
                                            {blogPosts[0].image ? (
                                                <Image
                                                    src={blogPosts[0].image}
                                                    alt={blogPosts[0].title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1f] via-[#27272a] to-[#1c1c1f] flex items-center justify-center">
                                                    <span className="text-6xl font-bold text-amber-500/20">Blog</span>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1c1c1f] md:block hidden" />
                                        </div>
                                        <div className="p-8 md:p-10 flex flex-col justify-center">
                                            <span className="badge mb-4 w-fit">Featured</span>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                                                {blogPosts[0].title}
                                            </h2>
                                            <p className="text-[#a1a1aa] leading-relaxed mb-4 line-clamp-3">
                                                {blogPosts[0].excerpt}
                                            </p>

                                            {/* Meta info */}
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-[#71717a] mb-6">
                                                <div className="flex items-center gap-2">
                                                    <FaCalendar className="text-xs" />
                                                    {formatDate(blogPosts[0].date)}
                                                </div>
                                                {blogPosts[0].readTime && (
                                                    <div className="flex items-center gap-2">
                                                        <FaClock className="text-xs" />
                                                        {blogPosts[0].readTime}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Author */}
                                            <div className="flex items-center gap-3 pt-4 border-t border-[#27272a]">
                                                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                                                    <Image
                                                        src={blogPosts[0].author.image}
                                                        alt={blogPosts[0].author.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">{blogPosts[0].author.name}</p>
                                                    <p className="text-xs text-[#71717a]">{blogPosts[0].author.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}

                            {/* Other Posts Grid */}
                            {blogPosts.length > 1 && (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {blogPosts.slice(1).map((post, index) => (
                                        <Link
                                            key={index}
                                            href={`/blog/${post.slug}`}
                                            className="glass-card overflow-hidden group"
                                        >
                                            <div className="relative h-48">
                                                {post.image ? (
                                                    <Image
                                                        src={post.image}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1f] via-[#27272a] to-[#1c1c1f]" />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1f] to-transparent" />
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-3 text-xs text-[#71717a] mb-3">
                                                    <span>{formatDate(post.date)}</span>
                                                    {post.readTime && (
                                                        <>
                                                            <span>·</span>
                                                            <span>{post.readTime}</span>
                                                        </>
                                                    )}
                                                </div>
                                                <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-[#a1a1aa] text-sm line-clamp-2 mb-4">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded-full overflow-hidden relative">
                                                            <Image
                                                                src={post.author.image}
                                                                alt={post.author.name}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <span className="text-xs text-[#71717a]">{post.author.name}</span>
                                                    </div>
                                                    <FaArrowRight className="text-xs text-amber-500 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

        </Layout>
    );
}
