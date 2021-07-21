import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://qa-interview-test.splytech.dev",
});

export const api = {
  get(url: string, params: Record<string, any>) {
    return axiosInstance.get(url, { params });
  },
};
