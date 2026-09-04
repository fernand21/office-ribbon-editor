import type { Metadata } from "next";
import SeoLanding from "../seo-landing";

export const metadata: Metadata = {
  title:"Free RibbonX Editor for Microsoft Office | Ribbon UI Studio",
  description:"Edit Office RibbonX and customUI XML visually, generate VBA callbacks, validate ribbon structure, preview Excel, Word and PowerPoint ribbons, and package add-ins for Windows.",
  alternates:{ canonical:"https://fernand21.github.io/ribbon-ui-studio/ribbonx-editor/" }
};

export default function Page(){return <SeoLanding eyebrow="RibbonX editor for Windows" title="Design, edit and validate Microsoft Office RibbonX in one workspace." intro="Ribbon UI Studio brings customUI XML, VBA callbacks, Office previews, imageMso icons and add-in packaging together so you can work on the whole ribbon instead of switching between disconnected tools." sections={[
  {title:"Edit customUI XML",body:"Work directly with Office RibbonX XML while keeping tabs, groups and controls visible as one project."},
  {title:"Generate VBA callbacks",body:"Create callback signatures required by RibbonX controls and diagnose missing or mismatched callbacks before opening Office."},
  {title:"Preview Office ribbons",body:"Preview Excel, Word and PowerPoint ribbon layouts from the editor while you build and refine the custom UI."}
]} bullets={[
  "Create Office 2007 or Office 2010+ RibbonX parts with the correct namespace and package path.",
  "Browse imageMso icons and manage custom images without leaving the application.",
  "Detect duplicate IDs, missing callbacks, invalid attributes and embedded-image problems.",
  "Create and edit VBA modules inside supported Office files.",
  "Package supported add-ins as Windows installers when distribution is ready."
]}/>}
