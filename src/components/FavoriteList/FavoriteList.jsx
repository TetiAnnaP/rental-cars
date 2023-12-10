import css from '../CarList/CarList.module.css';
import FavoriteIcon from 'components/FavoriteIcon/FavoriteIcon';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';
import { selectFavorites } from 'redux/favoritesReducer';
import templCar from '../../images/templ.png';
import { selectShowModal, setId, setShowModal } from 'redux/carReducer';
import { getCarByIdThunk } from 'thunk/thunk';

const FavoriteList = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);

  const showModal = useSelector(selectShowModal);

  const handleBtnLearnMoreClick = e => {
    document.body.className = 'scrolLock';
    const id = e.currentTarget.id;
    dispatch(setId(id));
    dispatch(setShowModal(true));
    dispatch(getCarByIdThunk(id));
  };

  return (
    <>
      {favoriteCars.length === 0 && <div>"There are no favorite cars"</div>}
      <ul className={css.carList}>
        {favoriteCars.map(car => (
          <li key={nanoid()} className={css.carListItem}>
            <div className={css.thumb} id={car.id}>
              <div>
                <img
                  className={css.img}
                  src={car.img || { templCar }}
                  alt={car.make}
                  onError={e => {
                    e.currentTarget.src = templCar;
                  }}
                />
                <FavoriteIcon car={car} />
                <p className={css.makeyear}>
                  {car.make}
                  <span className={css.span}> {car.model} </span>, {car.year}
                  <span className={css.price}>{car.rentalPrice}</span>
                </p>
                <ul className={css.characterList}>
                  <li className={css.characterItem}>
                    {car.address.split(',').slice(1, 2).join(' ')}
                  </li>
                  <li className={css.characterItem}>
                    {car.address.split(',').slice(2, 3).join(' ')}
                  </li>
                  <li className={css.characterItem}>{car.rentalCompany}</li>
                </ul>

                <ul className={css.characterList}>
                  <li className={css.characterItem}>{car.type}</li>
                  <li className={css.characterItem}>{car.model}</li>
                  <li className={css.characterItem}>{car.id}</li>
                  <li className={css.characterItem}>
                    {car.accessories
                      .slice(0, 1)
                      .join()
                      .split(' ')
                      .slice(-3)
                      .join(' ')}
                  </li>
                </ul>
              </div>

              <button
                className={css.buttonLearnMore}
                type="button"
                id={car.id}
                onClick={handleBtnLearnMoreClick}
              >
                Learn more
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && <Modal />}
    </>
  );
};

export default FavoriteList;
