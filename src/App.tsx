import { useState } from 'react';
import { Header, MarkdownEditor, MyDocuments } from 'components';

const App = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => setShowMenu(show => !show);

    return (
        <>
            <MyDocuments expand={showMenu} />

            <main className={showMenu ? 'collapse' : ''}>
                <Header showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
                <MarkdownEditor />
            </main>
        </>
    );
};

export default App;
