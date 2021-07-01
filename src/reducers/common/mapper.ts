import { BaseCollection } from "./types";

export const toBaseCollection = <T>(
    dto: any
): Omit<BaseCollection<T>, 'items'> => {
    if (!dto) return {} as BaseCollection<T>;

    const baseCollection = {
        base_code: dto.base_code,
        documentation: dto.documentation,
        provider: dto.provider,
        result: dto.result,
        terms_of_use: dto.terms_of_use,

        time_last_update_unix: dto.time_last_update_unix,
        time_next_update_unix: dto.time_next_update_unix,
        time_eol_unix: dto.time_eol_unix,

        time_last_update_utc: new Date(dto.time_last_update_utc),
        time_next_update_utc: new Date(dto.time_next_update_utc),
    }
    return baseCollection;
};
