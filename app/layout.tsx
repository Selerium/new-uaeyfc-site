import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UAEYFC",
  description: "Empowering young people from every walk of life to encounter the Gospel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
