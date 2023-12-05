import { useSelector } from 'react-redux';
import css from './Modal.module.css';
import templCar from '../../images/templ.png';
import { selectCarById } from 'redux/rootReducer';
import { nanoid } from 'nanoid';

const Modal = () => {
  const car = useSelector(selectCarById)[0];

  return (
    <>
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
              Mileage: <span className={css.colorNum}>{car.mileage}</span>
            </li>
            <li className={css.conditionsItem}>
              Price: <span className={css.colorNum}>{car.rentalPrice}</span>
            </li>
          </ul>
          <button className={css.btnRentalCar} type="button">
            Rental car
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
