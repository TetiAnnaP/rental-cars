import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <a className={css.phone} href="tel: +380730000000">
        +380730000000
      </a>
      <h1 className={css.title}>Car rental in Ukraine</h1>
      <h2 className={css.secondaryTitle}>Services and conditions</h2>
      <div className={css.contaiter}>
        <h3 className={css.subtitle}>Safe transportation of children</h3>
        <p className={css.text}>
          According to the Road Traffic Rules of Ukraine, transportation of
          children under 12 years of age in a car is possible only with the use
          of a special restraining device - a car seat or a car cradle. The car
          seat could be installed not only in the back, but also on the front
          seat, provided the airbag is disabled. Our company provides
          high-quality car seats of specialized brands for children from 9
          months to 12 years.
        </p>
        <h3 className={css.subtitle}>Additional driver</h3>
        <p className={css.text}>
          During the rental period, coverage is extended only to the primary
          driver in whose name the contract is issued. But you have the
          opportunity to add additional drivers to the reservation and travel
          with comfort! An additional driver must meet the same criteria as the
          main driver, namely a minimum age and at least 2 years of driving
          experience. An additional driver must be present when renting a car
          and present his driver's license and passport.
        </p>
        <h3 className={css.subtitle}>Additional insurance</h3>
        <p className={css.text}>
          If you want to reduce your liability in the event of car damage or
          theft, you have the option of purchasing an additional insurance
          package in the event of damage (SCDW) or in the event of theft (STP).
          Please ask about this service at the location before your rental
          starts. The cost of additional insurance varies depending on the class
          of the rented car.
        </p>
        <h3 className={css.subtitle}>GPS navigator</h3>
        <p className={css.text}>
          It is extremely difficult to navigate in a new city during a trip. We
          suggest adding a GPS navigator to the reservation, which will help you
          with this.
        </p>
        <h3 className={css.subtitle}>Delivery and collection of cars</h3>
        <p className={css.text}>
          Save your time with the "Car delivery and pickup" service. If
          necessary, we can deliver the car outside the city or to other cities
          of Ukraine depending on your needs. Reservations and detailed
          information are available by phone +380730000000
        </p>

        <h3 className={css.subtitle}>
          Car rental outside of working hours or on public holidays
        </h3>
        <p className={css.text}>
          We will be happy to accommodate your request and provide a service for
          delivery or collection of a rented car during non-working hours of our
          offices. The service is chargeable and requires prior agreement at the
          time of booking
        </p>

        <h3 className={css.subtitle}>Rental conditions</h3>
        <p className={css.text}>
          Basic rental conditions of the services Megarent. ua Age requirements
          for renter: - The minimum age from 21;- The driving experience from 2
          years. Required documents in original: - Passport;- A driving license,
          which is valid in the territory of Ukraine;- The identification code
          (for citizens of Ukraine). Ways of payment: - Cash;- Cashless
          payments;- Credit cards (Visa, MasterCard, Maestro).
        </p>
      </div>
      <Link to="/catalog" className={css.btn}>
        View all cars
      </Link>
    </>
  );
};

export default HomePage;
