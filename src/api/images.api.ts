import api from "../services/api";

export const getImages = () => api.get("images/");

export const uploadImage = (data: FormData) =>
  api.post("images/", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteImage = (id: number) =>
  api.delete(`images/${id}/`);