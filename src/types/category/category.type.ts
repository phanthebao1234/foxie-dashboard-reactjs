import { BaseModel } from "../common/base.type";
import { Album } from "../album/album.type";

export interface Category extends BaseModel {
  name: string;
  slug: string;
  cover_image?: string;
  description?: string;
  is_active: boolean;
  albums: Album[];
}

export interface CategoryPayload {
  name: string;
  slug?: string;
  cover_image?: File | string;
  description?: string;
  is_active?: boolean;
}