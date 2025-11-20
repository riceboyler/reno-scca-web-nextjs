import type { GalleryEventModel } from "@/db/models/GalleryEvent.model";

export type GalleryModel = GalleryEventModel & {
  ID: number;
  ThumbnailImagePath: string;
  FullSizeImagePath: string;
};
