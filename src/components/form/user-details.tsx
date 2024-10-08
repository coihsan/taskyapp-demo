"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { getAuthUserDetails, initUser, updateUser } from "@/lib/action/user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { DetailsUserProfileSchema } from "@/lib/schema";
import { useState, useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useModal } from "@/providers/modal-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { z } from "zod";

type Props = {
  userData?: Partial<User>;
};
const UserDetails = ({ userData }: Props) => {
  const [changes, setChanges] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { setClose } = useModal();

  const form = useForm<z.infer<typeof DetailsUserProfileSchema>>({
    resolver: zodResolver(DetailsUserProfileSchema),
    mode: "onChange",
    defaultValues: {
      name: userData?.name || undefined,
      username: userData?.username || undefined,
      email: userData?.email,
      imageUrl: userData?.image || undefined,
      bio: userData?.bio || undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof DetailsUserProfileSchema>) => {
    try {
      const updatedUser = await initUser({
        name: values.name,
        username: values.username,
        email: values.email,
        image: values.imageUrl,
        bio: values.bio,
      });
      startTransition(() => {
        if (updatedUser) {
          toast({
            title: "Profile Updated",
            description: "Profile updated successfully",
          });
          setClose();
        }
      });
    } catch (error) {}
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photo</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usernama</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {changes && <Button>Save</Button>}
        </form>
      </Form>
    </>
  );
};

export default UserDetails;
