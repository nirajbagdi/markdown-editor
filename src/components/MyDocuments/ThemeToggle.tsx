import { useState } from 'react';
import styles from 'styles/components/aside.module.scss';
import { ReactComponent as IconSun } from 'assets/icon-light-mode.svg';
import { ReactComponent as IconMoon } from 'assets/icon-dark-mode.svg';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(mode => !mode);

    return (
        <div className={styles.themeToggleBox}>
            <IconMoon className={darkMode ? styles.active : ''} />

            <div className={styles.toggle}>
                <input type="checkbox" id="toggle" checked={!darkMode} onChange={toggleDarkMode} />
                <label htmlFor="toggle"></label>
            </div>

            <IconSun className={!darkMode ? styles.active : ''} />
        </div>
    );
};

export default ThemeToggle;
