import { useDocumentsCtx } from 'context';
import { DocumentsList, ThemeToggle } from 'components';
import styles from 'styles/components/aside.module.scss';
import utilStyles from 'styles/components/utils.module.scss';

type Props = {
    expand: boolean;
};

const MyDocuments: React.FC<Props> = ({ expand }) => {
    const documentsCtx = useDocumentsCtx();

    return (
        <aside className={`${styles.aside} ${expand ? styles.open : ''}`}>
            <h1 className={utilStyles.headingSans}>Markdown</h1>

            <header>
                <h2 className={utilStyles.headingSans}>My Documents</h2>
                <button className={utilStyles.btnFill} onClick={documentsCtx.addNewDocument}>
                    +&nbsp;New Document
                </button>
            </header>

            <DocumentsList />

            <ThemeToggle />
        </aside>
    );
};

export default MyDocuments;
