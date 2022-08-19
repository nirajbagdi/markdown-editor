import { createRoot } from 'react-dom/client';
import 'styles/main.scss';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
