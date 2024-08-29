import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "../schema";
import { getUserByEmail } from "../action/user";
import bcrypt from 'bcryptjs';

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
     async authorize(credentials) {
      const validatedFieldss = LoginSchema.safeParse(credentials) 
  
      if(validatedFieldss.success){
        const { email, password } = validatedFieldss.data
  
        const user = await getUserByEmail(email)
        if (!user || !user.password) return null
  
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (passwordMatch) return user
      }
      return null
     },
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_WEBAPP_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_WEBAPP_GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
} satisfies NextAuthConfig;