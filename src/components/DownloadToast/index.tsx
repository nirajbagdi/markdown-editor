import { useDocumentsCtx } from 'context';
import { ReactComponent as IconDocument } from 'assets/icon-document.svg';
import styles from 'styles/components/download_toast.module.scss';
import utilStyles from 'styles/components/utils.module.scss';

type Props = {};

const DownloadToast: React.FC<Props> = () => {
    const documentsCtx = useDocumentsCtx();

    if (!documentsCtx.activeDocument) return null;

    const fullFileName = `${documentsCtx.activeDocument.name}.md`;

    const markdownFile = new Blob([documentsCtx.activeDocument.content], { type: 'text/markdown' });
    const fileDownloadPath = URL.createObjectURL(markdownFile);

    return (
        <div className={`${styles.downloadToast} ${documentsCtx.hasSavedDoc ? styles.slideIn : ''}`}>
            <p>Your changes have been saved. You can download the file by clicking the link below.</p>

            <a href={fileDownloadPath} className={utilStyles.btnFill} download={fullFileName}>
                <IconDocument />
                <span>Download the File</span>
            </a>
        </div>
    );
};

export default DownloadToast;
