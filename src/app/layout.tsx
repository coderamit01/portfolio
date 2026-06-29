import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/src/components/ThemeProvider";
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
        {/* Set the theme before paint to avoid a flash of the wrong theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body className={jetbrainsMono.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
