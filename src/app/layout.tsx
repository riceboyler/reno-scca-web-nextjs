import type { Metadata } from "next";
import { Nunito, Oswald } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Box } from "styled-system/jsx";
import { Header } from "@/components/Header";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reno SCCA",
  description: "Site of the Reno Region of the Sports Car Club of America",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta
          name="color-scheme"
          content="dark light"
        />
      </head>
      <body className={`${nunito.variable} ${oswald.variable}`}>
        <MantineProvider>
          <Box
            p="2"
            backgroundColor="white"
            border="solid 2px"
            borderColor="indigo.900"
            maxWidth="1250px"
            margin="0 auto"
            minHeight="80vh"
          >
            <Header />
            {children}
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
