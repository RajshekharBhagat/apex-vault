import { getPractical, getPracticalsBySubject, getSubjects } from "@/lib/practicals";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ subject: string; slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { subject, slug } = await params;
  const practical = await getPractical(subject, slug);
  if (!practical) return { title: "Not Found" };
  return { title: `${practical.title} — Apex Vault` };
}

// Pre-generate all practical pages
export async function generateStaticParams() {
  const subjects = getSubjects();
  const allParams: { subject: string; slug: string }[] = [];

  for (const s of subjects) {
    const practicals = getPracticalsBySubject(s.slug);
    for (const p of practicals) {
      allParams.push({ subject: s.slug, slug: p.slug });
    }
  }

  return allParams;
}

export default async function PracticalPage({ params }: Props) {
  const { subject, slug } = await params;
  const practical = await getPractical(subject, slug);

  if (!practical) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl w-full px-4 py-12">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href={`/practicals/${subject}`}
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Practicals
        </Link>
      </div>

      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-zinc-600">
        <Link href="/practicals" className="hover:text-blue-400 transition-colors">
          Practicals
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link
          href={`/practicals/${subject}`}
          className="hover:text-blue-400 transition-colors"
        >
          {subject.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-zinc-300">Practical {String(practical.practical).padStart(2, "0")}</span>
      </nav>

      {/* Header */}
      <header className="mb-8 border-b border-zinc-800 pb-6">
        <span className="inline-block rounded-md bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm font-bold text-blue-400">
          Practical {String(practical.practical).padStart(2, "0")}
        </span>
        <h1 className="mt-4 text-3xl font-bold text-zinc-50">
          {practical.title}
        </h1>
        <p className="mt-2 text-lg text-zinc-400">
          <span className="font-medium text-zinc-300">Aim:</span> {practical.aim}
        </p>
      </header>

      {/* Rendered Markdown Content */}
      <MarkdownRenderer html={practical.html} />
    </div>
  );
}
