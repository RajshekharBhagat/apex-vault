import { getSubjects } from "@/lib/practicals";
import { SubjectCard } from "@/components/practicals/SubjectCard";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Practicals — Apex Vault",
};

export default function PracticalsPage() {
  const subjects = getSubjects();

  return (
    <div className="mx-auto max-w-7xl w-full px-4 py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
      </div>

      <div className="mb-10 text-center">
        <Heading text="Practicals" className="text-5xl font-bold" />
        <p className="mt-3 text-zinc-400">
          Select a subject to view practicals
        </p>
      </div>

      {subjects.length === 0 ? (
        <p className="text-center text-zinc-500">
          No subjects found. Add markdown files to <code className="text-blue-400">content/practicals/</code>.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <SubjectCard key={subject.slug} subject={subject} />
          ))}
        </div>
      )}
    </div>
  );
}
