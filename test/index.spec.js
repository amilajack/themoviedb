import dotenv from 'dotenv';
import TheMovieDb from '../src';

dotenv.config();

describe('basic', () => {
  let db;

  beforeEach(() => {
    db = new TheMovieDb();
  });

  it('should setup()', async () => {
    const { results } = await db.moviePopular();
    const [item] = results;
    expect(item.vote_count).toBeTruthy();
    expect(item.title).toBeTruthy();
    expect(results.length).toBeGreaterThanOrEqual(10);
  });

  it('should get movie info', async () => {
    const result = await db.movieInfo({ id: 550 });
    expect(result).toMatchSnapshot({
      poster_path: expect.any(String),
      production_companies: expect.any(Array),
      backdrop_path: expect.any(String),
      popularity: expect.any(Number),
      vote_average: expect.any(Number),
      vote_count: expect.any(Number)
    });
  });
});
