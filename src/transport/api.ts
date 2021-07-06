import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ApiRequestError {
    status: string;
    code: string;
    message: string;
}

export const parseResponse = (response: AxiosResponse<any>) => {
    if (response.status === 401)
        return { ok: false, errors: [{ message: 'unauthorized' }] };
    if (response.status === 204) return { ok: true, data: {} };

    const json = response.data.data;
    if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
    )
        return { ok: true, data: json };
    if (response.status >= 400 || response.status <= 499) {
        return { ok: false, errors: json.errors };
    }

    return { ok: true, json };
};

export const nullResponse = (data = null) => ({ ok: true, data });

//TODO: Create env variable for local dev.
const getConfig = (
    baseUrl?: string,
    params?: object
): Promise<AxiosRequestConfig> => {
    return new Promise<AxiosRequestConfig>((resolve) => {
        const axiosConfig: AxiosRequestConfig = {
            baseURL: baseUrl,
            headers: {
                Accept: 'application/json;charset=utf-8'
            },
            params
        };
        resolve(axiosConfig);
    });
};
export const get = (
    resource: string,
    params?: AxiosRequestConfig,
    baseUrl?: string
) => {
    return getConfig(baseUrl, params)
        .then((config: AxiosRequestConfig) => axios.get(resource, config))
        .then((res) => parseResponse(res))
        .catch((err) => parseResponse(err));
};

export const post = (resource: string, body: object, baseUrl?: string) => {
    return getConfig(baseUrl)
        .then((config: AxiosRequestConfig) =>
            axios.post(resource, body, config)
        )
        .then((res) => parseResponse(res))
        .catch((err) => parseResponse(err.response));
};
export const put = (resource: string, body: object, baseUrl?: string) => {
    return getConfig(baseUrl)
        .then((config: AxiosRequestConfig) => axios.put(resource, body, config))
        .then((res) => parseResponse(res))
        .catch((err) => parseResponse(err.response));
};

export const deleteResource = (resource: string, baseUrl?: string) => {
    return getConfig(baseUrl)
        .then((config: AxiosRequestConfig) => axios.delete(resource, config))
        .then((res) => parseResponse(res))
        .catch((err) => parseResponse(err.response));
};
