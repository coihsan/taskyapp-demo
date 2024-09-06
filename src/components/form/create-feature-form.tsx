"use client"

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { featureOptionAction } from "@/lib/action/projects";

type Props = {
    name: string,
    icon: JSX.Element,
    workspaceid: string,
    projectsid: string
}
const formSchema = z.object({
    name: z.string(),
  })

type FormValues = z.infer<typeof formSchema>

const CreateFeatureForm = ({ name, icon, workspaceid, projectsid } : Props) =>{
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "onTouched",
        defaultValues: {
            name: name,
        }
    })
    const onSubmit = async (values: FormValues) => {}
    
    return(
        <Form {...form}>
            <form>
            <FormField
                control={form.control}
                name="name"
                render={(field) => (
                <FormItem>
                    <FormLabel />
                    <FormControl>
                    <Input type="text" placeholder="..." {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit">Create</Button>
            </form>
        </Form>

    )
}