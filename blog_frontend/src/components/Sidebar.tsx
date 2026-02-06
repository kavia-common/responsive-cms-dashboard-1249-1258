"use client";

import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * Sidebar renders CMS-related navigation and quick actions.
 */
export default function Sidebar({ open }: { open: boolean }) {
  return (
    <aside
      className={[
        "card h-fit lg:sticky lg:top-20",
        open ? "block" : "hidden lg:block",
      ].join(" ")}
      aria-label="Sidebar"
    >
      <div className="card-inner space-y-6">
        <section>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/editor" className="btn-primary">
              Create Post
            </Link>
            <Link href="/posts?drafts=1" className="btn-secondary">
              View Drafts
            </Link>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Filters</h3>
          <div className="flex flex-col gap-2">
            <Link href="/posts?tag=all" className="text-sm text-gray-700 hover:text-black">
              All
            </Link>
            <Link href="/posts?tag=guides" className="text-sm text-gray-700 hover:text-black">
              Guides
            </Link>
            <Link href="/posts?tag=tech" className="text-sm text-gray-700 hover:text-black">
              Tech
            </Link>
            <Link href="/posts?tag=design" className="text-sm text-gray-700 hover:text-black">
              Design
            </Link>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
          <div className="flex flex-col gap-2">
            <Link href="/posts?category=announcements" className="text-sm text-gray-700 hover:text-black">
              Announcements
            </Link>
            <Link href="/posts?category=tutorials" className="text-sm text-gray-700 hover:text-black">
              Tutorials
            </Link>
            <Link href="/posts?category=opinions" className="text-sm text-gray-700 hover:text-black">
              Opinions
            </Link>
          </div>
        </section>
      </div>
    </aside>
  );
}
