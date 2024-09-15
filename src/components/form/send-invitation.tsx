"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useTransition } from "react";
import { useToast } from "../ui/use-toast";
import { useModal } from "@/providers/modal-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { userDataSchema } from "@/lib/schema";
import {
  saveActivityLogsNotification,
  sendInvitation,
} from "@/lib/action/workspace";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loading from "../global/loading";

type Props = {
  workspaceid: string;
};

const SendInvitation: React.FC<Props> = ({ workspaceid }) => {
  const { toast } = useToast();
  const { setClose } = useModal();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof userDataSchema>>({
    resolver: zodResolver(userDataSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      role: "USER",
    },
  });

  const onSubmit = async (values: z.infer<typeof userDataSchema>) => {
    try {
      const response = await sendInvitation(
        values.role,
        values.email,
        workspaceid
      );
      startTransition(async () => {
        if (response) {
          await saveActivityLogsNotification({
            workspaceId: workspaceid,
            message: `Invited ${response.email}`,
          });
          toast({
            variant: "destructive",
            title: "Invitation Sent",
            description: "Invitation sent successfully",
          });
          setClose();
        }
      });
      return response;
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          disabled={form.formState.isSubmitting}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={form.formState.isSubmitting}
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>User role</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(value)}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="flex items-start [&_[data-description]]:hidden">
                    <SelectValue placeholder="Select user role..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="VIEW">
                    <div className="grid gap-0.5">
                      <h3>View</h3>
                      <p
                        className="text-xs text-muted-foreground"
                        data-description
                      >
                        Only view and comment
                      </p>
                    </div>
                  </SelectItem>
                  <SelectItem value="USER">
                    <div className="grid gap-0.5">
                      <h3>User</h3>
                      <p
                        className="text-xs text-muted-foreground"
                        data-description
                      >
                        Can view, comment and edit
                      </p>
                    </div>
                  </SelectItem>
                  <SelectItem value="ADMIN">
                    <div className="grid gap-0.5">
                      <h3>Admin</h3>
                      <p
                        className="text-xs text-muted-foreground"
                        data-description
                      >
                        Admin level access to all resource
                      </p>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit" variant={"default"}>
          {isPending ? <Loading /> : "Send"}
        </Button>
      </form>
    </Form>
  );
};
export default SendInvitation;
