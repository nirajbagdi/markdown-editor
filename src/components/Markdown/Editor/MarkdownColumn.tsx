import { Button } from 'components';
import { ReactComponent as IconPreview } from 'assets/icon-show-preview.svg';

import styles from 'styles/components/editor.module.scss';

interface Props {
	title: string;
	onPreviewToggle: () => void;
	children: React.ReactNode;
}

const MarkdownColumn: React.FC<Props> = ({ title, onPreviewToggle, children }) => (
	<div className={styles.column}>
		<header>
			<span>{title}</span>
			<Button variant="transparent" iconElement={<IconPreview />} onClick={onPreviewToggle} />
		</header>

		{children}
	</div>
);

export default MarkdownColumn;
