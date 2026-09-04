import type { Metadata } from "next";
import SeoLanding from "../seo-landing";

export const metadata: Metadata = {
  title:"Custom UI Editor Alternative for Office RibbonX | Ribbon UI Studio",
  description:"A modern Custom UI Editor alternative for RibbonX work: edit customUI XML, generate VBA callbacks, browse imageMso icons, preview Office ribbons and package add-ins.",
  alternates:{ canonical:"https://fernand21.github.io/ribbon-ui-studio/custom-ui-editor-alternative/" }
};

export default function Page(){return <SeoLanding eyebrow="Custom UI Editor alternative" title="A modern RibbonX workflow for developers who need more than raw customUI XML." intro="If you used the classic Office Custom UI Editor workflow, Ribbon UI Studio keeps direct RibbonX editing but adds callback generation, diagnostics, previews, imageMso browsing, VBA module work and add-in packaging in one application." sections={[
  {title:"Keep direct XML control",body:"Ribbon UI Studio does not hide the RibbonX source. You can inspect and edit customUI XML directly while using visual assistance around it."},
  {title:"Catch errors earlier",body:"Diagnostics check callback signatures, duplicate IDs, images and RibbonX structure before you reopen the document in Office."},
  {title:"Move from editing to distribution",body:"Create Office add-ins, work with VBA modules and package supported add-ins for Windows from the same product workflow."}
]} bullets={[
  "Supports Office 2007 and Office 2010+ RibbonX package paths.",
  "Creates starter RibbonX structures for Excel, Word and PowerPoint add-ins.",
  "Generates VBA callbacks for common static and dynamic Ribbon controls.",
  "Includes imageMso browsing and custom-image management.",
  "Provides Office-aware previews and installer packaging for supported add-ins."
]}/>}
