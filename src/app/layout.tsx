import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit.dev — Senior Full Stack Web & App Developer",
  description:
    "Portfolio of Amit, a senior full stack web & app developer specializing in React, Node.js, Angular, and modern web solutions.",
  keywords: [
    "full stack developer",
    "web developer",
    "react",
    "node.js",
    "portfolio",
  ],
  openGraph: {
    title: "Amit.dev — Senior Full Stack Web & App Developer",
    description:
      "Portfolio of Amit, a senior full stack web & app developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${jetbrainsMono.variable} relative`}>
        {children}
      </body>
    </html>
  );
}
