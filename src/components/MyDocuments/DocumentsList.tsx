import styles from 'styles/components/aside.module.scss';
import { useDocumentsCtx } from 'context';
import { ReactComponent as IconDocument } from 'assets/icon-document.svg';

const DocumentsList = () => {
    const documentsCtx = useDocumentsCtx();

    const handleItemClick = (docId: string) => {
        documentsCtx.changeActiveDocument(docId);
    };

    const documentsListContent = documentsCtx.documents.map(document => {
        const classes = [
            styles.documentItem,
            document.id === documentsCtx.activeDocument?.id ? styles.active : ''
        ];

        return (
            <li
                key={document.id}
                className={classes.join(' ')}
                onClick={handleItemClick.bind(null, document.id)}
            >
                <IconDocument />

                <div className={styles.documentInfo}>
                    <span className={styles.date}>{document.createdAt}</span>
                    <p className={styles.name}>{document.name}</p>
                </div>
            </li>
        );
    });

    return <ul className={styles.documentsList}>{documentsListContent}</ul>;
};

export default DocumentsList;
