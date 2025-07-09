import apiClient from "./apiClient";


export const login = (form: any) => {
  return apiClient.post(`/login`, form);
};

