import '../styles/globals.css'
import type { Metadata } from 'next'
import React, {ReactNode} from "react";
import dynamic from "next/dynamic";
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'RDD',
  description: 'Reference Driven Development',
}
const SideBar = dynamic(
    () => import('@/components/sidebar'),
    { ssr: false }
);


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen bg-gray-50">
          {/*<SideBar treeData={ treeData }></SideBar>*/}
          <div className={`flex-1 flex justify-center items-start`}>
              {children}
          </div>
        </div>
      </body>
    </html>
  )
}
