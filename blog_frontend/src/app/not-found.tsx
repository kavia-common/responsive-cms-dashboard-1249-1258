import Link from "next/link";

export default function NotFound() {
  return (
    <main className="app-container">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="card" role="alert" aria-live="assertive">
          <div className="card-inner text-center space-y-3">
            <h1 className="text-2xl font-semibold">404 — Page Not Found</h1>
            <p className="text-gray-600">
              The page you’re looking for doesn’t exist or may have been moved.
            </p>
            <div className="pt-2">
              <Link href="/" className="btn-primary">
                Go Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
