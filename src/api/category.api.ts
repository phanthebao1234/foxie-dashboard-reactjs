// src/api/category.api.ts
import api from "../services/api";
import { ENDPOINTS } from "../services/endpoints";

export const getCategories = () => api.get(ENDPOINTS.CATEGORY);

export const createCategory = (data: unknown) =>
  api.post(ENDPOINTS.CATEGORY, data);

export const deleteCategory = (id: number) =>
  api.delete(`${ENDPOINTS.CATEGORY}${id}/`);