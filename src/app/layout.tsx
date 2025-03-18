import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { isChristmas } from "../utils/contador";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: isChristmas() ? "Feliz Natal" : "Contador de Dias até o Natal",
  description: "Um contador regressivo até o Natal!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased flex items-center justify-center h-screen`}>{children}</body>
    </html>
  );
}