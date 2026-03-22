import api from "../services/api";

export const getAlbums = () => api.get("albums/");

export const getAlbumDetail = (slug: string) =>
  api.get(`albums/${slug}/`);

export const createAlbum = (data: any) =>
  api.post("albums/", data);

export const updateAlbum = (id: number, data: any) =>
  api.put(`albums/${id}/`, data);

export const deleteAlbum = (id: number) =>
  api.delete(`albums/${id}/`);