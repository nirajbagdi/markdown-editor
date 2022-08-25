import { ReactComponent as IconShowPreview } from 'assets/icon-show-preview.svg';
import utilStyles from 'styles/components/utils.module.scss';

type Props = {
    onClick: () => void;
};

const PreviewButton: React.FC<Props> = ({ onClick }) => (
    <button className={utilStyles.btnTransparent} onClick={onClick}>
        <IconShowPreview />
    </button>
);

export default PreviewButton;
