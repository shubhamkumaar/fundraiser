
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import React from "react";
import {isLogin} from "@/api/user/isLogin"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BKP Fundraiser",
  description: "Raising funds for the child education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [isLogin, setIsLogin] = React.useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
      <AppSidebar isLogin={isLogin()}/>
      <main>
        <SidebarTrigger className="mt-4"/>
        {children}
      </main>
    </SidebarProvider>
      </body>
    </html>
  );
}
