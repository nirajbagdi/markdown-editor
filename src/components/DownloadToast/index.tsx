import styles from 'styles/components/download_toast.module.scss';
import utilStyles from 'styles/components/utils.module.scss';
import { ReactComponent as IconDocument } from 'assets/icon-document.svg';

type Props = {};

const DownloadToast: React.FC<Props> = () => {
    return (
        <div className={styles.downloadToast}>
            <p>Your changes have been saved. You can download the file by clicking the link below.</p>

            <button className={utilStyles.btnFill}>
                <IconDocument />
                <span>Download the File</span>
            </button>
        </div>
    );
};

export default DownloadToast;
