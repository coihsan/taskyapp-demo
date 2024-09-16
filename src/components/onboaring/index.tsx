import React from "react";
import NewWorkspaceForm from "../form/new-workspace-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OnboardingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
        <Card className="max-w-md w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold mb-2">
          Welcome to TaskyApp
        </CardTitle>
        <CardDescription className="mb-4 text-sm text-muted-foreground">
          Let's start by creating a workspace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <NewWorkspaceForm />
      </CardContent>
    </Card>
    </div>
  );
};
export default OnboardingPage;
