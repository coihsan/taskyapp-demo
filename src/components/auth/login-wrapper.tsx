"use client";

import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeftIcons } from "../icons/arrow-left";
import Logo from "../global/logo";
import SocialAuth from "./social-auth";
import BackButton from "../global/back-button";

interface LoginWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerDescription: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const LoginWrapper = ({
  children,
  headerLabel,
  headerDescription,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: LoginWrapperProps) => {
  return (
    <Fragment>
      <Button variant={"link"}>
        <Link className="flex items-center gap-2 mb-3" href={"/"}>
          <ArrowLeftIcons />
          <span>Back</span>
        </Link>
      </Button>
      <Card>
        <CardHeader className="w-full flex flex-col gap-y-4 items-center">
          <Logo />
          <div className="mt-4">
            <h1 className="text-2xl font-semibold">{headerLabel}</h1>
            <p className="text-muted-foreground text-sm">{headerDescription}</p>
          </div>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <p className="flex items-center mb-3 gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">or</p>
        {showSocial && (
          <CardFooter>
            <SocialAuth />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton href={backButtonHref} label={backButtonLabel} />
        </CardFooter>
      </Card>
    </Fragment>
  );
};

export default LoginWrapper;
