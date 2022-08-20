import styles from 'styles/components/delete_document.module.scss';
import utilStyles from 'styles/components/utils.module.scss';
import Modal from 'components/Modal';

type Props = {};

const DeleteDocument: React.FC<Props> = () => {
    // prettier-ignore
    return (
        <Modal className={styles.deleteModal} onClose={() => console.log('closing...')}>
            <h2>Delete this document?</h2>
            <p>Are you sure you want to delete the <em>'welcome'</em> document and its contents? This action cannot be reversed.</p>
            <button className={utilStyles.btnFill}>Confirm & Delete</button>
        </Modal>
    );
};

export default DeleteDocument;
