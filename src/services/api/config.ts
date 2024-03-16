import axios, { AxiosResponse } from "axios";

export const onResponse = <T>(response: AxiosResponse<T>) => {
  return {
    ...response,
    total: response.headers["x-total-count"] ? parseInt(response.headers["x-total-count"]) : 0,
  };
};

const clientApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

clientApi.interceptors.response.use(onResponse);

export { clientApi };
