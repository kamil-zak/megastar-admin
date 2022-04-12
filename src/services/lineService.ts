import ENDPOINTS from 'constants/endpoints';
import { ILine, ILineInfo } from 'interfaces/line';
import { IMoveDetails } from 'interfaces/common';
import api from './api';

const lineService = {
  async getAll() {
    const params = { fields: '_id,entry,destination' };
    const { data } = await api.get<ILineInfo[]>(ENDPOINTS.LINES, { params });
    return data;
  },
  async getOne(id: string) {
    const { data } = await api.get<ILine>(`${ENDPOINTS.LINES}/${id}`);
    return data;
  },
  async remove(id: string) {
    await api.delete(`${ENDPOINTS.LINES}/${id}`);
  },
  async save(line: ILine) {
    const { data } = line._id
      ? await api.put<ILine>(`${ENDPOINTS.LINES}/${line._id}`, line)
      : await api.post<ILine>(ENDPOINTS.LINES, line);
    return data;
  },
  async move(details: IMoveDetails) {
    await api.post(`${ENDPOINTS.LINES}/move`, details);
  },
};

export default lineService;
