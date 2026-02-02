import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { clx } from "@/lib/utils";
import Avatar from "@/components/Avatar";
import Navbar from "@/components/Navbar";
import LayoutContent from "@/components/LayoutContent";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harris Azmi",
  description: "Harris Azmi Portfolio version 2.0.0 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clx(
          `${outfit.variable} antialiased`,
          "items-center justify-center flex flex-col font-outfit xl:px-8"
        )}
      >
        <div className="mx-auto container px-8 pb-8 ">
          <ThemeProvider>
            <Navbar></Navbar>
            <LayoutContent>{children}</LayoutContent>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
