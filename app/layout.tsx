import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "DevVinci Studios",
  description: "Where Art Meets Innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FFFEF8] text-[#04080F]">
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
