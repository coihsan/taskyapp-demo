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
import { CreateNewColumnSchema } from '@/lib/schema'
import { upsertColumn } from '@/lib/action/projects'
import { Board, Column } from '@prisma/client'
import Loading from '../global/loading'
import { v4 } from 'uuid'
type FormValues = z.infer<typeof CreateNewColumnSchema>

type Props = {
    data?: Column,
}

const CreateNewColumnForm = ({ data } : Props) =>{
    const params = useParams<{boardid: string}>();
    const [isPending, startTransition] = useTransition();
    const form = useForm<FormValues>({
        resolver: zodResolver(CreateNewColumnSchema),
        mode: "onChange",
        defaultValues:{
            title: data?.title || "",
            columnIndex: data?.column_index || 0
        }
    })

    const onSubmit = async (values: FormValues) =>{
        try {
            const response = await upsertColumn({
                ...values,
                boardId: params.boardid,
                id: data?.id || v4(),
                title: values.title,
                column_index: values.columnIndex,
                created_at: data?.created_at || new Date(),
                updated_at: data?.created_at || new Date()
            })
        } catch (error) {
            
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
                        {isPending ? (
                            <>
                                <Loading /> Creating...
                            </>
                        ) : (
                            'Create'
                        )}
                    </Button> 
            </form>
        </Form>
    )
}
export default CreateNewColumnForm