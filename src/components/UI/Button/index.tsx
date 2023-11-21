import classNames from 'classnames/bind';
import styles from 'styles/components/button.module.scss';

const cx = classNames.bind(styles);

interface Props {
	variant: 'transparent' | 'contained';
	iconElement?: React.ReactNode;
	label?: string;
	onClick?: () => void;
}

const Button: React.FC<Props> = ({ variant, iconElement, label, onClick }) => (
	<button
		className={cx({
			button: true,
			contained: variant === 'contained',
			transparent: variant === 'transparent',
		})}
		onClick={onClick}
	>
		{iconElement}
		<span>{label}</span>
	</button>
);

export default Button;
