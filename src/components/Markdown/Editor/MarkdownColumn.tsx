import { Button } from 'components';
import { ReactComponent as IconPreviewShow } from 'assets/icon-show-preview.svg';
import { ReactComponent as IconPreviewHide } from 'assets/icon-hide-preview.svg';

import styles from 'styles/components/editor.module.scss';

interface Props {
    title: string;
    isPreviewMode?: boolean;
    onPreviewToggle: () => void;
    children: React.ReactNode;
}

const MarkdownColumn: React.FC<Props> = ({ title, isPreviewMode, onPreviewToggle, children }) => {
    const editorPaneIcon = isPreviewMode ? <IconPreviewHide /> : <IconPreviewShow />;

    return (
        <div className={styles.column}>
            <header>
                <span>{title}</span>
                <Button variant="transparent" iconElement={editorPaneIcon} onClick={onPreviewToggle} />
            </header>

            {children}
        </div>
    );
};

export default MarkdownColumn;
