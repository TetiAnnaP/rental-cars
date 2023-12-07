import { ReactSVG } from 'react-svg';
import heart from 'images/heart.svg';
import css from './FavoriteIcon.module.css';
import { useSelector } from 'react-redux';
import { selectCarList } from 'redux/rootReducer';

const FavoriteIcon = ({ id, updateState, favoritesArr }) => {
  const cars = useSelector(selectCarList);
  // console.log(cars);

  const handleClick = () => {
    console.log(id);
    const car = cars.find(el => el.id === id);
    // console.log(car);
    console.log(favoritesArr);

    const isIdExist =
      favoritesArr.length > 0 && favoritesArr.find(fav => fav.id === car.id);
    console.log(isIdExist);

    if (!isIdExist) {
      updateState(car);
    }
  };

  return <ReactSVG className={css.heart} src={heart} onClick={handleClick} />;
};

export default FavoriteIcon;
