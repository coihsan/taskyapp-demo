import { SignInButton } from "@/components/auth/auth-components"
import Logo from "@/components/global/logo"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const LoginPage = () =>{
  return(
    <Card className="CardStyle">
      <CardHeader>
        <Logo />
        <CardTitle className="text-2xl font-semibold">Login</CardTitle>
        <CardDescription>Access your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <SignInButton provider="google" />
        <SignInButton provider="github" />
      </CardContent>
    </Card>
  )
}

export default LoginPage