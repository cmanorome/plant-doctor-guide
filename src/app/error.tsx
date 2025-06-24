'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
        <p className="text-gray-600 mb-8">
          We&apos;re sorry, but something unexpected happened.
        </p>
        <button
          onClick={reset}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors mr-4"
        >
          Try again
        </button>
        <Link
          href="/"
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Go home
        </Link>
      </div>
    </div>
  );
} 