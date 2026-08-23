import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "Office Ribbon Editor — Free RibbonX Editor for Windows";
const description = "Download Office Ribbon Editor free from GitHub. Create, validate, and maintain RibbonX customizations for Excel, Word, PowerPoint, and other Office files.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fernand21.github.io/office-ribbon-editor/"),
  title,
  description,
  openGraph: { title, description, type: "website", images: [{ url: "og.png", width: 1200, height: 630, alt: "Office Ribbon Editor" }] },
  twitter: { card: "summary_large_image", title, description, images: ["og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
