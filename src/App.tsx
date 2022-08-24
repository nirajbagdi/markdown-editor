import { useState } from 'react';
import { Header, MarkdownEditor, MyDocuments, DownloadToast } from 'components';

const App = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => setShowMenu(show => !show);

    return (
        <>
            <MyDocuments expand={showMenu} />
            <DownloadToast />

            <main className={showMenu ? 'collapse' : ''}>
                <Header showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
                <MarkdownEditor />
            </main>
        </>
    );
};

export default App;
