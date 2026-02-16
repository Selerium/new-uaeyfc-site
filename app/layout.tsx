import type { Metadata } from "next";
import { Jost } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "UAEYFC",
  description: "Empowering young people from every walk of life to encounter the Gospel",
};

export const jost = Jost({
  display: 'swap',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900',],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.className}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
