import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BreezeBlog",
  description: "Responsive blog with CMS features built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Note: We can't use useState in a server component; wrap sidebar in client boundaries on pages.
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="app-container">
        {/* Top navigation */}
        {/* Client Navbar rendered inside pages to control sidebar; for static layout keep header here */}
        <Navbar onToggleSidebar={undefined} />

        {/* Main content area with Sidebar slot controlled per page */}
        <main className="w-full flex-1 py-6">
          {/* Page content renders its own grid with Sidebar to allow mobile toggle per page */}
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
