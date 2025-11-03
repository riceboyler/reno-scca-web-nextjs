import type { Metadata } from "next";
import { Nunito, Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
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
      suppressHydrationWarning>
      <head>
        <meta
          name="color-scheme"
          content="light dark"
        />
      </head>
      <body
        className={`${nunito.variable} ${oswald.variable}`}
        style={{ background: "var(--background)" }}>
        <ThemeProvider attribute="class">
          <Box
            p="2"
            backgroundColor="var(--background)"
            maxWidth="1200px"
            margin="0 auto"
            minHeight="80vh">
            <Header />
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
