import React from 'react'
import NewWorkspaceForm from '../form/new-workspace-form'

const OnboardingPage = () =>{
    return(
        <div className='flex items-center justify-center h-screen w-full'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-bold text-center mb-2'>Welcome to TaskyApp</h1>
                <p className='mb-4 text-sm text-muted-foreground'>Let's start by creating a workspace.</p>
                <NewWorkspaceForm />
            </div>
        </div>
    )
}
export default OnboardingPage