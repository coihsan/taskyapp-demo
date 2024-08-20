'use client';
import { SWRConfig } from 'swr'
import React from "react"

type Props = {
  children: React.ReactNode
}

export const SWRProvider = ({ children } : Props) => {
  return <SWRConfig>{children}</SWRConfig>
};