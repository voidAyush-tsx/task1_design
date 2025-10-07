import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "../styles/globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "task1_design",
  description: "Developer: Ayush Ranjan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}