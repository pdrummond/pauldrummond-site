import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

const font = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul Drummond",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
