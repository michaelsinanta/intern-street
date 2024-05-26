import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideBarProvider } from "@/components/context/SideBarContext";
import Logo from "/public/assets/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobStreet",
  description: "Created by @michaelsinanta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SideBarProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SideBarProvider>
  );
}
