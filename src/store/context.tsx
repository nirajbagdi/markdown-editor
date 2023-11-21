import { createContext, useContext } from 'react';
import { IDocument } from 'models';

type ContextState = {
	documents: IDocument[];
	activeDocument: IDocument | null;

	changeActiveDocument: (docID: string) => void;
	addDocument: (document: IDocument) => void;
	deleteDocument: (docID: string) => void;
	saveDocument: (document: IDocument) => void;
};

const initialState: ContextState = {
	documents: [],
	activeDocument: null,

	changeActiveDocument: docID => {},
	addDocument: document => {},
	deleteDocument: docID => {},
	saveDocument: document => {},
};

export const DocumentsContext = createContext(initialState);
export const useDocumentsCtx = () => useContext(DocumentsContext);
