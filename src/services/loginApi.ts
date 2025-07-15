import apiClient from "./apiClient";


export const signIn = (form: any) => {
  const response:any = apiClient.post(`/login`, form);
  return response;
};

