import  {FC, useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { LoadingIndicator } from '../loading-indicator';
import { Currency } from '../../reducers/currency/currency.types';

export interface CurrencyProps {
  items : Currency[]
};
export interface CurrencyActionProps {
  onLoad : () => void;
  onChange? : (currency? : Currency) => void;
}

const  CurrencyComponent : FC<CurrencyActionProps & CurrencyProps> = ( {items,  onLoad, onChange}) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  
  const onSelectChange = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCurrency(event.target.value);
    const currency = items.find(i => i.key === event.target.value);
    onChange && onChange(currency);
  };


  useEffect(() => {
    onLoad();
  }, [onLoad]);
  

  return (
    <>
      <LoadingIndicator/>
      {items &&  <TextField
          id="select-currency"
          select
          label="Select Currency"
          value={selectedCurrency}
          onChange={onSelectChange}
        >
          {items.map((item) => (
            <MenuItem key={item.key} value={item.key}>
              {item.key}
            </MenuItem>
          ))}
        </TextField>
      }

    </>
  );
}
export default CurrencyComponent;

