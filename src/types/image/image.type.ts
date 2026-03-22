import { BaseModel } from "../common/base.type";

export interface Image extends BaseModel {
  image: string;
  thumbnail?: string;
  caption?: string;
  album?: number;
}

export interface MultiImageUploadPayload {
  album: number;
  images: File[];
}