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
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
  } from '@/components/ui/card'


const CreateCardForm = () =>{
    return(
        <Card>
            <CardHeader>
                <CardTitle>Task Details</CardTitle>
                <CardDescription>Create a new card</CardDescription>
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
export default CreateCardForm