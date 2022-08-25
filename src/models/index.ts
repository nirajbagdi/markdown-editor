import { v4 as uuid } from 'uuid';

export class MarkdownDocument {
    id: string;
    name: string;
    createdAt: string;
    content: string;

    constructor(name?: string, createdAt?: string, content?: string) {
        this.id = uuid();
        this.name = name ?? 'Untitled Document';
        this.createdAt = createdAt ?? 'Just now';
        this.content = content ?? '';
    }
}

export type MarkdownDocumentOptional = {
    id?: string;
    name?: string;
    createdAt?: string;
    content?: string;
};
