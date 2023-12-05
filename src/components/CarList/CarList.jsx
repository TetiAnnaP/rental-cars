import css from './CarList.module.css';
import { useEffect } from 'react';
import Favorite from 'components/Favorite/Favorite';
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
} from 'redux/rootReducer';
import { getCarByIdThunk, getCarsThunk } from '../../thunk/thunk';
import Modal from 'components/Modal/Modal';

const CarList = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const carsList = useSelector(selectCarList);
  const showModal = useSelector(selectShowModal);

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  const handleBtnLearnMoreClick = e => {
    const id = e.currentTarget.id;

    dispatch(setId(id));
    dispatch(setShowModal(true));
    dispatch(getCarByIdThunk(id));
  };

  const handleBtnLoadMoreClick = () => {
    const newPage = page + 1;
    dispatch(setPage(newPage));
    dispatch(getCarsThunk(newPage));

    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
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
                <Favorite />
                <p className={css.makeyear}>
                  {car.make}
                  <span className={css.span}> {car.model} </span>, {car.year}
                  <span className={css.price}>{car.rentalPrice}</span>
                </p>
                <p className={css.accessories}>
                  {car.address} | {car.rentalCompany}
                </p>
                <p className={css.accessories}>
                  {car.type} | {car.id} | {car.accessories[0]}
                </p>
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
