import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handlers = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET ?? "",
      httpOptions: {
        timeout: 40000,
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accesToken = account.access_token;
      }

      return token;
    },

    async session({ session, token, user }) {
      session.accesToken = token.accesToken;

      return session;
    },
  },
});

export { handlers as GET, handlers as POST };
