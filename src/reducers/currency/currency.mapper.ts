import { toBaseCollection } from '../common/mapper';
import { defaultCurrencyCollection } from './currency.defaults.types';
import { Currency, CurrencyCollection } from './currency.types';

export const toCurrencyCollection = (dto: any): CurrencyCollection => {
    if (!dto) return { ...defaultCurrencyCollection };

    let baseCollection = toBaseCollection(dto);

    const currencyCollection: CurrencyCollection = {
        ...baseCollection,
        items: toCurrencyItems(dto)
    };

    return currencyCollection;
};

const toCurrencyItems = (dto: any) => Object.entries(dto.rates).map(r => toCurrency({ key: r[0], value: r[1] }));

const toCurrency = (dto: any): Currency => ({
    key: dto.key,
    conversionRate: dto.value
});
