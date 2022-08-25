import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useDocumentsCtx } from 'context';
import { PreviewButton } from 'components';
import styles from 'styles/components/markdown_editor.module.scss';

type Props = {};

const MarkdownEditor: React.FC<Props> = () => {
    const [markdownText, setMarkdownText] = useState('');
    const [isPreviewMode, setIsPreviewMode] = useState(false);

    const documentsCtx = useDocumentsCtx();

    const handleMarkdownTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedDocText = event.target.value;
        setMarkdownText(updatedDocText);
        documentsCtx.changeUpdatedDocument({ content: updatedDocText });
    };

    const handlePreviewToggle = () => {
        setIsPreviewMode(currMode => !currMode);
    };

    useEffect(() => {
        setMarkdownText(documentsCtx.activeDocument?.content ?? '');
    }, [documentsCtx.activeDocument?.content]);

    return (
        <div className={`${styles.grid} ${isPreviewMode ? styles.previewOnly : ''}`}>
            <div className={styles.col1}>
                <div className={styles.colHeader}>
                    <span>Markdown</span>
                    <PreviewButton onClick={handlePreviewToggle} />
                </div>

                <div className={styles.editor}>
                    <textarea value={markdownText} onChange={handleMarkdownTextChange}></textarea>
                </div>
            </div>

            <div className={styles.col2}>
                <div className={styles.colHeader}>
                    <span>Preview</span>
                    <PreviewButton onClick={handlePreviewToggle} />
                </div>

                <div className={styles.preview}>
                    <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
                </div>
            </div>
        </div>
    );
};

export default MarkdownEditor;
