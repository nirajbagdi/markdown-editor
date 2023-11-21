import { useEffect } from 'react';
import classNames from 'classnames/bind';

import useLocalStorage from 'hooks/useLocalStorage';
import { ReactComponent as IconMoon } from 'assets/icon-dark-mode.svg';
import { ReactComponent as IconSun } from 'assets/icon-light-mode.svg';

import styles from 'styles/components/sidebar.module.scss';

const cx = classNames.bind(styles);

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

	useEffect(() => {
		const htmlElement = document.documentElement;
		htmlElement.setAttribute('data-theme', darkMode ? 'dark' : '');
	}, [darkMode]);

	const toggleDarkMode = () => setDarkMode(dark => !dark);

	return (
		<div className={styles.themeToggle}>
			<IconMoon className={cx({ active: darkMode })} />

			<div className={styles.toggle}>
				<input type="checkbox" id="toggle" checked={!darkMode} onChange={toggleDarkMode} />
				<label htmlFor="toggle" />
			</div>

			<IconSun className={cx({ active: !darkMode })} />
		</div>
	);
};

export default ThemeToggle;
