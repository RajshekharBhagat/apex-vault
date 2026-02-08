import { Practical, SubjectInfo } from "@/types/practicals";
import path from "path";
import fs from "fs";
import { renderMarkdown } from "./mdx";
import matter from "gray-matter";


const CONTENT_DIR = path.join(process.cwd(), 'content','practicals')

const SUBJECT_NAMES: Record<string, string> = {
    'block-chain': 'Block Chain',
    'deep-learning': 'Deep Learning',
    'machine-learning': 'Machine Learning',
}

export function getSubjects(): SubjectInfo[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];
  
    const folders = fs
      .readdirSync(CONTENT_DIR, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  
    return folders.map((slug) => {
      const subjectPath = path.join(CONTENT_DIR, slug);
      const files = fs
        .readdirSync(subjectPath)
        .filter((f) => f.endsWith(".md"));
  
      return {
        slug,
        name: SUBJECT_NAMES[slug] || slug.toUpperCase(),
        count: files.length.toString(),
      };
    });
  }
  
  /**
   * Get all practical metadata for a subject, sorted by practical number
   */
  export function getPracticalsBySubject(subject: string): Practical[] {
    const subjectDir = path.join(CONTENT_DIR, subject);
    if (!fs.existsSync(subjectDir)) return [];
  
    const files = fs
      .readdirSync(subjectDir)
      .filter((f) => f.endsWith(".md"));
  
    const practicals = files.map((filename) => {
      const filePath = path.join(subjectDir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      const slug = filename.replace(/\.md$/, "");
  
      return {
        practical: (data.number ?? data.practical) as number,
        title: data.title as string,
        aim: data.aim as string,
        slug,
        subject,
      };
    });
  
    // Sort by practical number ascending
    return practicals.sort((a, b) => a.practical - b.practical) as Practical[];
  }
  
  /**
   * Get a single practical with rendered HTML
   */
  export async function getPractical(
    subject: string,
    slug: string
  ): Promise<Practical | null> {
    const filePath = path.join(CONTENT_DIR, subject, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
  
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const html = await renderMarkdown(content);
  
    return {
      practical: (data.number ?? data.practical) as number,
      title: data.title as string,
      aim: data.aim as string,
      slug,
      subject,
      content,
      html,
    };
  }