import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mohd Saad | Software Engineer Portfolio",
  description:
    "Portfolio of Mohd Saad, Software Engineer and Full-Stack Developer specializing in React, Next.js, Node.js, and modern web applications.",
  metadataBase: new URL("https://your-portfolio-domain.com"),
  openGraph: {
    title: "Mohd Saad | Software Engineer",
    description:
      "Full-stack engineer with 4+ years of experience building scalable web applications.",
    type: "website",
    url: "https://your-portfolio-domain.com"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

