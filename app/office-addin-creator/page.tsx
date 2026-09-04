import type { Metadata } from "next";
import SeoLanding from "../seo-landing";

export const metadata: Metadata = {
  title:"Office Add-in Creator for Excel, Word & PowerPoint | Ribbon UI Studio",
  description:"Create RibbonX add-ins for Excel, Word and PowerPoint, edit customUI XML and VBA modules, generate callbacks, preview ribbons and package add-ins for Windows.",
  alternates:{ canonical:"https://fernand21.github.io/ribbon-ui-studio/office-addin-creator/" }
};

export default function Page(){return <SeoLanding eyebrow="Office add-in creator" title="Create RibbonX add-ins for Excel, Word and PowerPoint from one studio." intro="Ribbon UI Studio supports the full path from Office add-in creation to RibbonX editing, VBA callback code, diagnostics, previews and Windows installer packaging." sections={[
  {title:"Excel .xlam",body:"Create Excel add-ins with starter RibbonX and VBA callback code, then edit modules and package the finished add-in."},
  {title:"Word .dotm",body:"Build Word template add-ins with custom RibbonX, callbacks and Office-aware previews."},
  {title:"PowerPoint .ppam",body:"Create PowerPoint add-ins, work with RibbonX and VBA, and verify protected packaging workflows before distribution."}
]} bullets={[
  "Create add-ins using classic Office 2007 or modern Office 2010+ RibbonX.",
  "Generate and diagnose VBA callback signatures required by your XML.",
  "Read, create, rename, edit and remove VBA modules from the project tree.",
  "Use imageMso icons or embedded custom images.",
  "Package supported add-ins with Windows installers when the project is ready."
]}/>}
