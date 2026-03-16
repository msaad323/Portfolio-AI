import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});
export const metadata: Metadata = {
  title: "Mohd Saad | Full-Stack Engineer",
  description:
    "Mohd Saad is a Full-Stack Software Engineer with specialized experience in React, Next.js, Node.js, and Spring Boot. Expert in building scalable SaaS platforms and high-performance dashboards.",
  metadataBase: new URL("https://portfolio-ai-ms.vercel.app"),
  openGraph: {
    title: "Mohd Saad | Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in high-performance web applications, enterprise-grade systems, and AI-driven platforms.",
    type: "website",
    url: "https://portfolio-ai-ms.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohd Saad Portfolio"
      }
    ]
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

