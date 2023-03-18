// import Header from "@/components/layout/header";
import Header from "@/components/layout/header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  preload: true,
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <main className={`${ubuntu.variable} font-sans`}>
          <Header />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}
