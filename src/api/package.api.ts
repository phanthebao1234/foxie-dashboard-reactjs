// src/api/package.api.ts
import api from "../services/api";
import { ENDPOINTS } from "../services/endpoints";

export const getPackages = () => api.get(ENDPOINTS.PACKAGE);

export const getPackageDetail = (slug: string) =>
  api.get(`${ENDPOINTS.PACKAGE}${slug}/`);