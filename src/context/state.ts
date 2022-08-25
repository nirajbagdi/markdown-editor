import { MarkdownDocument, MarkdownDocumentOptional } from 'models';

export type ContextState = {
    documents: MarkdownDocument[];
    activeDocument: MarkdownDocument | null;
    hasSavedDoc: boolean;
    isDeleting: boolean;
    changeActiveDocument: (docId: string) => void;
    changeUpdatedDocument: (docObj: MarkdownDocumentOptional) => void;
    saveDocument: () => void;
    deleteDocument: () => void;
    closeDeleteModal: () => void;
    showDeleteModal: () => void;
};

export const initialState: ContextState = {
    documents: [],
    activeDocument: null,
    hasSavedDoc: false,
    isDeleting: false,
    changeActiveDocument: docId => {},
    changeUpdatedDocument: docObj => {},
    saveDocument: () => {},
    deleteDocument: () => {},
    closeDeleteModal: () => {},
    showDeleteModal: () => {}
};
