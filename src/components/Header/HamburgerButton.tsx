import styles from 'styles/components/header.module.scss';

type Props = {
    onToggle: () => void;
};

const HamburgerButton: React.FC<Props> = ({ onToggle }) => (
    <button className={styles.hamburger} onClick={onToggle}>
        <span></span>
        <span></span>
        <span></span>
    </button>
);

export default HamburgerButton;
