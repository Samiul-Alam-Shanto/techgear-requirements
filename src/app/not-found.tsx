import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-extrabold text-primary/20">404</h1>

      <h2 className="mt-4 text-2xl font-bold">Nothing Found</h2>

      <p className="mt-2 text-sm text-base-content/60">
        Sorry, we couldn't find what you're looking for.
      </p>

      <Link href="/" className="btn btn-primary mt-6">
        Back to Home
      </Link>
    </div>
  );
}
