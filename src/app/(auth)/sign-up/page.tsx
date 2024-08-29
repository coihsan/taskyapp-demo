import SignupForm from "@/components/form/signup-form"
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
import AuthWrapper from "@/components/auth/auth-wrapper"

const SignUpPage = () =>{
    return(
        <AuthWrapper
        headerDescription="Welcome! Please fill in the details to get started."
        headerLabel="Create an Account"
        backButtonLabel="Already have an account?"
        backButtonHref="/sign-in"
        >
            <SignupForm />
        </AuthWrapper>
    )
}
export default SignUpPage