import { CopyCodeWrapper } from "./CopyCodeButton";

interface MarkdownRendererProps {
  html: string;
  className?: string;
}

export function MarkdownRenderer({ html, className }: MarkdownRendererProps) {
  return <CopyCodeWrapper html={html} className={className} />;
}
