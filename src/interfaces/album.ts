export interface IUploadResponse {
  filename: string;
}

export interface IAlbumInfo {
  _id: string;
  name: string;
  photos: string[];
}

export interface IAlbum {
  _id?: string;
  name: string;
  photos: string[];
}
