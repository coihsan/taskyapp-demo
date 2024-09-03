"use client";

import React, { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateNewBoardSchema } from "@/lib/schema";
import Loading from "../global/loading";
import { createNewBoard } from "@/lib/action/projects";
import { useToast } from "../ui/use-toast";
import { useParams, useRouter } from "next/navigation";
import { useModal } from "@/providers/modal-provider";

type FormValues = z.infer<typeof CreateNewBoardSchema>;

const CreateNewBoardForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams<{ workspaceid: string; projectsid: string }>();
  const [isPending, startTransition] = useTransition();
  const { setClose } = useModal();

  const form = useForm<FormValues>({
    resolver: zodResolver(CreateNewBoardSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
    },
  });
  const onSubmit = async (values: FormValues) => {
    try {
      const response = await createNewBoard(values.title, params.projectsid);
      startTransition(() => {
        if (response) {
          toast({
            title: "Board Created",
            description: "Board created successfully",
          });
          router.refresh();
          setClose();
          router.push(
            `/app/${params.workspaceid}/projects/${params.projectsid}/board/${response.id}`
          );
        }
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Failed to create board",
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="flex items-center justify-center gap-2"
            disabled={isPending}
            variant={"default"}
            type="submit"
          >
            {isPending ? (
              <>
                <Loading /> Creating...
              </>
            ) : (
              "Create"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};
export default CreateNewBoardForm;
