import css from './CarList.module.css';
import { useEffect } from 'react';
import FavoriteIcon from 'components/FavoriteIcon/FavoriteIcon';
import templCar from '../../images/templ.png';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarList,
  selectPage,
  selectShowModal,
  setId,
  setPage,
  setShowModal,
} from 'redux/carReducer';
import { getCarByIdThunk, getCarsThunk } from '../../thunk/thunk';
import Modal from 'components/Modal/Modal';

const CarList = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const carsList = useSelector(selectCarList);
  const showModal = useSelector(selectShowModal);

  useEffect(() => {
    if (carsList.length > 0) {
      return;
    }
    dispatch(getCarsThunk());
  }, [dispatch, carsList.length]);

  const handleBtnLearnMoreClick = e => {
    document.body.className = 'scrolLock';
    const id = e.currentTarget.id;
    dispatch(setId(id));
    dispatch(setShowModal(true));
    dispatch(getCarByIdThunk(id));
  };

  const handleBtnLoadMoreClick = () => {
    const newPage = page + 1;
    dispatch(setPage(newPage));
    dispatch(getCarsThunk(newPage));
  };

  return (
    <>
      {carsList.length === 0 && <div>"There are no more cars"</div>}
      <ul className={css.carList}>
        {carsList.map(car => (
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

      <button
        className={css.btnLoadMore}
        type="button"
        onClick={handleBtnLoadMoreClick}
      >
        Load more
      </button>
      {showModal && <Modal />}
    </>
  );
};

export default CarList;
