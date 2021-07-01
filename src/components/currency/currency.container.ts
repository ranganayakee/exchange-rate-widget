import { connect } from 'react-redux';
import { RootState } from '../../reducers/root.reducer';
import { AppDispatch } from '../../reducers/store';
import {
    getCurrencies,
} from '../../reducers/currency/currency.slice';
import {
    CurrencyProps,
    CurrencyActionProps
} from './currency.component';
import CurrencyComponent from './currency.component';

const mapStateToProps = (state: RootState): CurrencyProps => ({
    items: state.currencies.collection.items
});

const mapDispatchToProps = (dispatch: AppDispatch): CurrencyActionProps => ({
    onLoad: () => dispatch(getCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyComponent);
