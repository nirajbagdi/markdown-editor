import { createRoot } from 'react-dom/client';
import DocumentsProvider from 'store';
import App from 'App';
import 'styles/main.scss';

const root = createRoot(document.getElementById('root')!);

root.render(
	<DocumentsProvider>
		<App />
	</DocumentsProvider>
);
