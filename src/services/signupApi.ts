import apiClient from "./apiClient";

export const createUser = (data: any) => {
  return apiClient.post('/register', data);
};