import axios from "axios";
import { useGlobalStore } from "@/store/global";
import { Language } from "@/languages/en";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.request.use((config) => {
  const store = useGlobalStore();
  store.addLoading();
  store.clearError();
  return config;
});

http.interceptors.response.use(
  (response) => {
    const store = useGlobalStore();
    store.removeLoading();
    return response;
  },
  (err) => {
    const store = useGlobalStore();
    store.removeLoading();
    const message =
      err.response?.data?.message ??
      err.response?.data?.error ??
      err.message ??
      Language.ERROR;
    store.setError(typeof message === "string" ? message : String(message));
    return Promise.reject(err);
  },
);
