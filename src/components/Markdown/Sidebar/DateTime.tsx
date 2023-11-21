import { useState, useEffect } from 'react';
import { formatDocumentTime } from 'utils';

import styles from 'styles/components/sidebar.module.scss';

interface Props {
	date: string;
}

const TIMEOUT_SECONDS = 60000;

const DateTime: React.FC<Props> = ({ date }) => {
	const [timeAgo, setTimeAgo] = useState(() => formatDocumentTime(date));

	useEffect(() => {
		const updateTime = () => setTimeAgo(formatDocumentTime(date));

		updateTime();
		const intervalID = setInterval(updateTime, TIMEOUT_SECONDS);
		return () => clearInterval(intervalID);
	}, [date]);

	return <span className={styles.date}>{timeAgo}</span>;
};

export default DateTime;
