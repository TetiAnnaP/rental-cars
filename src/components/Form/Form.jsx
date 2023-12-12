import { useState } from 'react';
import Select from '../Select/SelectBrand';
import css from './Form.module.css';
import { useDispatch } from 'react-redux';
import { getCarsByBrandThunk } from 'thunk/thunk';

const Form = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const getValue = value => {
    console.log(value);
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getCarsByBrandThunk(value));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Car brand
        <Select getValue={getValue} />
      </label>

      <label className={css.label}>
        Price/ 1 hour
        <input
          className={`${css.input} ${css.price}`}
          type="text"
          name="price"
          placeholder="To $"
        ></input>
      </label>
      <label className={css.label}>
        Сar mileage / km
        <input
          className={`${css.input} ${css.from}`}
          type="text"
          name="from"
          placeholder="from"
        ></input>
      </label>
      <label className={css.label}>
        <input
          className={`${css.input} ${css.to}`}
          type="text"
          name="to"
          placeholder="to"
        ></input>
      </label>

      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
