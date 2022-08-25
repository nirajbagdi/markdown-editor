import { ReactComponent as IconSave } from 'assets/icon-save.svg';
import { ReactComponent as IconDelete } from 'assets/icon-delete.svg';
import styles from 'styles/components/header.module.scss';
import utilStyles from 'styles/components/utils.module.scss';

type Props = {
    onDocumentSave: () => void;
    onDocumentDelete: () => void;
};

const DocumentActions: React.FC<Props> = ({ onDocumentDelete, onDocumentSave }) => {
    return (
        <div className={styles.documentActions}>
            <button className={utilStyles.btnTransparent} onClick={onDocumentDelete}>
                <IconDelete />
            </button>

            <button className={utilStyles.btnFill} onClick={onDocumentSave}>
                <IconSave />
                <span>Save Changes</span>
            </button>
        </div>
    );
};

export default DocumentActions;
