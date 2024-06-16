import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Provider } from "@/providers/provider";
import NavHeader from "@/components/layouts/NavHeader";
import { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Events Sri Lanka",
  description:
    "Event Management system that allows users to post, find and participate the events that are available for.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          <NavHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
