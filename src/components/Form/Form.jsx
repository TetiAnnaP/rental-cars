import css from './Form.module.css';

const Form = () => {
  return (
    <form className={css.form}>
      <label className={css.label}>
        Car brand
        <input
          className={`${css.input} ${css.brand}`}
          type="text"
          name="brand"
          placeholder="Enter the text"
        ></input>
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
