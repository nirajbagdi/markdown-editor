import { MarkdownDocument, MarkdownDocumentOptional } from 'models';

export type ContextState = {
    documents: MarkdownDocument[];
    activeDocument: MarkdownDocument | null;
    hasSavedDoc: boolean;
    changeActiveDocument: (docId: string) => void;
    changeUpdatedDocument: (docObj: MarkdownDocumentOptional) => void;
    saveDocument: () => void;
};

export const initialState: ContextState = {
    documents: [],
    activeDocument: null,
    hasSavedDoc: false,
    changeActiveDocument: docId => {},
    changeUpdatedDocument: docObj => {},
    saveDocument: () => {}
};
