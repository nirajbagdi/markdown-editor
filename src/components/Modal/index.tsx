import { createPortal } from 'react-dom';
import styles from 'styles/components/modal.module.scss';

const portalElement = document.getElementById('overlays') as HTMLElement;

type Props = {
    children: React.ReactNode;
    className?: string;
    onClose: () => void;
};

type BackdropProps = {
    onClick: () => void;
};

type ModalOverlayProps = {
    children: React.ReactNode;
    className?: string;
};

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
    return <div className={styles.backdrop} onClick={onClick} />;
};

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children, className }) => (
    <div className={styles.modal}>
        <div className={`${styles.modalContent} ${className || ''}`}>{children}</div>
    </div>
);

const Modal: React.FC<Props> = ({ children, onClose, className }) => (
    <>
        {createPortal(<Backdrop onClick={onClose} />, portalElement)}
        {createPortal(<ModalOverlay className={className}>{children}</ModalOverlay>, portalElement)}
    </>
);

export default Modal;
