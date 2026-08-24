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
  keywords: ["RibbonX editor", "Office ribbon editor", "Excel add-in", "Word add-in", "PowerPoint add-in", "customUI XML", "imageMso", "VBA callbacks"],
  alternates: { canonical: "https://fernand21.github.io/office-ribbon-editor/" },
  robots: { index:true, follow:true, googleBot:{ index:true, follow:true, "max-image-preview":"large", "max-snippet":-1 } },
  manifest: "manifest.webmanifest",
  openGraph: { title, description, type: "website", images: [{ url: "og.png", width: 1200, height: 630, alt: "Office Ribbon Editor" }] },
  twitter: { card: "summary_large_image", title, description, images: ["og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context":"https://schema.org", "@graph":[
    { "@type":"WebSite", name:"Office Ribbon Editor", url:"https://fernand21.github.io/office-ribbon-editor/" },
    { "@type":"SoftwareApplication", name:"Office Ribbon Editor", softwareVersion:"2.2", operatingSystem:"Windows 10, Windows 11", applicationCategory:"DeveloperApplication", applicationSubCategory:"Microsoft Office RibbonX editor", applicationSuite:"Microsoft Office", description, url:"https://fernand21.github.io/office-ribbon-editor/", downloadUrl:"https://github.com/fernand21/office-ribbon-editor/releases/latest", image:"https://fernand21.github.io/office-ribbon-editor/og.png", offers:{ "@type":"Offer", price:"0", priceCurrency:"USD" }, softwareRequirements:"Microsoft Office desktop; Inno Setup 6 is required only to generate add-in installers." }
  ]};
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}} />{children}</body></html>;
}
