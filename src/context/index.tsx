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
    const [isDeleting, setIsDeleting] = useState(false);

    const activeDocument = documents.find(doc => doc.id === activeDocId) ?? null;
    let toastTimer: NodeJS.Timeout | null = null;

    useEffect(() => {
        setUpdatedDocument(activeDocument);
    }, [activeDocument]);

    const changeActiveDocument = (docId: string) => setActiveDocId(docId);

    const changeUpdatedDocument = (dataObj: MarkdownDocumentOptional) =>
        setUpdatedDocument(prevDocData => ({ ...(prevDocData as MarkdownDocument), ...dataObj }));

    const closeDeleteModal = () => setIsDeleting(false);
    const showDeleteModal = () => setIsDeleting(true);

    const saveDocument = () => {
        setDocuments(currDocs => {
            return currDocs.map(doc =>
                doc.id === activeDocId ? (updatedDocument as MarkdownDocument) : doc
            );
        });

        setHasSavedDoc(true);
        if (toastTimer !== null) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => setHasSavedDoc(false), 3000);
    };

    const deleteDocument = () => {
        setDocuments(currDocs => currDocs.filter(doc => doc.id !== activeDocId));
        closeDeleteModal();
    };

    const addNewDocument = () => {
        setDocuments(currDocs => [...currDocs, new MarkdownDocument()]);
    };

    return (
        <DocumentsContext.Provider
            value={{
                documents,
                activeDocument,
                hasSavedDoc,
                isDeleting,
                changeActiveDocument,
                changeUpdatedDocument,
                saveDocument,
                deleteDocument,
                showDeleteModal,
                closeDeleteModal,
                addNewDocument
            }}
        >
            {children}
        </DocumentsContext.Provider>
    );
};
