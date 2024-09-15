"use client";

import React, { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { featureOptionAction } from "@/lib/action/projects";
import { FluentAdd24Filled } from "../icons/add-24-filled";
import { useRouter } from "next/navigation";

type Props = {
  name: string;
  icon: JSX.Element;
  workspaceid: string;
  projectsid: string; 
};
const formSchema = z.object({
  name: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const CreateFeatureForm: React.FC<Props> = ({name, icon, workspaceid, projectsid}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      name: name,
    },
  });
  const onSubmit = async (values: FormValues) => {
    try {
      const response = await featureOptionAction({
        name: values.name,
        workspaceid: workspaceid,
        projectsid: projectsid
      });
      startTransition(() =>{
        if(response){
          router.refresh()
        }
      })
      

      return response
    } catch (error) {
      console.log(error)
      throw error;
    }
  };

  return (
    <Form {...form}>
      <form
      className="flex flex-col gap-2 items-center border borderStyle p-4 rounded-lg" 
      onSubmit={form.handleSubmit(onSubmit)}>
        {icon}
        {name}
        <Button variant={'secondary'} type="submit">
          {isPending ? "Creating..." : "Add"}
        </Button>
      </form>
    </Form>
  );
};
export default CreateFeatureForm