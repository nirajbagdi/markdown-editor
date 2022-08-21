import { useState } from 'react';
import { DocumentsProvider } from 'context';
import { Header, MarkdownEditor, MyDocuments } from 'components';

const App = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => setShowMenu(show => !show);

    return (
        <DocumentsProvider>
            <MyDocuments expand={showMenu} />

            <main className={showMenu ? 'collapse' : ''}>
                <Header showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
                <MarkdownEditor />
            </main>
        </DocumentsProvider>
    );
};

export default App;
