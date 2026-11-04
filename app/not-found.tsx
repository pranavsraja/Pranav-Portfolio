"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center relative z-20 text-center px-4 bg-[#09090b]">
      <div className="flex flex-col items-center gap-4 max-w-sm">
        <h1 className="text-7xl font-bold font-mono text-zinc-100">
          404
        </h1>
        <h2 className="text-lg font-semibold text-zinc-200">
          Page Not Found
        </h2>
        <p className="text-zinc-500 text-xs font-mono">
          This endpoint does not exist.
        </p>

        <Link
          href="/"
          className="mt-4 px-5 py-2 rounded-full bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-white transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
