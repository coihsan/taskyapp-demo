"use client" 

import React, { useTransition } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useParams, useRouter } from 'next/navigation'
import { CreateNewBoardSchema } from '@/lib/schema'
import { upsertBoard } from '@/lib/action/projects'
import { Board } from '@prisma/client'
import { v4 } from 'uuid'
import { color } from 'framer-motion'

type FormValues = z.infer<typeof CreateNewBoardSchema>

type Props = {
    data?: Board,
}

const CreateNewBoard = ({ data } : Props) =>{
    const params = useParams<{boardid: string, projectsid: string}>();
    const [isPending, startTransition] = useTransition();
    const form = useForm<FormValues>({
        resolver: zodResolver(CreateNewBoardSchema),
        mode: "onChange",
        defaultValues:{
            title: data?.title || "",
            columnIndex: data?.column_index || 0,
            color: data?.color || ""
        }
    })

    const onSubmit = async (values: FormValues) =>{
        try {
            const response = await upsertBoard(
            {
                id: data?.id || v4(),
                title: values.title,
                column_index: values.columnIndex,
                created_at: data?.created_at || new Date(),
                updated_at: data?.created_at || new Date(),
                projectId: params.projectsid,
                color: values.color || ""
            },
            params.projectsid
        );

            return response
        } catch (error) {
            console.log(error)
        }
    }

    return(
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
                        variant={'default'}
                        type="submit"
                    >
                        Create
                    </Button> 
            </form>
        </Form>
    )
}
export default CreateNewBoard