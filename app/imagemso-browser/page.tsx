import type { Metadata } from "next";
import SeoLanding from "../seo-landing";

export const metadata: Metadata = {
  title:"Office imageMso Browser for RibbonX | Ribbon UI Studio",
  description:"Browse Microsoft Office imageMso icons for RibbonX, find built-in icon names, use them in customUI XML, and manage custom PNG images with Ribbon UI Studio.",
  alternates:{ canonical:"https://fernand21.github.io/ribbon-ui-studio/imagemso-browser/" }
};

export default function Page(){return <SeoLanding eyebrow="Office imageMso browser" title="Find the Office imageMso icon you need without guessing its name." intro="Ribbon UI Studio includes an imageMso workflow for RibbonX development so you can browse built-in Office icons, use their official identifiers and combine them with custom images in your ribbon projects." sections={[
  {title:"Browse built-in Office icons",body:"Search and explore imageMso identifiers while building RibbonX for Excel, Word and PowerPoint."},
  {title:"Use icons in customUI XML",body:"Insert the selected imageMso name into the RibbonX control you are editing instead of maintaining a separate reference list."},
  {title:"Manage custom images too",body:"Ribbon UI Studio also supports custom PNG images for controls that should use your own branding or artwork."}
]} bullets={[
  "Useful for buttons, galleries, menus and other RibbonX controls that support images.",
  "Works alongside the RibbonX editor rather than as a disconnected lookup tool.",
  "Helps keep image identifiers tied to the Office UI project where they are used.",
  "Combine built-in imageMso icons with embedded custom PNG resources.",
  "Validate the surrounding RibbonX project before opening it in Office."
]}/>}
