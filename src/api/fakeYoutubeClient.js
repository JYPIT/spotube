import axios from 'axios';

export default class FakeYoutubeClient {
  consotructor() {}
  async search() {
    return axios.get('/data/search.json');
  }
  async allSports() {
    return axios.get('/data/sports.json');
  }
  async related() {
    return axios.get('/data/related.json');
  }
  async channel() {
    return axios.get('/data/channel.json');
  }
}
