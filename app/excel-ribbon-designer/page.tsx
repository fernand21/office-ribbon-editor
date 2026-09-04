import type { Metadata } from "next";
import SeoLanding from "../seo-landing";

export const metadata: Metadata = {
  title:"Excel Ribbon Designer & VBA Ribbon Editor | Ribbon UI Studio",
  description:"Design Excel RibbonX, edit customUI XML, generate VBA callbacks, preview the ribbon, browse imageMso icons and create .xlam add-ins with Ribbon UI Studio.",
  alternates:{ canonical:"https://fernand21.github.io/ribbon-ui-studio/excel-ribbon-designer/" }
};

export default function Page(){return <SeoLanding eyebrow="Excel Ribbon Designer" title="Build Excel RibbonX and VBA callbacks without stitching together separate tools." intro="Ribbon UI Studio gives Excel developers a focused workflow for custom ribbons, .xlam add-ins, callback code, imageMso icons, diagnostics and packaging." sections={[
  {title:"Create Excel add-ins",body:"Start new .xlam projects with a RibbonX part and RibbonCallbacks module ready to extend."},
  {title:"Design and validate RibbonX",body:"Edit tabs, groups and controls in customUI XML, then run structural checks before reopening the file in Excel."},
  {title:"Connect VBA behavior",body:"Generate callback signatures and edit VBA modules from the same project workspace."}
]} bullets={[
  "Work with modern Office 2010+ or legacy Office 2007 RibbonX schemas.",
  "Preview the Excel ribbon while editing.",
  "Browse imageMso icons and include custom PNG images.",
  "Diagnose missing callbacks and signature mismatches.",
  "Package supported Excel add-ins with Windows installers."
]}/>}
