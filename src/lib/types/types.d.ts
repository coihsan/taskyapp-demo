declare module "next-auth" {
    /**
     * The shape of the user object returned in the OAuth providers' `profile` callback,
     * or the second parameter of the `session` callback, when using a database.
     */
    interface User {}
    id: string;
    full_name: string;
    username: string;
    email_user: string;
    bio: string;
    preferences: string;
    password: string;
    imageUrl: string;
    interface: string;
   
    /**
     * Returned by `useSession`, `auth`, contains information about the active session.
     */
    interface Session {}
  }
   
  // The `JWT` interface can be found in the `next-auth/jwt` submodule
  import { JWT } from "next-auth/jwt"
import { string } from "zod"
   
  declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
      /** OpenID ID Token */
      idToken?: string
    }
  }