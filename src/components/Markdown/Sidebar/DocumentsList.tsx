import classNames from 'classnames/bind';

import { IDocument } from 'models';
import DateTime from './DateTime';
import { ReactComponent as IconDocument } from 'assets/icon-document.svg';

import styles from 'styles/components/sidebar.module.scss';

const cx = classNames.bind(styles);

interface Props {
	items: IDocument[];
	activeDocumentID: string;
	onDocumentChange: (docID: string) => void;
}

const DocumentsList: React.FC<Props> = ({
	items: documents,
	activeDocumentID,
	onDocumentChange,
}) => {
	const listItemsContent = documents.map(document => (
		<li
			key={document.id}
			className={cx({ item: true, active: document.id === activeDocumentID })}
			onClick={onDocumentChange.bind(null, document.id)}
		>
			<IconDocument />

			<div className={styles.documentInfo}>
				<DateTime date={document.createdAt} />

				<p className={styles.name}>
					{document.name.length >= 20
						? document.name.slice(0, 18).padEnd(22, '.')
						: document.name}
				</p>
			</div>
		</li>
	));

	return <ul className={styles.documents}>{listItemsContent}</ul>;
};

export default DocumentsList;
