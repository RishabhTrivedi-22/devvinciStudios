import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevVinci Studios",
  description: "Where Art Meets Innovation.",
};

const Chillax = localFont({
  src: "../fonts/Chillax-Variable.ttf",
  variable: "--font-Chillax",
});
const Synonym = localFont({
  src: "../fonts/Synonym-Variable.ttf",
  variable: "--font-Synonym",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f5f1e2] text-[#000000]" >
        <main className={`${Chillax.variable} ${Synonym.variable}`}>{children}</main>
      </body>
    </html>
  );
}
