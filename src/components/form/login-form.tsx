"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import LoginWrapper from "../auth/login-wrapper";
import { LoginSchema } from "@/lib/schema";
import { loginAction } from "@/lib/action/login";
import Loading from "../global/loading";
import { FromAuthError } from "../auth/form-auth-error";
import { FormAuthSuccess } from "../auth/form-auth-success";

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email_user: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      loginAction(values)
        .then((data) => {
          setError(data?.error);
        })
        .catch((error) => {
          setError(error);
        });
    });
  };

  return (
    <>
      <LoginWrapper
        headerDescription="Enter your email below to login to your account"
        headerLabel="Access your account"
        backButtonLabel="Don't have an account?"
        backButtonHref="/sign-up"
        showSocial
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
              <FormField
                control={form.control}
                disabled={isPending}
                name="email_user"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                disabled={isPending}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FromAuthError message={error} />
            <FormAuthSuccess message={success} />
            <Button className="w-full flex items-center justify-center gap-2" variant={"default"} type="submit">
              {isPending ? (
                <>
                  <Loading /> Login...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>
      </LoginWrapper>
    </>
  );
};
export default LoginForm;
