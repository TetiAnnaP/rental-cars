import { useDispatch, useSelector } from 'react-redux';
import css from './Modal.module.css';
import templCar from '../../images/templ.png';
import { selectCarById, setCarById, setShowModal } from 'redux/carReducer';
import { nanoid } from 'nanoid';
import CloseIcon from '../CloseIcon/CloseIcon';
import { useEffect } from 'react';

const Modal = () => {
  const dispatch = useDispatch();
  const car = useSelector(selectCarById)[0];

  const handleCloseBtn = () => {
    dispatch(setShowModal(false));
    dispatch(setCarById([]));
    document.body.className = '';
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(setShowModal(false));
      document.body.className = '';
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      dispatch(setShowModal(false));
      document.body.className = '';
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      {car && (
        <div className={css.container}>
          <img
            className={css.img}
            src={car.img || { templCar }}
            alt={car.make}
            onError={e => {
              e.currentTarget.src = templCar;
            }}
          />
          <ul className={css.carTitle}>
            <li>{car.make}</li>
            <li className={css.color}>{car.model},</li>
            <li>{car.year}</li>
          </ul>
          <ul className={css.characteristics}>
            <li className={css.characteristicsItem}>
              {car.address.split(',').slice(1, 2).join(' ')}
            </li>
            <li className={css.characteristicsItem}>
              {car.address.split(',').slice(2, 3).join(' ')}
            </li>
            <li className={css.characteristicsItem}>Id: {car.id}</li>
            <li className={css.characteristicsItem}>Year: {car.year}</li>
            <li className={css.characteristicsItem}>Type: {car.type}</li>
          </ul>
          <ul className={css.characteristics}>
            <li className={css.characteristicsItem}>
              Fuel Consumption: {car.fuelConsumption}
            </li>
            <li className={css.characteristicsItem}>
              Engine Size: {car.engineSize}
            </li>
          </ul>

          <p className={css.description}>{car.description} </p>
          <p className={css.title}>Accessories and functionalities:</p>
          <div>
            <ul className={css.characteristics}>
              {car.accessories.map(el => (
                <li className={css.characteristicsItem} key={nanoid()}>
                  {el}
                </li>
              ))}
            </ul>
            <ul className={css.characteristics}>
              {car.functionalities.map(el => (
                <li className={css.characteristicsItem} key={nanoid()}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <p className={css.title}>Rental Conditions: </p>
          <ul className={css.conditionsList}>
            <li className={css.conditionsItem}>
              Minimum age:{' '}
              <span className={css.colorNum}>
                {car.rentalConditions.match(/\d/g)}
              </span>
            </li>
            {car.rentalConditions
              .split('\n')
              .slice(1)
              .map(el => (
                <li className={css.conditionsItem} key={nanoid()}>
                  {el}
                </li>
              ))}
          </ul>
          <ul className={css.conditionsList}>
            <li className={css.conditionsItem}>
              Mileage:{' '}
              <span className={css.colorNum}>
                {car.mileage.toLocaleString('en-US')}
              </span>
            </li>
            <li className={css.conditionsItem}>
              Price:{' '}
              <span className={css.colorNum}>
                {car.rentalPrice.match(/\d/g)}$
              </span>
            </li>
          </ul>
          <a className={css.btnRentalCar} href="tel: +380730000000">
            Rental car
          </a>
          <button
            className={css.closeBtn}
            type="button"
            onClick={handleCloseBtn}
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
