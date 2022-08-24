import { ReactComponent as IconSave } from 'assets/icon-save.svg';
import { ReactComponent as IconDelete } from 'assets/icon-delete.svg';
import styles from 'styles/components/header.module.scss';
import utilStyles from 'styles/components/utils.module.scss';

type Props = {
    onDocumentSave: () => void;
};

const DocumentActions: React.FC<Props> = props => {
    return (
        <div className={styles.documentActions}>
            <button className={utilStyles.btnTransparent}>
                <IconDelete />
            </button>

            <button className={utilStyles.btnFill} onClick={props.onDocumentSave}>
                <IconSave />
                <span>Save Changes</span>
            </button>
        </div>
    );
};

export default DocumentActions;
