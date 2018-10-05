// @flow
import fetch from 'isomorphic-fetch';
import endpoints from './endpoints';


export function setup(apiKey: string, baseUrl: string): Object {
  const resolvedApiKey = apiKey || process.env.THE_MOVIE_DB_API_KEY || false;
  const resolvedBaseUrl = baseUrl
                          || process.env.THE_MOVIE_DB_BASE_URL
                          || endpoints.base_url;

  if (!resolvedApiKey) {
    throw new Error('themoviedb setup: API key is a required paramater');
  }

  return {
    API_KEY: resolvedApiKey,
    BASE_URL: resolvedBaseUrl
  };
}

export function requestToken(config: Object): Promise<string> {
  return fetch(
    `${config.base_url}${endpoints.authentication.requestToken}`
  )
    .then(res => res.json())
    .then(res => res.body);
}

export default {};
