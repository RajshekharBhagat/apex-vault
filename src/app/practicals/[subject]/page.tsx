import { getPracticalsBySubject, getSubjects } from "@/lib/practicals";
import { PracticalCard } from "@/components/practicals/PracticalCard";
import { Heading } from "@/components/Heading";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Subject display names (same mapping as in practicals.ts)
const SUBJECT_NAMES: Record<string, string> = {
  "block-chain": "Block Chain",
  "deep-learning": "Deep Learning",
  "natural-language-processing": "Natural Language Processing",
};

interface Props {
  params: Promise<{ subject: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { subject } = await params;
  const name = SUBJECT_NAMES[subject] || subject.toUpperCase();
  return { title: `${name} Practicals — Apex Vault` };
}

// Pre-generate static paths for all subjects
export async function generateStaticParams() {
  const subjects = getSubjects();
  return subjects.map((s) => ({ subject: s.slug }));
}

export default async function SubjectPage({ params }: Props) {
  const { subject } = await params;
  const practicals = getPracticalsBySubject(subject);

  if (practicals.length === 0) {
    notFound();
  }

  const subjectName = SUBJECT_NAMES[subject] || subject.toUpperCase();

  return (
    <div className="mx-auto max-w-7xl w-full px-4 py-12">
      <div className="mb-10">
        <Heading text={subjectName} className="text-4xl font-bold text-left" />
        <p className="mt-2 text-zinc-400">
          {practicals.length} practical{practicals.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {practicals.map((practical) => (
          <PracticalCard key={practical.slug} practical={practical} />
        ))}
      </div>
    </div>
  );
}
