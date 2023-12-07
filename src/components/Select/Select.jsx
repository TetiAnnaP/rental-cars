// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Select from 'react-select';
// import { selectAllCars } from 'redux/rootReducer';
// import { getAllCarsThunk } from 'thunk/thunk';

// const BrandSelect = () => {
//   const [inputValue, setInputValue] = useState('');
//   const data = useSelector(selectAllCars);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllCarsThunk());
//   }, [dispatch]);

//   const handleInputChange = e => {
//     const userValue = e.target.value;
//     setInputValue(userValue);
//   };

//   return (
//     <Select
//       options={data.make}
//       isSearchable={true}
//       inputValue={inputValue}
//       onInputChange={handleInputChange}
//     />
//   );
// };

// export default BrandSelect;
