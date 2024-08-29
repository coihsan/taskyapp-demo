import { SignInButton } from "@/components/auth/auth-components";
import Logo from "@/components/global/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  headerLabel: string;
  headerDescription: string;
  backButtonLabel: string;
  backButtonHref: string;
};

const AuthWrapper = ({
  children,
  headerLabel,
  headerDescription,
  backButtonLabel,
  backButtonHref,
}: Props) => {
    
  return (
    <Card className="CardStyle max-w-[400px] w-full">
      <CardHeader>
        <Logo />
        <CardTitle className="text-2xl font-semibold">{headerLabel}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">{children}</CardContent>
      <CardContent>
      <span className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
        or
      </span>
      </CardContent>
      <CardFooter className="flex items-center space-x-2">
        <SignInButton provider="google" />
        <SignInButton provider="github" />
      </CardFooter>
      <CardFooter>
        <Button variant={"link"} className="font-normal w-full">
          <Link href={backButtonHref}>{backButtonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AuthWrapper;
