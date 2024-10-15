import type { Metadata } from "next";

import { ChakraProvider } from "@chakra-ui/react";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const marcellusSC = localFont({
  src: [
    {
      path: "./fonts/MarcellusSC-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-marcellus-sc",
});

const robotoCondensed = localFont({
  src: [
    {
      path: "./fonts/RobotoCondensed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // Add other weights/styles if needed
  ],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Mystery Babylon",
  description: "Mystery Babylon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marcellusSC.variable} ${robotoCondensed.variable} antialiased`}
      >
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
