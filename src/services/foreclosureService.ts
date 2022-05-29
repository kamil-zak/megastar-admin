import ENDPOINTS from 'constants/endpoints';
import { IForeclosure, IForeclosureInfo } from 'interfaces/foreclosure';
import { IMoveDetails } from 'interfaces/common';
import api from './api';

const foreclosureService = {
  async getAll() {
    const params = { fields: '_id,symbol,description' };
    const { data } = await api.get<IForeclosureInfo[]>(ENDPOINTS.FORECLOSURES, { params });
    return data;
  },
  async getOne(id: string) {
    const { data } = await api.get<IForeclosure>(`${ENDPOINTS.FORECLOSURES}/${id}`);
    return data;
  },
  async remove(id: string) {
    await api.delete(`${ENDPOINTS.FORECLOSURES}/${id}`);
  },
  async save(foreclosure: IForeclosure) {
    const { data } = foreclosure._id
      ? await api.put<IForeclosure>(`${ENDPOINTS.FORECLOSURES}/${foreclosure._id}`, foreclosure)
      : await api.post<IForeclosure>(ENDPOINTS.FORECLOSURES, foreclosure);
    return data;
  },
  async move(details: IMoveDetails) {
    await api.post(`${ENDPOINTS.FORECLOSURES}/move`, details);
  },
};

export default foreclosureService;
