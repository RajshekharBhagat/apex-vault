import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  html: string;
  className?: string;
}

export function MarkdownRenderer({ html, className }: MarkdownRendererProps) {
  return (
    <article
      className={cn("prose prose-invert max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}