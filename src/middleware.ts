export { auth as middleware } from "@/lib/server/auth"
import NextAuth from "next-auth"
import { 
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT
 } from "../routes"
import authConfig from "./lib/config /auth.config";

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  console.log(isLoggedIn)

  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoutes){
    return null
  }

  if (isAuthRoutes){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null
  }

  if(!isLoggedIn && !isPublicRoutes){
    return Response.redirect(new URL("/sign-in", nextUrl))
  }
  return null

});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
