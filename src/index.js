// @flow
import fetch from 'isomorphic-fetch';
import endpoints from './endpoints';

function replaceUrlParamsWithValues(url, params) {
  return url
    .replace(':id', params.id)
    .replace(':season_number', params.season_number)
    .replace(':episode_number', params.episode_number);
}

class TheMovieDb {
  API_KEY: string = '';

  BASE_URL: string = endpoints.base_url;

  constructor(args: { apiKey?: string } = {}) {
    const { apiKey } = args;
    const resolvedApiKey = apiKey || process.env.THE_MOVIE_DB_API_KEY;
    if (!resolvedApiKey) {
      throw new Error('API key is a required paramater');
    }
    this.API_KEY = resolvedApiKey;
  }

  async getRequest(urlMethod: { resource: string }, params: Object = {}) {
    const { API_KEY, BASE_URL } = this;

    const urlParams = new URLSearchParams(
      Object.entries({
        api_key: API_KEY,
        language: 'en-US',
        page: 1
      })
    ).toString();

    const url = `${replaceUrlParamsWithValues(
      `${BASE_URL}${urlMethod.resource}`,
      params
    )}?${urlParams}`;

    const result = await fetch(url).then(res => res.json());

    if (result.success === false) {
      throw new Error(result.status_message);
    }

    return result;
  }
}

Object.keys(endpoints.methods).forEach(method => {
  const met = endpoints.methods[method];
  const prototypeMethods = {};
  TheMovieDb.prototype[method] = prototypeMethods;
  Object.entries(met).forEach(([m, value]) => {
    TheMovieDb.prototype[method + m] = function theMovieDbMethod(params) {
      return this.getRequest(value, params);
    };
  });
});

export default TheMovieDb;
