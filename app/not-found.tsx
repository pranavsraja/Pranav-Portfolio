import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center relative z-20 text-center px-4 bg-[#07080a]">
      <div className="flex flex-col items-center gap-4 max-w-sm">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-medium">
          Error 404
        </span>
        <h1 className="text-7xl sm:text-8xl font-bold font-[var(--font-outfit)] tracking-tight text-zinc-100">
          4<span className="text-accent">0</span>4
        </h1>
        <h2 className="text-lg font-semibold text-zinc-200">Page not found</h2>
        <p className="text-zinc-400 text-sm">This page doesn&apos;t exist or has moved.</p>

        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-black font-semibold text-sm hover:bg-accent-hover transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
