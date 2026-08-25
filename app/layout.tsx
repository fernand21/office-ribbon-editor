import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "Ribbon UI Studio — Free RibbonX Editor for Windows";
const description = "Download Ribbon UI Studio free. Design and edit Microsoft Office RibbonX with VBA, create add-ins for Excel, Word and PowerPoint, and package them as Windows installers.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fernand21.github.io/ribbon-ui-studio/"),
  title,
  description,
  keywords: ["RibbonX editor", "Office ribbon editor", "Excel add-in", "Word add-in", "PowerPoint add-in", "customUI XML", "imageMso", "VBA callbacks"],
  alternates: { canonical: "https://fernand21.github.io/ribbon-ui-studio/" },
  robots: { index:true, follow:true, googleBot:{ index:true, follow:true, "max-image-preview":"large", "max-snippet":-1 } },
  manifest: "manifest.webmanifest",
  openGraph: { title, description, type: "website", images: [{ url: "ribbon-ui-studio-logo.png", width: 1408, height: 1024, alt: "Ribbon UI Studio" }] },
  twitter: { card: "summary_large_image", title, description, images: ["ribbon-ui-studio-logo.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context":"https://schema.org", "@graph":[
    { "@type":"WebSite", name:"Ribbon UI Studio", url:"https://fernand21.github.io/ribbon-ui-studio/" },
    { "@type":"SoftwareApplication", name:"Ribbon UI Studio", softwareVersion:"2.2", operatingSystem:"Windows 10, Windows 11", applicationCategory:"DeveloperApplication", applicationSubCategory:"Microsoft Office RibbonX editor", applicationSuite:"Microsoft Office", description, url:"https://fernand21.github.io/ribbon-ui-studio/", downloadUrl:"https://github.com/fernand21/ribbon-ui-studio/releases/latest", image:"https://fernand21.github.io/ribbon-ui-studio/ribbon-ui-studio-logo.png", offers:{ "@type":"Offer", price:"0", priceCurrency:"USD" }, softwareRequirements:"Microsoft Office desktop; Inno Setup 6 is required only to generate add-in installers." }
  ]};
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}} />{children}</body></html>;
}
