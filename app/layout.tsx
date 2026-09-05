import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "Ribbon UI Studio — Free RibbonX & Office Custom UI Editor for Windows";
const description = "Free RibbonX editor for Microsoft Office. Design custom ribbons, edit customUI XML, generate VBA callbacks, browse imageMso icons, create Excel, Word and PowerPoint add-ins, and package them for Windows.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fernand21.github.io/ribbon-ui-studio/"),
  title,
  description,
  keywords: [
    "RibbonX editor",
    "Microsoft Office ribbon editor",
    "Office Custom UI Editor",
    "Custom UI Editor alternative",
    "Ribbon XML editor",
    "Excel ribbon designer",
    "Word ribbon editor",
    "PowerPoint ribbon editor",
    "VBA ribbon editor",
    "Office add-in creator",
    "imageMso browser",
    "VBA callback generator",
    "customUI XML",
    "Office RibbonX",
    "Excel add-in",
    "Word add-in",
    "PowerPoint add-in"
  ],
  alternates: { canonical: "https://fernand21.github.io/ribbon-ui-studio/" },
  robots: { index:true, follow:true, googleBot:{ index:true, follow:true, "max-image-preview":"large", "max-snippet":-1 } },
  manifest: "manifest.webmanifest",
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Ribbon UI Studio",
    url: "https://fernand21.github.io/ribbon-ui-studio/",
    images: [{ url: "ribbon-ui-studio-logo.png", width: 1408, height: 1024, alt: "Ribbon UI Studio — RibbonX editor for Microsoft Office" }]
  },
  twitter: { card: "summary_large_image", title, description, images: ["ribbon-ui-studio-logo.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context":"https://schema.org", "@graph":[
    {
      "@type":"WebSite",
      name:"Ribbon UI Studio",
      url:"https://fernand21.github.io/ribbon-ui-studio/",
      description:"Official website and downloads for Ribbon UI Studio, a RibbonX and Office Custom UI editor for Windows."
    },
    {
      "@type":"SoftwareApplication",
      name:"Ribbon UI Studio",
      alternateName:["RibbonX Editor","Office Ribbon Editor"],
      operatingSystem:"Windows 10, Windows 11",
      applicationCategory:"DeveloperApplication",
      applicationSubCategory:"Microsoft Office RibbonX editor",
      applicationSuite:"Microsoft Office",
      description,
      url:"https://fernand21.github.io/ribbon-ui-studio/",
      downloadUrl:"https://github.com/fernand21/ribbon-ui-studio/releases/latest",
      image:"https://fernand21.github.io/ribbon-ui-studio/ribbon-ui-studio-logo.png",
      offers:{ "@type":"Offer", price:"0", priceCurrency:"USD" },
      featureList:[
        "RibbonX and customUI XML editing",
        "Excel, Word and PowerPoint add-in creation",
        "VBA callback generation and diagnostics",
        "imageMso icon browsing",
        "Office-aware ribbon previews",
        "Windows installer packaging for add-ins"
      ],
      softwareRequirements:"Microsoft Office desktop; Inno Setup 6 is required only to generate add-in installers."
    }
  ]};
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}} />{children}</body></html>;
}
