import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brianwashington.dev"),
  title: "Brian Washington — Cloud & Infrastructure Engineer",
  description:
    "Portfolio of Brian Washington — Systems & Cloud Infrastructure Engineer specializing in Azure, Microsoft 365, and AI-Assisted Automation. Based in St. Louis, MO.",
  keywords: [
    "Brian Washington",
    "Cloud Engineer",
    "Azure Administrator",
    "AZ-104",
    "Microsoft 365",
    "PowerShell",
    "Infrastructure Engineer",
    "St. Louis",
    "Azure AD",
    "Entra ID",
  ],
  authors: [{ name: "Brian Washington", url: "https://brianwashington.dev" }],
  creator: "Brian Washington",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brianwashington.dev",
    siteName: "Brian Washington",
    title: "Brian Washington — Cloud & Infrastructure Engineer",
    description:
      "Systems & Cloud Infrastructure Engineer specializing in Azure, Microsoft 365, and AI-Assisted Automation. Based in St. Louis, MO.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brian Washington — Cloud & Infrastructure Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Washington — Cloud & Infrastructure Engineer",
    description:
      "Systems & Cloud Infrastructure Engineer specializing in Azure, Microsoft 365, and AI-Assisted Automation. Based in St. Louis, MO.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
