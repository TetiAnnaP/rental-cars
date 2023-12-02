import css from './CarList.module.css';
import { getCars } from '../services/services';
import { useEffect, useState } from 'react';
import Favorite from 'components/Favorite/Favorite';
import templCar from '../../images/Templ.png';

const CarList = () => {
  const [carsList, setCarsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCars();
        console.log(data);
        setCarsList(data);
      } catch (error) {
        // console.log(error.message);
        setError(error.massage);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={css.container}>
        <ul></ul>

        {carsList.map(car => (
          <li key={car.id}>
            <div className={css.thumb}>
              <div>
                <img
                  className={css.img}
                  src={car.img}
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

              <button className={css.buttonLearnMore} type="submit">
                Learn more
              </button>
            </div>
          </li>
        ))}
      </div>
      <button className={css.btnLoadMore} type="submit">
        Load more
      </button>
    </>
  );
};

export default CarList;
