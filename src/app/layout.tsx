import type { Metadata } from "next";
import "./globals.css";
import { GTWalsheimPro, inter } from "@/fonts/index";

export const metadata: Metadata = {
  title: "Ali Chatraei | Personal Website",
  description: "This is ali chatraei website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GTWalsheimPro.variable} ${inter.variable} h-full`}>
      <body className="font-inter container w-full h-full mx-auto sm:px-4 2xl:px-0">{children}</body>
    </html>
  );
}
