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
import { createNewWorkspace } from '@/lib/action/workspace'
import { useRouter } from 'next/navigation'
import { useModal } from '@/providers/modal-provider'
import Loading from '../global/loading'
import { useToast } from '../ui/use-toast'

type FormValues = z.infer<typeof NewWorkspaceSchema>;

const NewWorkspaceSchema = z.object({
    name: z.string().min(1, 'Required'),
})

const NewWorkspaceForm = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();
    const { setClose } = useModal();

    const form = useForm<FormValues>({
        mode: 'onChange',
        resolver: zodResolver(NewWorkspaceSchema),
        defaultValues: {
            name: '',
        },
    })

    const onSubmit = async (values: FormValues) => {
        try {
            const workspace = await createNewWorkspace({
                name: values.name
            })
            startTransition(() => {
                if (workspace) {
                    toast({
                        title: 'Workspace created',
                        description: 'Workspace created successfully',
                    })
                    router.push(`/app/${workspace.id}`)
                    setClose()
                }
            })
        } catch (error) {
            toast({
                variant: 'destructive',
                title: "Oops!",
                description: "Failed to create workspace",
            });
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
                                <FormControl>
                                    <Input
                                        type="text"
                                        id="name"
                                        disabled={isPending}
                                        placeholder="Workspace name"
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
export default NewWorkspaceForm
