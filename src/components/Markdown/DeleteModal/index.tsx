import { Button, Modal } from 'components';

import styles from 'styles/components/delete_modal.module.scss';

type Props = {
	fileName: string;
	onCancel: () => void;
	onConfirm: () => void;
};

const DeleteModal: React.FC<Props> = ({ fileName, onCancel, onConfirm }) => (
	<Modal className={styles.deleteModal} onClose={onCancel}>
		<h2>Delete this document?</h2>

		<p>
			Are you sure you want to delete the <em>'{fileName}'</em> document and its contents?
			This action cannot be reversed.
		</p>

		<Button variant="contained" label="Confirm & Delete" onClick={onConfirm} />
	</Modal>
);

export default DeleteModal;
