import { BaseCollection } from "../common/types";

export type Currency = {
  key: string;
  conversionRate: number;
};


export interface CurrencyCollection extends BaseCollection<Currency> {
  result: string;
  provider: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: Date;
  time_next_update_unix: number;
  time_next_update_utc: Date;
  time_eol_unix: number;
  base_code: string;
  items: Currency[];
}
