import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChildrenProp } from "#/lib";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyAgri Startup",
  description: "MyAgri Startup by Enigma Team | 2023",
};

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
