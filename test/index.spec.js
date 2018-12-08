import dotenv from 'dotenv';
import OpenVpn from '../src';

dotenv.config();

describe('basic', () => {
  it('should setup()', async () => {
    const vpn = new OpenVpn();
    const { results } = await vpn.miscPopularMovies();
    const [item] = results;
    expect(item.vote_count).toBeTruthy();
    expect(item.title).toBeTruthy();
    expect(results.length).toBeGreaterThanOrEqual(10);
  });
});
