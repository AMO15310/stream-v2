import SpotifyWebApi from "spotify-web-api-node";
const scopes: string = [
  "user-read-email",
  "playlist-read-private",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join();

const params = {
  scope: scopes,
};
const queryParamString = new URLSearchParams(params);
const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_SECRET_KEY,
});

export default spotifyApi;
export { LOGIN_URL };
