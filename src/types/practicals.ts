export interface PracticalMeta {
    practical: number;
    title: string;
    aim: string;
    slug: string;
    subject: string;
}

export interface Practical extends PracticalMeta {
    content: string;
    html: string;
}

export interface SubjectInfo {
    slug: string;
    name: string;
    count: string;
}