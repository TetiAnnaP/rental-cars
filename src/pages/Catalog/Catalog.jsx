import css from './Catalog.module.css';
import { getCars } from '../../components/services/services';
import { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';

const Catalog = () => {
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
      <Form />

      <div className={css.container}>
        {carsList.map(car => (
          <div className={css.thumb}>
            <img
              className={css.img}
              key={car.id}
              src={car.img}
              alt={car.make}
            />
            <p className={css.makeyear}>
              {car.make}
              <span className={css.span}> {car.model} </span>, {car.year}
              <span className={css.price}>{car.rentalPrice}</span>
            </p>
            <ul className={css.accessories}>
              <li>{car.address} </li>
              <li>{car.rentalCompany}</li>
            </ul>
            <ul className={css.accessories}>
              <li>{car.type}</li>
              <li>{car.id}</li>
              <li>{car.accessories[0]}</li>
            </ul>
            <button type="submit">Learn more</button>
            <button type="submit">Heart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Catalog;
