import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useDocumentsCtx } from 'context';
import styles from 'styles/components/markdown_editor.module.scss';
import utilStyles from 'styles/components/utils.module.scss';
import { ReactComponent as IconShowPreview } from 'assets/icon-show-preview.svg';

type Props = {};

const MarkdownEditor: React.FC<Props> = () => {
    const [markdownText, setMarkdownText] = useState('');

    const documentsCtx = useDocumentsCtx();

    const handleMarkdownTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdownText(event.target!.value);
    };

    useEffect(() => {
        setMarkdownText(documentsCtx.activeDocument?.content ?? '');
    }, [documentsCtx.activeDocument?.content]);

    return (
        <div className={styles.grid}>
            <div className={styles.col1}>
                <div className={styles.colHeader}>
                    <span>Markdown</span>
                </div>

                <div className={styles.editor}>
                    <textarea value={markdownText} onChange={handleMarkdownTextChange}></textarea>
                </div>
            </div>

            <div className={styles.col2}>
                <div className={styles.colHeader}>
                    <span>Preview</span>

                    <button className={utilStyles.btnTransparent}>
                        <IconShowPreview />
                    </button>
                </div>

                <div className={styles.preview}>
                    <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
                </div>
            </div>
        </div>
    );
};

export default MarkdownEditor;
