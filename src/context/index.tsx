import { createContext, useContext, useState } from 'react';
import { initialState } from 'context/state';
import documentsData from 'data/data.json';

type Props = { children: React.ReactNode };

const DocumentsContext = createContext(initialState);
export const useDocumentsCtx = () => useContext(DocumentsContext);

export const DocumentsProvider: React.FC<Props> = ({ children }) => {
    const [documents, setDocuments] = useState(documentsData);
    const [activeDocId, setActiveDocId] = useState(documentsData[0].id);

    const activeDocument = documents.find(doc => doc.id === activeDocId) ?? null;
    const changeActiveDocument = (docId: string) => setActiveDocId(docId);

    return (
        <DocumentsContext.Provider value={{ documents, activeDocument, changeActiveDocument }}>
            {children}
        </DocumentsContext.Provider>
    );
};
