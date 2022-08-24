import { MarkdownDocument, MarkdownDocumentOptional } from 'models';

export type ContextState = {
    documents: MarkdownDocument[];
    activeDocument: MarkdownDocument | null;
    changeActiveDocument: (docId: string) => void;
    changeUpdatedDocument: (docObj: MarkdownDocumentOptional) => void;
    saveDocument: () => void;
};

export const initialState: ContextState = {
    documents: [],
    activeDocument: null,
    changeActiveDocument: docId => {},
    changeUpdatedDocument: docObj => {},
    saveDocument: () => {}
};
