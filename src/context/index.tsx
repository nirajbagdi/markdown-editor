import { createContext, useContext, useEffect, useState } from 'react';
import { initialState } from 'context/state';
import { MarkdownDocument, MarkdownDocumentOptional } from 'models';
import documentsData from 'data/data.json';

type Props = { children: React.ReactNode };

const DocumentsContext = createContext(initialState);
export const useDocumentsCtx = () => useContext(DocumentsContext);

export const DocumentsProvider: React.FC<Props> = ({ children }) => {
    const [documents, setDocuments] = useState(documentsData);
    const [activeDocId, setActiveDocId] = useState(documentsData[0].id);
    const [updatedDocument, setUpdatedDocument] = useState<MarkdownDocument | null>(null);
    const [hasSavedDoc, setHasSavedDoc] = useState(false);

    const activeDocument = documents.find(doc => doc.id === activeDocId) ?? null;
    let toastTimer: NodeJS.Timeout | null = null;

    useEffect(() => {
        setUpdatedDocument(activeDocument);
    }, [activeDocument]);

    const changeActiveDocument = (docId: string) => setActiveDocId(docId);

    const saveDocument = () => {
        setHasSavedDoc(
            updatedDocument?.content !== activeDocument?.content ||
                updatedDocument?.name !== activeDocument?.name
        );

        if (toastTimer !== null) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => setHasSavedDoc(false), 4000);

        setDocuments(currDocs => {
            return currDocs.map(doc =>
                doc.id === activeDocId ? (updatedDocument as MarkdownDocument) : doc
            );
        });
    };

    const changeUpdatedDocument = (dataObj: MarkdownDocumentOptional) => {
        setUpdatedDocument(prevDocData => ({ ...(prevDocData as MarkdownDocument), ...dataObj }));
    };

    return (
        <DocumentsContext.Provider
            value={{
                documents,
                activeDocument,
                hasSavedDoc,
                changeActiveDocument,
                changeUpdatedDocument,
                saveDocument
            }}
        >
            {children}
        </DocumentsContext.Provider>
    );
};
