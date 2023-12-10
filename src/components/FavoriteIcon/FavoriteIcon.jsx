import { ReactSVG } from 'react-svg';
import heart from 'images/heart.svg';
import css from './FavoriteIcon.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from 'redux/favoritesReducer';

const FavoriteIcon = ({ car }) => {
  const dispatch = useDispatch();

  const favoriteCars = useSelector(selectFavorites);

  const favorite =
    favoriteCars.length > 0 && favoriteCars.some(el => el.id === car.id);

  const handleClick = () => {
    if (favorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <ReactSVG
      className={favorite ? css.removeFromFavorite : css.addToFavorite}
      src={heart}
      onClick={handleClick}
    />
  );
};

export default FavoriteIcon;
