import { AnimeListRoot } from '../interfaces/updates.interface';
import { ScheduleType } from '../types/schedule.type';
import { QueryInterface } from './../interfaces/query.interface';
import axios from 'axios';

class AnimeService {
  private URL = 'https://api.anilibria.tv/v3';

  async getUpdates({
    limit,
    playlist_type = 'array',
    items_per_page,
    page,
  }: QueryInterface) {
    return axios.get<AnimeListRoot>(
      `${this.URL}/title/updates?playlist_type=${playlist_type}${
        limit ? `&limit=${limit}` : ''
      }${items_per_page ? `&items_per_page=${items_per_page}` : ''}${
        page ? `&page=${page}` : ''
      }`,
    );
  }

  async getSchedule() {
    return axios.get<ScheduleType>(`${this.URL}/title/schedule`);
  }
}

export default new AnimeService();
