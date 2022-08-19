import styles from 'styles/components/aside.module.scss';
import { ReactComponent as IconDocument } from 'assets/icon-document.svg';
import markdownData from 'data/data.json';

const DocumentsList = () => {
    const documentsListContent = markdownData.map(document => (
        <li key={document.id} className={styles.documentItem}>
            <IconDocument />

            <div className={styles.documentInfo}>
                <span className={styles.date}>{document.createdAt}</span>
                <p className={styles.name}>{document.name}</p>
            </div>
        </li>
    ));

    return <ul className={styles.documentsList}>{documentsListContent}</ul>;
};

export default DocumentsList;
