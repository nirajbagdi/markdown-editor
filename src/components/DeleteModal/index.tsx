import styles from 'styles/components/delete_modal.module.scss';
import utilStyles from 'styles/components/utils.module.scss';
import Modal from 'components/Modal';

type Props = {
    onModalClose: () => void;
    onConfirmDelete: () => void;
};

const DeleteModal: React.FC<Props> = ({ onModalClose, onConfirmDelete }) => {
    // prettier-ignore
    return (
        <Modal className={styles.deleteModal} onClose={onModalClose}>
            <h2>Delete this document?</h2>
            <p>Are you sure you want to delete the <em>'welcome'</em> document and its contents? This action cannot be reversed.</p>
            <button className={utilStyles.btnFill} onClick={onConfirmDelete}>Confirm & Delete</button>
        </Modal>
    );
};

export default DeleteModal;
