import { ReactSVG } from 'react-svg';
import heart from 'images/heart.svg';
import css from './FavoriteIcon.module.css';
import { useSelector } from 'react-redux';
import { selectCarList } from 'redux/carReducer';

const FavoriteIcon = ({ id, addFavorite, favoritesArr, removeFavorite }) => {
  const cars = useSelector(selectCarList);
  const favorite =
    favoritesArr.length > 0 && favoritesArr.find(el => el === id);

  const handleClick = () => {
    const car = cars.find(el => el.id === id);
    const isInFavorite =
      favoritesArr.length > 0 && favoritesArr.find(fav => fav === car.id);

    if (isInFavorite) {
      removeFavorite(car.id);
    } else {
      addFavorite(car.id);
    }
    console.log('id', id);
    console.log('favoritesArr', favoritesArr);
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
