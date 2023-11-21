import styles from 'styles/components/header.module.scss';

interface Props {
	onToggle: () => void;
}

const MenuToggle: React.FC<Props> = ({ onToggle }) => (
	<button className={styles.hamburger} onClick={onToggle}>
		<span></span>
		<span></span>
		<span></span>
	</button>
);

export default MenuToggle;
