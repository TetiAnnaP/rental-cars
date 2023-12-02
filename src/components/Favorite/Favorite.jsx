import { ReactSVG as FavoriteWrapper } from 'react-svg';
import heart from 'images/heart.svg';
import css from './Favorite.module.css';

const Favorite = () => {
  return <FavoriteWrapper className={css.heart} src={heart} />;
};

export default Favorite;
