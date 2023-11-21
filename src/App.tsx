import { useState } from 'react';
import { Header, Sidebar, Editor } from 'components';

const App = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenuOpen = () => setMenuOpen(open => !open);

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
