import api from "../services/api";
import axiosClient from "./axiosClient.api";

export const getClothings = (params?: any) =>
  api.get("clothings/", { params });

export const getClothingDetail = (id: number) =>
  api.get(`clothings/${id}/`);

export const createClothing = (formData: FormData) => {
  return axiosClient.post("/clothings/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateClothing = (id: number, data: any) =>
  api.put(`clothings/${id}/`, data);

export const deleteClothing = (id: number) =>
  api.delete(`clothings/${id}/`);

export const getClothingCategories = (params?: any) =>
  api.get("clothing-categories/", { params });