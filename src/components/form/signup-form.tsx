"use client"
import LoginWrapper from "../auth/login-wrapper";
import { Form, FormField, FormLabel, FormControl, FormItem, FormMessage} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { SignupSchema } from "@/lib/schema";
import { SignupAction } from "@/lib/action/login";
import {FromAuthError, FormAuthSuccess} from "@/components/auth/auth-control";

const SignupForm = () =>{
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof SignupSchema>>({
        mode: "onChange",
        resolver: zodResolver(SignupSchema),
        defaultValues: {
          full_name: "",
          email_user: "",
          password: "",
        },
      });
    const onSubmit = (values : z.infer<typeof SignupSchema>) => {
        startTransition(() =>{
            SignupAction(values)
            .then(data => {
                setSuccess(data.success)
                setError(data.error)
            })
            .catch(error => {
                setError(error)
            })
        })
}
  return(
    <LoginWrapper
    headerDescription="Enter your information to create an account"
    headerLabel="Create an Account"
    backButtonLabel="Already have an account?"
    backButtonHref="/sign-in"
    showSocial>
      <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4">
            <div className="space-y-4">
                <FormField
                    control={form.control}
                    name="full_name"
                    disabled={isPending}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="achonk" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email_user"
                    disabled={isPending}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="your@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    disabled={isPending}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <FromAuthError message={error} />
            <FormAuthSuccess message={success} />
            <Button className="w-full" variant={'default'} type="submit">
                Create an account
            </Button>
        </form>
      </Form>
    </LoginWrapper>
  )
}

export default SignupForm