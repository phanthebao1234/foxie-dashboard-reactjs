import { BaseModel } from "../common/base.type";
import { Category } from "../category/category.type";
import { Album } from "../album/album.type";

export interface ServicePackage extends BaseModel {
  name: string;
  slug: string;
  price: number;

  category: Category;

  description?: string;
  background_image?: string;

  albums: Album[];

  is_active: boolean;
}

export interface ServicePackageList {
  id: number;
  name: string;
  slug: string;
  price: number;
  background_image?: string;
}

export interface ServicePackagePayload {
  name: string;
  slug?: string;
  price: number;
  category: number;

  description?: string;
  background_image?: File | string;

  albums?: number[];

  is_active?: boolean;
}