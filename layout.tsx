import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Paprika | B2B SaaS Design Studio",
  description: "Эксперты в B2B SaaS продуктах -- вникаем в ваш проект и повышаем метрики",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable}`}>
      <body className={`antialiased bg-background text-foreground min-h-screen font-sans overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
