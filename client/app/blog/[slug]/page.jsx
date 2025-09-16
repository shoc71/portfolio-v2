// app/blog/[slug]/page.jsx
import { posts } from "@/data/blogPosts";
import BlogPostContent from "@/components/BlogPostContent";
import Link from "next/link";
import ParticlesCharBackground from "@/app/backgrounds/ParticleBackgroundEmojis";

export default function BlogPostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div className="p-8 text-red-500">Post not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 relative">
        {post.particles && <ParticlesCharBackground characters={post.particles} />}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-muted-foreground mb-4 text-right">
        {post.author} • Edited: {post.edited}
      </div>
      <BlogPostContent content={post.content} />
      <Link
        href="/blog"
        className="mt-8 inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
      >
        ← Go back to blogs
      </Link>
    </div>
  );
}
