import dotenv from 'dotenv';
import { setup } from '../src';

dotenv.config();

describe('basic', () => {
  it('should setup()', () => {
    setup(process.env.THE_MOVIE_DB_API_KEY);
  });
});
