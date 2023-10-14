import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../lib/spotify";

const clientCredentials: {
  clientId: string;
  clientSecret: string;
  authorization: string;
} = {
  clientId: String(process.env.SPOTIFY_ID),
  clientSecret: String(process.env.SPOTIFY_SECRET),
  authorization: LOGIN_URL,
};
const refreshAccessToken = async (token: any) => {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccess Error",
    };
  }
};
export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    SpotifyProvider(clientCredentials),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({
      token,
      account,
      user,
    }: {
      token: any;
      account: any;
      user: any;
    }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        };
      }
      if (Date.now() < token.accessTokenExpires) {
        console.log("Token still valid");

        return token;
      }
      console.log("Token expired");
      refreshAccessToken(token);
    },
  },
};

export default NextAuth(authOptions);
