"use client";

import React from "react";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import CanvasBoard from "./_components/canvas-board";
import CardDetails from "./_components/card-details";

const Page = () => {
  return (
    <ScrollArea className="relative pb-32 h-screen w-full">
      <CanvasBoard />
      <ScrollBar />
    </ScrollArea>
  );
};

export default Page;
