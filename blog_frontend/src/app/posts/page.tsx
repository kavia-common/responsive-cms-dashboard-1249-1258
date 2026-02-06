"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import PostCard, { type Post } from "@/components/PostCard";

/**
 * PUBLIC_INTERFACE
 * Posts index page showing a grid of post previews.
 */
export default function PostsPage() {
  const [sidebarOpen] = useState(false);

  const posts: Post[] = Array.from({ length: 6 }).map((_, i) => ({
    id: `post-${i + 1}`,
    title: `Sample Post ${i + 1}`,
    excerpt:
      "This is a placeholder post to demonstrate the responsive card grid layout within the main content area.",
    tag: i % 2 === 0 ? "Guides" : "Tech",
    date: new Date(Date.now() - i * 43200000).toISOString(),
  }));

  return (
    <div className="content-grid">
      <Sidebar open={sidebarOpen} />
      <div className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Latest Posts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
