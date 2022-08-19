import { useState } from 'react';
import { Header, MyDocuments } from 'components';

const App = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => setShowMenu(show => !show);

    return (
        <>
            <MyDocuments expand={showMenu} />

            <main className={showMenu ? 'collapse' : ''}>
                <Header showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
            </main>
        </>
    );
};

export default App;
