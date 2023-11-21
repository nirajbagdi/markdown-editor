import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { useDocumentsCtx } from 'store/context';
import MenuToggle from './MenuToggle';
import { Button, DeleteModal, DownloadToast } from 'components';

import { ReactComponent as IconDocument } from 'assets/icon-document.svg';
import { ReactComponent as IconDelete } from 'assets/icon-delete.svg';
import { ReactComponent as IconSave } from 'assets/icon-save.svg';

import styles from 'styles/components/header.module.scss';

interface Props {
	menuOpen: boolean;
	onMenuToggle: () => void;
}

const cx = classNames.bind(styles);

const Header: React.FC<Props> = ({ menuOpen, onMenuToggle }) => {
	const { activeDocument, saveDocument, deleteDocument } = useDocumentsCtx();

	const [documentName, setDocumentName] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [hasSaved, setHasSaved] = useState(false);

	useEffect(() => {
		setDocumentName(activeDocument?.name || '');
	}, [activeDocument?.name]);

	const handleDocumentNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDocumentName(event.target.value);
	};

	const handleDocumentDelete = () => setIsDeleting(true);
	const handleDeleteCancel = () => setIsDeleting(false);

	const handleDeleteConfirm = () => {
		deleteDocument(activeDocument?.id!);
		setIsDeleting(false);
	};

	const handleDocumentSave = () => {
		if (!activeDocument || !documentName.trim().length) return;

		saveDocument({
			...activeDocument,
			name: documentName,
			createdAt: new Date().toISOString(),
		});
		setHasSaved(true);
	};

	const handleDocumentSaveCancel = () => setHasSaved(false);

	return (
		<>
			{isDeleting && (
				<DeleteModal
					fileName={activeDocument?.name || ''}
					onCancel={handleDeleteCancel}
					onConfirm={handleDeleteConfirm}
				/>
			)}

			<DownloadToast show={hasSaved} onSaveCancel={handleDocumentSaveCancel} />

			<header className={cx({ header: true, open: menuOpen })}>
				<MenuToggle onToggle={onMenuToggle} />

				<p className="title">Markdown</p>

				<div className={styles.documentInfo}>
					<IconDocument />

					<div className={styles.documentName}>
						<label htmlFor="docName">Document Name</label>

						<input
							type="text"
							id="docName"
							value={documentName}
							onChange={handleDocumentNameChange}
						/>
					</div>
				</div>

				<div className={styles.documentActions}>
					<Button
						variant="transparent"
						iconElement={<IconDelete />}
						onClick={handleDocumentDelete}
					/>

					<Button
						variant="contained"
						iconElement={<IconSave />}
						label="Save Changes"
						onClick={handleDocumentSave}
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
