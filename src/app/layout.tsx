import Header from "@/app/(main)/Header";
import "./globals.css";
import type { Metadata } from "next";

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
        <Header />
        <main> {children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
