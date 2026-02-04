import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { clx } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import LayoutContent from "@/components/LayoutContent";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfoliocf.harrisviewcodes.uk"),
  title: "Harris Azmi | Full-Stack Engineer Portfolio",
  description:
    "Modern Next.js portfolio showcasing projects, experience, and CI/CD practices",
  keywords: [
    "Harris Azmi",
    "Full-Stack Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "CI/CD",
    "Cloudflare Pages",
    "DevOps",
    "Portfolio",
  ],
  authors: [
    {
      name: "Harris Azmi bin Roswadi",
      url: "https://www.linkedin.com/in/harris-azmi-roswadi/",
    },
  ],
  openGraph: {
    title: "Harris Azmi | Full-Stack Engineer Portfolio",
    description:
      "Explore Harris Azmi's projects, professional experience, and DevOps workflows built with Next.js",
    url: "https://portfoliocf.harrisviewcodes.uk",
    siteName: "Harris Azmi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Harris Azmi | Full-Stack Engineer Portfolio",
    description:
      "Modern Next.js portfolio highlighting projects, experience, and CI/CD pipeline.",
  },
  alternates: {
    canonical: "https://portfoliocf.harrisviewcodes.uk",
  },
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
          "items-center justify-center flex flex-col font-outfit xl:px-8",
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
