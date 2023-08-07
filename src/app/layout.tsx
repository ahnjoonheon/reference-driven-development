import './globals.css'
import type { Metadata } from 'next'
import React from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";


export const metadata: Metadata = {
  title: 'RDD',
  description: 'Reference Driven Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
              <Header></Header>
              {children}
              <Footer></Footer>
        </div>
      </body>
    </html>
  )
}
