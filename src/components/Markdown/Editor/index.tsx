import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import classNames from 'classnames/bind';

import { useDocumentsCtx } from 'store/context';
import MarkdownColumn from './MarkdownColumn';

import styles from 'styles/components/editor.module.scss';

const DEBOUNCE_DELAY = 1000;
const cx = classNames.bind(styles);

const Editor = () => {
    const { activeDocument, saveDocument } = useDocumentsCtx();

    const [markdownText, setMarkdownText] = useState('');
    const [isPreviewMode, setIsPreviewMode] = useState(false);

    useEffect(() => {
        setMarkdownText(activeDocument?.content || '');
    }, [activeDocument?.content]);

    useEffect(() => {
        if (activeDocument && activeDocument.content !== markdownText) {
            const timeout = setTimeout(
                () => saveDocument({ ...activeDocument, content: markdownText }),
                DEBOUNCE_DELAY
            );

            return () => clearTimeout(timeout);
        }

        // eslint-disable-next-line
    }, [activeDocument, markdownText]);

    const togglePreviewMode = () => setIsPreviewMode((preview) => !preview);

    const handleMarkdownTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedText = event.target.value;
        setMarkdownText(updatedText);
    };

    return (
        <div className={cx({ grid: true, previewOnly: isPreviewMode })}>
            <MarkdownColumn title="Markdown" onPreviewToggle={togglePreviewMode}>
                <div className={styles.editor}>
                    <textarea value={markdownText} onChange={handleMarkdownTextChange} />
                </div>
            </MarkdownColumn>

            <MarkdownColumn isPreviewMode={isPreviewMode} title="Preview" onPreviewToggle={togglePreviewMode}>
                <div className={styles.preview}>
                    <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
                </div>
            </MarkdownColumn>
        </div>
    );
};

export default Editor;
