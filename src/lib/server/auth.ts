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

const createUser = async (profile: any, account: any) => {
  try {
    const user = await db.user.create({
      data: {
        full_name: profile?.name ?? "",
        username: account?.provider === "github" ? profile?.login : profile?.name,
        email_user: profile?.email,
        imageUrl: profile?.picture ?? profile?.avatar_url,
      },
    });
    return true;
  } catch (error) {
    console.error("Error creating user:", error);
    return false;
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "database"
  },
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
  callbacks: {
    async signIn({ profile, account }) {
      try {
        const user = await db.user.findUnique({
          where: {
            email_user: profile?.email as string,
          },
        });
        if (user) {
          return true;
        }
        if (!user && profile?.email) {
          if (account?.provider === "google" && !profile?.email_verified) {
            return false;
          }
          return await createUser(profile, account);
        }
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      if (user) {
        session.user = {
          ...session.user,
          id: user.id,
          email_user: user.email,
          full_name: user.name as string,
          imageUrl: user.image as string,
        };
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
        };
      }
      return token;
    }
  },
  pages: {
    signIn: "/sign-in",
    error: '/authError',
  },
  ...authConfig,
})
