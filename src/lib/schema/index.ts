import { db } from '@/lib/server/db'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const DetailsUserProfileSchema = z.object({
    email: z.string().email('Required'),
    name: z.string().min(1, 'Required'),
    password: z.string().min(1).optional(),
    imageUrl: z.string().default('/avatar/avatar2.png').optional(),
    bio: z.string().optional(),
    username: z.string(),
    createdAt: z.date().optional(),
})

export const DetailsWorkspaceSchema = z.object({
    name: z.string().min(1, 'Required'),
    workspace_logo: z.any().optional(),
    subDomainName: z.string().min(1, 'Required'),
    createdAt: z.date().optional(),
    status: z.string().optional(),
    userId: z.number(),
})


export const NewWorkflowFormSchema = z.object({
    name: z.string().min(1, 'Required'),
})

export const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
})

export const SignupSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
})

export const CreateNewBoardSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    }),
})
export const CreateNewColumnSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    }),
    columnIndex: z.number(),
})

export const NewCalenderSchema = z.object({
    title: z.string().min(1, 'Required'),
    dates: z.date().min(new Date(), 'Invalid date'),
    notes: z.string().optional(),
    times: z.string()
})