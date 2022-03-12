import jwt from 'jwt-decode';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {authenticate} from '@services/auth';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials) {
          try {
            const {token, user} = await authenticate(credentials);
            if (token) {
              return {
                id: user.id,
                firstName: user.firstName,
                email: credentials.email,
                token,
              };
            }
          } catch (error) {
            return null;
          }
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,

  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 60 * 60 * 24, // 24 hours
  },

  jwt: {
    secret: process.env.AUTH_SECRET,
  },

  callbacks: {
    async jwt({token, user}) {
      user && (token.user = user);
      return token;
    },
    async session({session, token}) {
      const {expires} = session;
      session = {
        expires: expires,
        ...(token.user as {
          id: number;
          firstName: string;
          email: string;
          token: string;
          expires: string;
        }),
      };

      session.expires = session.expires;

      return session;
    },
  },
});
