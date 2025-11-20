import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QueryProvider } from "@/lib/swr";

const inter = Inter({ subsets: ["cyrillic", "latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Барышская епархия",
  description: "Официальный сайт Барышской епархии Русской Православной Церкви",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <QueryProvider>
          <Header />
          <main className="min-h-screen bg-background">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
