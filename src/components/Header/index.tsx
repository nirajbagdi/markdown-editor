import { useEffect, useState } from 'react';
import { useDocumentsCtx } from 'context';
import { ReactComponent as IconDocument } from 'assets/icon-document.svg';
import { HamburgerButton, DocumentActions } from 'components';
import styles from 'styles/components/header.module.scss';
import utilStyles from 'styles/components/utils.module.scss';

type Props = {
    showMenu: boolean;
    toggleShowMenu: () => void;
};

const Header: React.FC<Props> = ({ showMenu, toggleShowMenu }) => {
    const [documentName, setDocumentName] = useState('');
    const documentsCtx = useDocumentsCtx();

    const classes = [styles.header, showMenu ? styles.open : ''];

    const handleDocumentNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedDocName = event.target.value;
        setDocumentName(updatedDocName);
        documentsCtx.changeUpdatedDocument({ name: updatedDocName });
    };

    const handleActionDocumentSave = () => {
        documentsCtx.saveDocument();
    };

    useEffect(() => {
        setDocumentName(documentsCtx.activeDocument?.name ?? '');
    }, [documentsCtx.activeDocument?.name]);

    return (
        <header className={classes.join(' ')}>
            <HamburgerButton onToggle={toggleShowMenu} />

            <h1 className={utilStyles.headingSans}>Markdown</h1>

            <div className={styles.documentInfo}>
                <IconDocument />

                <div className={styles.documentName}>
                    <label htmlFor="documentName">Document Name</label>
                    <input
                        type="text"
                        id="documentName"
                        value={documentName}
                        onChange={handleDocumentNameChange}
                    />
                </div>
            </div>

            <DocumentActions onDocumentSave={handleActionDocumentSave} />
        </header>
    );
};

export default Header;
