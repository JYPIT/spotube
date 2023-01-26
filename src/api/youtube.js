export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#allSports();
  }

  async related(id) {
    return id ? this.#related(id) : null;
  }

  async channelImage(id) {
    return this.apiClient
      .channel({ params: { part: 'snippet', id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          regionCode: 'KR',
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #allSports() {
    return this.apiClient
      .allSports({
        params: {
          part: 'snippet',
          maxResults: 25,
          regionCode: 'KR',
          type: 'video',
          q: '경기 하이라이트',
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          regionCode: 'KR',
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
  async #related(id) {
    return this.apiClient
      .related({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          regionCode: 'KR',
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
}
