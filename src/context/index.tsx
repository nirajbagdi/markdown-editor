import { createContext, useContext } from 'react';
import { initialState } from 'context/state';

type Props = { children: React.ReactNode };

const DocumentsContext = createContext(initialState);
export const useDocumentsCtx = () => useContext(DocumentsContext);

export const DocumentsProvider: React.FC<Props> = ({ children }) => {
    return <DocumentsContext.Provider value={{}}>{children}</DocumentsContext.Provider>;
};
