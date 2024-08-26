import NextAuth, { type DefaultSession } from "next-auth"
import { db } from "@/lib/server/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "../config /auth.config"

declare module "next-auth" {
  interface Session {
    user: {
      email_user: string,
      id: string,
      full_name: string,
      username: string,
      imageUrl: string,
      bio: string,
    } & DefaultSession["user"]
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile }) {
      return token
    }
  },
  pages: {
    signIn: "/sign-in",
  },
  ...authConfig,
})