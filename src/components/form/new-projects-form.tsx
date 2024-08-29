'use client'

import React, { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter, useParams } from 'next/navigation'
import { useModal } from '@/providers/modal-provider'
import Loading from '../global/loading'
import { useToast } from '../ui/use-toast'
import { createNewProject } from '@/lib/action/projects'

const NewProjectsSchema = z.object({
    name: z.string().min(1, 'Required'),
})
type FormValues = z.infer<typeof NewProjectsSchema>
type Props = {
    workspaceId: string
}

const NewProjectsForm = ({ workspaceId } : Props) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();
    const { setClose } = useModal();

    const form = useForm<FormValues>({
        mode: 'onChange',
        resolver: zodResolver(NewProjectsSchema),
        defaultValues: {
            name: ''
        },
    });


    const onSubmit = async (values: FormValues) => {
        try {
            const response = await createNewProject(
                values.name,
                workspaceId,
            );

            startTransition(() => {
                console.log(response);
                if (response) {
                    toast({
                        title: 'Project Created',
                        description: 'Project created successfully',
                    })
                    router.refresh();
                    router.push(`/app/${response.workspaceId}/projects/${response.id}`)
                    setClose()
                }
            })
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Oops!',
                description: 'Failed to create space',
            })
        }
    }

    return (
        <>
            <Form {...form}>
                <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Name</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isPending}
                                        placeholder="Name"
                                        {...field}
                                    />
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
        </>
    )
}
export default NewProjectsForm
