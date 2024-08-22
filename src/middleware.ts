export { auth as middleware } from "@/lib/server/auth"
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import NextAuth from "next-auth"
import { 
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT
 } from "../routes"
import authConfig from "./lib/config /auth.config";

 const { auth } = NextAuth(authConfig)

export default auth((req, res) => {
  const user = auth();
  const url = req.nextUrl;
  const searchParams = url.searchParams.toString();
  let hostname = req.headers.get("host");

  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // rewrites for app pages
  // if(url.pathname === '/app'){
  //   if(user){
  //     const newPathname = path.replace(/^\/app/, "");
  //     return NextResponse.rewrite(
  //       new URL(`/app${newPathname}`, req.url),
  //     );
  //   }
  // };

  // if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
  //   return NextResponse.redirect(new URL(`/app/sign-in`, req.url))
  // }


  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // TODO : add `vercel.pub` domain
  if (hostname === "vercel.pub") {
    return NextResponse.redirect(
      "https://vercel.com/blog/platforms-starter-kit",
    );
  }

  // if(url.pathname.startsWith('/workspace')){
  //   return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))
  // }

});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
