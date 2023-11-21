import { formatDistanceToNow } from 'date-fns';

export const formatDocumentTime = (dateString: string) => {
	const date = new Date(dateString);
	const formattedDistance = formatDistanceToNow(date, { addSuffix: true });
	return formattedDistance === 'less than a minute ago' ? 'Just now' : formattedDistance;
};
