import { signIn } from "@/lib/server/auth"
import { Button } from "../ui/button"
import { RiGoogleFill } from "../icons/googleIcons"
import { RiGithubFill } from "../icons/githubicons"
import { redirect } from "next/navigation"

type Props = {
    provider: 'google' | 'github',
}

export function SignInButton({
    provider,
  }: Props & React.ComponentPropsWithRef<typeof Button>) {

    return (
      <form
      className="max-w-[400px] w-full"
        action={async () => {
          "use server"
          await signIn(provider)
          redirect("/app")
        }}
      >
        <Button size={'lg'} type="submit" variant={'default'} className="flex items-center justify-center gap-2 w-full">
            {provider === 'google' ? <RiGoogleFill /> : <RiGithubFill />}
            {provider === 'google' ? 'Sign In with Google' : 'Sign In with GitHub'}
        </Button>
      </form>
    )
  }