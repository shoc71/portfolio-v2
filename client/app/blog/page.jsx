"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { posts } from "@/data/blogPosts";
import ParticlesCharBackground from "../backgrounds/ParticleBackgroundEmojis";

export default function BlogPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <ParticlesCharBackground characters={["📑", "📄", "📁", "👨‍💻", "💻", "📜", "🖥️", "👩‍💻", "✍️", "🗂️"]}/>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      <div className="space-y-4">
        {[...posts].reverse().map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="transition-all duration-300 cursor-pointer border border-transparent hover:border-border hover:shadow-md bg-background/60 hover:bg-background/80 rounded-2xl">
              <CardContent className="p-6 flex justify-between items-center">
                <span className="text-xl font-medium">{post.title}</span>
                <span className="text-sm text-muted-foreground">
                  {post.date}
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
