import dotenv from 'dotenv';
import TheMovieDb from '../src';

dotenv.config();

function removeDynamicProperties(obj) {
  return {
    ...obj,
    popularity: 0,
    vote_average: 0,
    vote_count: 0
  };
}

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
    expect(removeDynamicProperties(result)).toMatchSnapshot();
  });
});
