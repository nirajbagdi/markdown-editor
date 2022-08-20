import styles from 'styles/components/header.module.scss';
import utilStyles from 'styles/components/utils.module.scss';
import { ReactComponent as IconSave } from 'assets/icon-save.svg';
import { ReactComponent as IconDelete } from 'assets/icon-delete.svg';

const DocumentActions = () => {
    return (
        <div className={styles.documentActions}>
            <button className={utilStyles.btnTransparent}>
                <IconDelete />
            </button>

            <button className={utilStyles.btnFill}>
                <IconSave />
                <span>Save Changes</span>
            </button>
        </div>
    );
};

export default DocumentActions;
