export type MarkdownDocument = {
    id: string;
    name: string;
    createdAt: string;
    content: string;
};

export type MarkdownDocumentOptional = {
    id?: string;
    name?: string;
    createdAt?: string;
    content?: string;
};
