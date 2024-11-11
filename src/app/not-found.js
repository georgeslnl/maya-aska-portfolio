import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-start bg-background text-foreground gap-4 mx-auto">
      <h1 className="text-3xl lg:text-7xl font-bold animate-pulse">404</h1>
      <h2 className="text-xl lg:text-3xl animate-pulse">Page Not Found</h2>
      <p className="text-xs lg:text-xl mb-4">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="text-xs lg:text-xl underline hover:text-gray-300">
        Go back to homepage
      </Link>
    </div>
  );
}