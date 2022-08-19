import styles from 'styles/components/header.module.scss';
import { ReactComponent as IconDocument } from 'assets/icon-document.svg';
import { HamburgerButton, DocumentActions } from 'components';

type Props = {
    showMenu: boolean;
    toggleShowMenu: () => void;
};

const Header: React.FC<Props> = ({ showMenu, toggleShowMenu }) => {
    const classes = [styles.header, showMenu ? styles.open : ''];

    return (
        <header className={classes.join(' ')}>
            <HamburgerButton onToggle={toggleShowMenu} />

            <h1>Markdown</h1>

            <div className={styles.documentInfo}>
                <IconDocument />

                <div className={styles.documentName}>
                    <label htmlFor="documentName">Document Name</label>
                    <input type="text" id="documentName" defaultValue="welcome.md" />
                </div>
            </div>

            <DocumentActions />
        </header>
    );
};

export default Header;
