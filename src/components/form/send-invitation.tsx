"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import React, { useTransition } from "react"
import { useToast } from "../ui/use-toast"
import { useModal } from "@/providers/modal-provider"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { userDataSchema } from "@/lib/schema"

type Props = {
  workspaceid: string
}

const SendInvitation : React.FC<Props> = ({workspaceid}) =>{
    const { toast } = useToast()
    const { setClose } = useModal()
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof userDataSchema>>({
        resolver: zodResolver(userDataSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            role: 'OWNER'
        }
    })

    const onSubmit = (values: z.infer<typeof userDataSchema>) => {
        try {
            
        } catch (error) {
            
        }
    }

    return(
        <Card>
            <CardHeader>
            <CardTitle>Invitation</CardTitle>
            <CardDescription>
            An invitation will be sent to the user. Users who already have an
            invitation sent out to their email, will not receive another
            invitation.
            </CardDescription>
        </CardHeader>
        <CardContent>
            {/* <Form>
                <form action="">

                </form>
            </Form> */}
        </CardContent>
        </Card>
    )
}