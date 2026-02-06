"use client";

import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * Navbar renders the top navigation with brand, primary actions, and mobile sidebar toggle.
 */
export default function Navbar({
  onToggleSidebar,
}: {
  onToggleSidebar?: () => void;
}) {
  const handleToggle = () => {
    onToggleSidebar?.();
  };

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-surface)] header-shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50"
            onClick={handleToggle}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[color:var(--color-brand)] grid place-items-center text-white font-bold">
              B
            </div>
            <span className="text-base sm:text-lg font-semibold tracking-tight">
              BreezeBlog
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/posts" className="text-gray-700 hover:text-black">
            Posts
          </Link>
          <Link href="/editor" className="text-gray-700 hover:text-black">
            Write
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/editor" className="btn-success">
            New Post
          </Link>
        </div>
      </div>
    </header>
  );
}
