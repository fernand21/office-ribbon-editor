import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  const origin = `${protocol}://${host}`;
  const title = "Office Ribbon Editor — Free RibbonX Editor for Windows";
  const description = "Download Office Ribbon Editor free from GitHub. Create, validate, and maintain RibbonX customizations for Excel, Word, PowerPoint, and other Office files.";
  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: { title, description, type: "website", images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Office Ribbon Editor" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
