import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import  "./styles/globals.css"
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as ToasterSonner } from "@/components/ui/sonner";

const myFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "TaskyApp",
  description: "Organize your tasks with TaskyApp",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={myFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            {children}
            <Toaster />
            <ToasterSonner position="top-center" />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}