import axios from 'axios';

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async search(params) {
    return this.httpClient.get('search', params);
  }
  async allSports(params) {
    return this.httpClient.get('search', params);
  }
  async related(params) {
    return this.httpClient.get('search', params);
  }
  async channel(params) {
    return this.httpClient.get('channel', params);
  }
}
