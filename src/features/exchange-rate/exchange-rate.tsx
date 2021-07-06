import React, { FC, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Currency } from '../../reducers/currency/currency.types';
import { Currency as CurrencyComponent } from '../../components/currency';
import { toLocaleNumberDisplay } from '../../utils/display';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 300,
    },
  }),
);

export const  ExchangeRateFeature : FC = () => {
  const classes = useStyles();

  const [amount, setAmount] = useState<number>(0);
  const [targetCurrency, setTargetCurrency] = useState<Currency>();
  const [targetAmount, setTargetAmount] = useState<number>(0);

  const onAmountChange = (event :  React.ChangeEvent<HTMLInputElement>) => {
    const newAmount =  Number(event.target.value); 
    setAmount(newAmount);
  }

  const onCurrencyChange = (currency? : Currency) => {
    setTargetCurrency(currency);
  };

  const currencyComponentProps = { 
    onChange: onCurrencyChange
  };

   useEffect(() => {
    targetCurrency && setTargetAmount( amount * targetCurrency.conversionRate);
   }, [amount, targetCurrency]);
  

  return (
    <div>
       <FormControl className={classes.formControl}>
          <TextField id="input-amount" label="Amount" onChange={ onAmountChange } />
          <CurrencyComponent {...currencyComponentProps} />
           <TextField id="result-amount" label="Converted Amount" value =  {toLocaleNumberDisplay(targetAmount)}/>
        </FormControl>
       
    </div>
  );
}