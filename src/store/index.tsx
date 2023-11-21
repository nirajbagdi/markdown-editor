import useLocalStorage from 'hooks/useLocalStorage';
import { DocumentsContext } from './context';
import { IDocument } from 'models';
import documentData from 'data/data.json';

interface Props {
	children: React.ReactNode;
}

const DocumentsProvider: React.FC<Props> = ({ children }) => {
	const [documents, setDocuments] = useLocalStorage<IDocument[]>('documents', documentData);
	const [activeDocID, setActiveDocID] = useLocalStorage<string>('activeDoc', documents[0].id);

	const activeDocument = documents.find(doc => doc.id === activeDocID) ?? null;

	const changeActiveDocument = (docID: string) => setActiveDocID(docID);

	const addDocument = (document: IDocument) => setDocuments(prevDocs => [...prevDocs, document]);

	const deleteDocument = (docID: string) =>
		setDocuments(prevDocs => prevDocs.filter(doc => doc.id !== docID));

	const saveDocument = (document: IDocument) =>
		setDocuments(prevDocs => prevDocs.map(doc => (doc.id === document.id ? document : doc)));

	const contextValue = {
		documents,
		activeDocument,
		changeActiveDocument,
		addDocument,
		deleteDocument,
		saveDocument,
	};

	return <DocumentsContext.Provider value={contextValue}>{children}</DocumentsContext.Provider>;
};

export default DocumentsProvider;
