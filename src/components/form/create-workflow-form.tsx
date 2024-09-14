"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useParams, useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'

const WorkflowFormSchema = z.object({
    name: z.string().min(1, 'Required'),
    description: z.string().min(1, 'Required'),
})
  
type Props = {
    title?: string
    subTitle?: string
  }

const CreateWorkflowForm = ()=> {
    const params = useParams<{projectsid: string}>()
    const router = useRouter()
    const { toast } = useToast()

    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default CreateWorkflowForm