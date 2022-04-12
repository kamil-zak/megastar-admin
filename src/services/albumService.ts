import ENDPOINTS from 'constants/endpoints';
import { IAlbum, IAlbumInfo, IUploadResponse } from 'interfaces/album';
import cacheImage from 'utils/cacheImage';
import { IMoveDetails } from 'interfaces/common';
import api from './api';
import { getThumbUrl } from 'constants/routes';

const albumService = {
  async getAll() {
    const params = {};
    const { data } = await api.get<IAlbumInfo[]>(ENDPOINTS.ALBUMS, { params });
    return data;
  },
  async getOne(id: string) {
    const { data } = await api.get<IAlbum>(`${ENDPOINTS.ALBUMS}/${id}`);
    return data;
  },
  async remove(id: string) {
    await api.delete(`${ENDPOINTS.ALBUMS}/${id}`);
  },
  async save(album: IAlbum) {
    const { data } = album._id
      ? await api.put<IAlbum>(`${ENDPOINTS.ALBUMS}/${album._id}`, album)
      : await api.post<IAlbum>(ENDPOINTS.ALBUMS, album);
    return data;
  },
  async move(details: IMoveDetails) {
    await api.post(`${ENDPOINTS.ALBUMS}/move`, details);
  },
  async upload(image: File, signal: AbortSignal) {
    const imageFormData = new FormData();
    imageFormData.append('image', image);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      signal,
    };

    const response = await api.post<IUploadResponse>(`${ENDPOINTS.ALBUMS}/upload`, imageFormData, config);
    const filename = response.data.filename;
    await cacheImage(getThumbUrl(filename));
    return filename;
  },
};

export default albumService;
