// src/api/clothing.api.ts
import api from "../services/api";
import { ENDPOINTS } from "../services/endpoints";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getClothings = (params?: any) =>
  api.get(ENDPOINTS.CLOTHING, { params });

export const getClothingCategories = () =>
  api.get(ENDPOINTS.CLOTHING_CATEGORY);