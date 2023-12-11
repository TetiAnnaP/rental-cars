import Select from 'react-select';
import makes from './makes.json';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCarsByBrandThunk } from 'thunk/thunk';

const allOption = {
  value: 'all',
  label: 'All',
};

const options = [
  allOption,
  ...makes.map(brand => ({
    value: brand,
    label: brand,
  })),
];

const SelectBrand = () => {
  //   const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const handleSelectedOption = ({ value }) => {
    console.log(value);
    dispatch(getCarsByBrandThunk(value));
  };

  return (
    <div className="App">
      {console.log(options)}
      <Select
        placeholder="Enter the text"
        // defaultValue={selectedOption}
        onChange={handleSelectedOption}
        options={options}
      />
    </div>
  );
};

export default SelectBrand;
