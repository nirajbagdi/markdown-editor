import styles from 'styles/components/markdown_editor.module.scss';
import utilStyles from 'styles/components/utils.module.scss';
import { ReactComponent as IconShowPreview } from 'assets/icon-show-preview.svg';

type Props = {};

const MarkdownEditor: React.FC<Props> = ({}) => {
    return (
        <div className={styles.grid}>
            <div className={styles.col1}>
                <div className={styles.colHeader}>
                    <span>Markdown</span>
                </div>

                <div className={styles.editor}>
                    <textarea></textarea>
                </div>
            </div>

            <div className={styles.col2}>
                <div className={styles.colHeader}>
                    <span>Preview</span>

                    <button className={utilStyles.btnTransparent}>
                        <IconShowPreview />
                    </button>
                </div>

                <div className={styles.preview}></div>
            </div>
        </div>
    );
};

export default MarkdownEditor;
