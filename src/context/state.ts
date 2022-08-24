import { MarkdownDocument } from 'models';

export type ContextState = {
    documents: MarkdownDocument[];
    activeDocument: MarkdownDocument | null;
    changeActiveDocument: (docId: string) => void;
};

export const initialState: ContextState = {
    documents: [],
    activeDocument: null,
    changeActiveDocument: docId => {}
};
