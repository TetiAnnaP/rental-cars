const Catalog = () => {
  return (
    <form>
      <label>
        Car brand
        <input type="text" name="brand" placeholder="Enter the text"></input>
      </label>
      <label>
        Price/ 1 hour
        <input type="text" name="price" placeholder="To $"></input>
      </label>
      <label>
        Сar mileage / km
        <input type="text" name="km-from" placeholder="from"></input>
        <input type="text" name="km-to" placeholder="to"></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Catalog;
