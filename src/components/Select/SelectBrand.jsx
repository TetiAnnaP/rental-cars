import Select from 'react-select';
import makes from './makes.json';

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

const SelectBrand = ({ getValue }) => {
  const handleSelectedOption = ({ value }) => {
    getValue(value);
  };

  return (
    <div className="App">
      <Select
        placeholder="Enter the text"
        onChange={handleSelectedOption}
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,

            paddingLeft: '18px',
            marginTop: '8px',
            marginRight: '18px',
            height: '48px',
            width: '224px',
            border: 'none',
            borderRadius: '14px',
            backgroundColor: '#f7f7fb',
            fontWeight: '500',
            fontSize: '18px',
            outline: 'none',
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isFocused ? '#121417' : '#D0D0D1',
            backgroundColor: '#FFFFFF',
            fontWeight: '500',
            fontSize: '16px',
            marginBottom: '8px',
          }),
        }}
      />
    </div>
  );
};

export default SelectBrand;
