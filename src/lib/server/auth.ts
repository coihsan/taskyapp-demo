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
    signIn: async ({ account, profile, user }) => {
      if (account?.provider === "credentials") {
        const user = await db.user.findUnique({ 
          where: { email_user: profile?.email as string } 
        })
        if (user) {
          return true
        } else {
          return false
        }
      } else if (account?.provider === "github") {
        try {
          const existingUser = await db.user.findUnique({
            where: { email_user: profile?.email as string },
          });

          if (!existingUser) {
            await db.user.create({
              data: {
                email_user: profile?.email as string,
                full_name: profile?.name as string,
                imageUrl: profile?.picture
              },
            });
          }
          return true;
        } catch (error) {
          console.error("Error creating user:", error);
          return false;
        }
      } else if (account?.provider === "google") {
        const response = await db.user.findUnique({
          where: { email_user: profile?.email as string },
        })
        if(!response) {
          await db.user.create({
            data: {
              email_user: profile?.email as string,
              full_name: profile?.name as string,
              imageUrl: profile?.picture
            }
          })
        }
        return true
      }
      return false 
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
  },
  ...authConfig,
})
