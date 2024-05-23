import { NextAuthOptions, User, getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials"

// NOTE this module not finished

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: Boolean;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: Boolean;
  }
}

export const authOptions: NextAuthOptions = {

  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        phone: {}
      },
      authorize: async (credentials, req) => {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        if (credentials?.phone === '123456') return user
        return null
      }
    })
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
