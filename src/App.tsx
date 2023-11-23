import { useState, useEffect } from 'react';
import { Header, Sidebar, Editor } from 'components';

const App = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenuOpen = () => setMenuOpen(open => !open);

	// Toggle the menu with 'Escape' key
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && toggleMenuOpen();
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<>
			<Sidebar expand={menuOpen} />

			<main className={menuOpen ? 'collapse' : ''}>
				<Header menuOpen={menuOpen} onMenuToggle={toggleMenuOpen} />
				<Editor />
			</main>
		</>
	);
};

export default App;
