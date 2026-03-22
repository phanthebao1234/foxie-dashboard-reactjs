import api from "../services/api";

export const getCategories = () => api.get("categories/");

export const getCategoryDetail = (slug: string) =>
  api.get(`categories/${slug}/`);

export const createCategory = (data: any) =>
  api.post("categories/", data);

export const updateCategory = (id: number, data: any) =>
  api.put(`categories/${id}/`, data);

export const deleteCategory = (id: number) =>
  api.delete(`categories/${id}/`);