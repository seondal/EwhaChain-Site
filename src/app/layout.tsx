import Header from "@/app/(main)/Header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "./(main)/Footer";

export const metadata: Metadata = {
  title: "Ewha Chain",
  description: "이화여자대학교 블록체인 학회",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kor">
      <body>
        {/* <Header /> */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
