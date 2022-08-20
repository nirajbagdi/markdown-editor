import { createPortal } from 'react-dom';
import styles from 'styles/components/modal.module.scss';

const portalElement = document.getElementById('overlays') as HTMLElement;

type Props = {
    children: React.ReactNode;
    onClose: () => void;
};

type BackdropProps = {
    onClick: () => void;
};

type ModalOverlayProps = {
    children: React.ReactNode;
};

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
    return <div className={styles.backdrop} onClick={onClick} />;
};

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => (
    <div className={styles.modal}>
        <div className={styles.modalContent}>{children}</div>
    </div>
);

const Modal: React.FC<Props> = ({ children, onClose }) => (
    <>
        {createPortal(<Backdrop onClick={onClose} />, portalElement)}
        {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
);

export default Modal;
