'use client'
import React, { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { PlusIcon } from '@radix-ui/react-icons'
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
import Uploader from './Uploader'
import { useToast } from '../ui/use-toast'

type FormValues = z.infer<typeof NewWorkspaceSchema>;

const NewWorkspaceSchema = z.object({
    name: z.string().min(1, 'Required'),
    workspace_logo: z.any().optional(),
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
            workspace_logo: '',
        },
    })

    const onSubmit = async (values: FormValues) => {
        try {
            const workspace = await createNewWorkspace({
                name: values.name,
                workspace_logo: values?.workspace_logo,
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
                        name="workspace_logo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Logo</FormLabel>
                                <FormControl>
                                    <Uploader defaultValue={''} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Workspace Name</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        id="name"
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
export default NewWorkspaceForm
