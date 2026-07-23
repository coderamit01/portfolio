import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css"
import ReactLenis from "lenis/react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit Hasan — Full Stack Web & App Developer",
  description:
    "Portfolio of Amit, a full stack web developer specializing in React, Node.js, Angular, and modern web solutions.",
  keywords: [
    "full stack developer",
    "web developer",
    "react",
    "next.js",
    "portfolio",
  ],
  openGraph: {
    title: "Amit Hasan — Full Stack Web Developer",
    description:
      "Portfolio of Amit, a full stack web developer.",
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
        <ReactLenis root options={{
          duration: 1.0,
          smoothWheel:true,
          syncTouch: false
        }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
