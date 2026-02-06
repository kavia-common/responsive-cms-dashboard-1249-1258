"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import PostCard, { type Post } from "@/components/PostCard";

const demoPosts: Post[] = [
  {
    id: "hello-world",
    title: "Hello, BreezeBlog!",
    excerpt:
      "Welcome to your new modern, responsive blog. This post walks you through the layout and features.",
    tag: "Announcements",
    date: new Date().toISOString(),
  },
  {
    id: "nextjs-tips",
    title: "10 Next.js Tips for Faster Apps",
    excerpt:
      "From image optimization to route grouping, learn practical techniques to speed up your Next.js app.",
    tag: "Tech",
    date: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "design-ethos",
    title: "Designing for Readability",
    excerpt:
      "Typography, spacing, and color contrast that make your content effortless to read.",
    tag: "Design",
    date: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
];

export default function Home() {
  const [sidebarOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col gap-3">
            <span className="badge w-fit">Modern & Responsive</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Write. Publish. Grow your audience.
            </h1>
            <p className="text-gray-600 max-w-2xl">
              A clean, focused writing experience with a flexible CMS sidebar,
              built with Next.js and styled with a light theme using{" "}
              <span className="font-medium text-[color:var(--color-brand)]">#3B82F6</span> and{" "}
              <span className="font-medium text-[color:var(--color-success)]">#F59E0B</span> accents.
            </p>
            <div className="pt-2">
              <a href="/editor" className="btn-primary">
                Start Writing
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="content-grid mt-6">
        <Sidebar open={sidebarOpen} />

        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoPosts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
