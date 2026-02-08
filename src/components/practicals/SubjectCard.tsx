import Link from "next/link";
import type { SubjectInfo } from "@/types/practicals";
import { Link2, Brain, Cpu, BookOpen, Database, Globe, Code, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SUBJECT_ICONS: Record<string, LucideIcon> = {
  "block-chain": Link2,
  "deep-learning": Brain,
  "machine-learning": Cpu,
  "database": Database,
  "networking": Globe,
  "web-technology": Code,
  "operating-system": Server,
};

interface SubjectCardProps {
  subject: SubjectInfo;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const Icon = SUBJECT_ICONS[subject.slug] || BookOpen;

  return (
    <Link
      href={`/practicals/${subject.slug}`}
      className="relative group block"
    >
      <div className="relative z-10 flex flex-col items-center gap-4 rounded-xl border border-zinc-800 bg-black p-8 text-center transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-zinc-950">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
          <Icon className="h-7 w-7 text-blue-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
            {subject.name}
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            {subject.count} practical{Number(subject.count) !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-blue-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
    </Link>
  );
}
