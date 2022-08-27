import { useEffect } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { ReactComponent as IconSun } from 'assets/icon-light-mode.svg';
import { ReactComponent as IconMoon } from 'assets/icon-dark-mode.svg';
import styles from 'styles/components/aside.module.scss';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    const toggleDarkMode = () => setDarkMode(mode => !mode);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : '');
    }, [darkMode]);

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
