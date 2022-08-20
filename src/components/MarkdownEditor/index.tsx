import styles from 'styles/components/markdown_editor.module.scss';
import utilStyles from 'styles/components/utils.module.scss';
import { ReactComponent as IconShowPreview } from 'assets/icon-show-preview.svg';

type Props = {};

const MarkdownEditor: React.FC<Props> = () => {
    return (
        <div className={styles.editorContainer}>
            <div className={styles.editorHeader}>
                <div>
                    <span>Markdown</span>
                </div>

                <div>
                    <span>Preview</span>

                    <button className={utilStyles.btnTransparent}>
                        <IconShowPreview />
                    </button>
                </div>
            </div>

            <div className={styles.editorMain}>
                <div className={styles.editorTextarea}>
                    <textarea></textarea>
                </div>

                <div className={styles.editorPreview}></div>
            </div>
        </div>
    );
};

export default MarkdownEditor;
