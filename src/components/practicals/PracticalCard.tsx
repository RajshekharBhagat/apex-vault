import Link from "next/link";
import { FileCode } from "lucide-react";
import type { PracticalMeta } from "@/types/practicals";

interface PracticalCardProps {
  practical: PracticalMeta;
}

export function PracticalCard({ practical }: PracticalCardProps) {
  return (
    <Link
      href={`/practicals/${practical.subject}/${practical.slug}`}
      className="relative group block"
    >
      <div className="relative z-10 flex items-start gap-4 rounded-xl border border-zinc-800 bg-black p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-zinc-950">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400 transition-colors group-hover:bg-blue-500/20">
          {String(practical.practical).padStart(2, "0")}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <FileCode className="h-4 w-4 shrink-0 text-zinc-600 group-hover:text-blue-400 transition-colors" />
            <h3 className="truncate text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
              {practical.title}
            </h3>
          </div>
          <p className="mt-1 text-sm text-zinc-500 line-clamp-2">
            {practical.aim}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-blue-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
    </Link>
  );
}
