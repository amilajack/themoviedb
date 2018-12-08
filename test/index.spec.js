import dotenv from 'dotenv';
import OpenVpn from '../src';

dotenv.config();

describe('basic', () => {
  it('should setup()', async () => {
    const vpn = new OpenVpn();
    // console.log(vpn);
    const popular = await vpn.miscPopularMovies();
    expect(popular).toMatchSnapshot();
  });
});
