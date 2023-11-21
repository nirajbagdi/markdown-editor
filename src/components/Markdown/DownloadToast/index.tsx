import { useEffect } from 'react';
import classNames from 'classnames/bind';

import { useDocumentsCtx } from 'store/context';
import { ReactComponent as IconDocument } from 'assets/icon-document.svg';

import styles from 'styles/components/download_toast.module.scss';

const cx = classNames.bind(styles);

interface Props {
	show: boolean;
	onSaveCancel: () => void;
}

const DownloadToast: React.FC<Props> = ({ show, onSaveCancel }) => {
	const { activeDocument } = useDocumentsCtx();

	const fullFileName = `${activeDocument?.name}.md`;

	const markdownFile = new Blob([activeDocument?.content || ''], { type: 'text/markdown' });
	const fileDownloadPath = URL.createObjectURL(markdownFile);

	useEffect(() => {
		const toastTimeout = setTimeout(onSaveCancel, 5000);
		return () => clearTimeout(toastTimeout);
		// eslint-disable-next-line
	}, [show]);

	return (
		<div className={cx({ toast: true, slideIn: show })}>
			<p>
				Your changes have been saved. You can download the file by clicking the link below.
			</p>

			<a href={fileDownloadPath} className={styles.link} download={fullFileName}>
				<IconDocument />
				<span>Download the File</span>
			</a>
		</div>
	);
};

export default DownloadToast;
