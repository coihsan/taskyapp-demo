import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Input } from "@/components/ui/input"
  import PageWrapper from "@/components/primitive/page-wrapper";
import NotesList from './_components/notes-list';
  
type NotesLayoutProps = {
    children: React.ReactNode
}

const NotesLayout = ({ children } : NotesLayoutProps) =>{
    return(
        <ResizablePanelGroup direction="horizontal" className="min-h-dvh w-full">
        <ResizablePanel defaultSize={25}>
          <PageWrapper orientation="vertical">
          <div className="space-y-2 p-2">
              <Input type="search" placeholder="Search for notes" />
              <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
          <NotesList />
          </PageWrapper>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
            {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    )
}
export default NotesLayout