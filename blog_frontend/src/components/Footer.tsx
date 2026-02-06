import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * Footer displays site links and copyright.
 */
export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-[color:var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} BreezeBlog. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-black">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-black">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
