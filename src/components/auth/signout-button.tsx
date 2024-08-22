"use server"

import { signOut } from "@/lib/server/auth"
import { Button } from "../ui/button"
 
export function SignOutButton() {
  return (
    <form
      action={async () => {
        await signOut()
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  )
}