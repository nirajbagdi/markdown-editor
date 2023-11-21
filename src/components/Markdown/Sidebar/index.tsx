import classNames from 'classnames/bind';
import { v4 as uuid } from 'uuid';

import { useDocumentsCtx } from 'store/context';

import DocumentsList from './DocumentsList';
import ThemeToggle from './ThemeToggle';
import { Button } from 'components';

import styles from 'styles/components/sidebar.module.scss';

interface Props {
	expand: boolean;
}

const cx = classNames.bind(styles);

const Sidebar: React.FC<Props> = ({ expand }) => {
	const { documents, activeDocument, changeActiveDocument, addDocument } = useDocumentsCtx();

	const handleNewDocument = () => {
		const newDocument = {
			id: uuid(),
			name: 'Untitled Document',
			createdAt: new Date().toISOString(),
			content: '',
		};

		addDocument(newDocument);
		changeActiveDocument(newDocument.id);
	};

	return (
		<aside className={cx({ sidebar: true, open: expand })}>
			<p className="title">Markdown</p>

			<header>
				<h2>My Documents</h2>
				<Button
					variant="contained"
					label="+&nbsp;New Document"
					onClick={handleNewDocument}
				/>
			</header>

			<DocumentsList
				items={documents}
				activeDocumentID={activeDocument?.id || ''}
				onDocumentChange={changeActiveDocument}
			/>

			<ThemeToggle />
		</aside>
	);
};

export default Sidebar;
