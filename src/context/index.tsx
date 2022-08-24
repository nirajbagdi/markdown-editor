import { createContext, useContext, useState } from 'react';
import { initialState } from 'context/state';
import documentsData from 'data/data.json';

type Props = { children: React.ReactNode };

const DocumentsContext = createContext(initialState);
export const useDocumentsCtx = () => useContext(DocumentsContext);

export const DocumentsProvider: React.FC<Props> = ({ children }) => {
    const [documents, setDocuments] = useState(documentsData);
    return <DocumentsContext.Provider value={{ documents }}>{children}</DocumentsContext.Provider>;
};
