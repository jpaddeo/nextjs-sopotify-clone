import SpotifyWebApi from 'spotify-web-api-node';

const SCOPES = [
  'user-read-email',
  'user-read-private',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-read-recently-played',
  'user-library-read',
  // 'user-library-modify',
  'user-top-read',
  'user-modify-playback-state',
  'user-follow-read',
  'playlist-read-private',
  'playlist-read-collaborative',
  'streaming',
].join(',');

const params = {
  scopes: SCOPES,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
