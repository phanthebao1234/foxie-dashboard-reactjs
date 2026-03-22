import { BaseModel } from "../common/base.type";
import { Image } from "../image/image.type";

export interface Album extends BaseModel {
  name: string;
  slug: string;
  cover_image?: string;
  description?: string;
  is_active?: boolean;
  is_public?: boolean;
  images: Image[];
}

export interface AlbumPayload {
  name: string;
  slug?: string;
  cover_image?: File | string;
  description?: string;
  is_active?: boolean;
  is_public?: boolean;
}