import { Inter } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adriana Consulting Services Inc.",
  description: "A page for Adriana Consulting Services Inc., a global food industry consulting company specializing in snack food optimization, process engineering, and crisis resolution.",
  icons: {
    icon: [
      {
        url: "/images/tab_icon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
