import { ReactSVG as CloseWrapper } from 'react-svg';
import close from 'images//x.svg';
import css from './CloseIcon.module.css';

const CloseIcon = () => {
  return <CloseWrapper className={css.close} src={close} />;
};

export default CloseIcon;
