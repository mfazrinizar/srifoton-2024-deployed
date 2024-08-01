import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const monument = LocalFont({
  src: "../public/fonts/MonumentExtended-Regular.woff2",
  variable: "--font-monument",
});

const ponnala = LocalFont({
  src: "../public/fonts/Ponnala Regular.woff2",
  variable: "--font-ponnala",
});

export const metadata: Metadata = {
  title: "SRIFOTON 2024",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monument.variable} ${inter.variable} ${ponnala.variable}`}
      >
        <NextTopLoader color="#fff8f0" initialPosition={0.3} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
