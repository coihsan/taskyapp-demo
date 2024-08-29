import AuthWrapper from "@/components/auth/auth-wrapper"
import LoginForm from "@/components/form/login-form"

const LoginPage = () =>{
  return(
    <AuthWrapper
      headerDescription="Enter your email below to login to your account"
      headerLabel="Access your account"
      backButtonLabel="Don't have an account?"
      backButtonHref="/sign-up"
    >
      <LoginForm />
    </AuthWrapper>
  )
}

export default LoginPage