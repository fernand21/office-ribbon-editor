# Ribbon UI Studio

**Free RibbonX and Microsoft Office Custom UI editor for Windows.**

Ribbon UI Studio helps developers design and edit custom Microsoft Office ribbons with RibbonX/customUI XML and VBA in one workspace. It supports Excel, Word and PowerPoint add-ins, VBA callback generation and diagnostics, imageMso browsing, Office-aware previews, and Windows installer packaging.

It is especially useful if you are searching for a modern workflow around terms such as **RibbonX editor**, **Office Ribbon Editor**, **Custom UI Editor alternative**, **Ribbon XML editor**, **Excel Ribbon Designer**, **VBA Ribbon Editor**, **Office Add-in Creator**, or **imageMso Browser**.

## Website

Official site and free downloads:

https://fernand21.github.io/ribbon-ui-studio/

The application is proprietary software distributed free of charge. The application source code remains private; this repository contains the public website and release/distribution resources.

## Main capabilities

- Edit RibbonX / `customUI` XML for Microsoft Office
- Create and maintain Excel `.xlam`, Word `.dotm` and PowerPoint `.ppam` add-ins
- Generate VBA callback signatures required by RibbonX controls
- Diagnose missing callbacks, duplicate IDs and invalid RibbonX structures
- Browse built-in Office `imageMso` icons and manage custom images
- Preview Office-specific ribbon layouts
- Read and edit VBA modules from supported Office files
- Package add-ins with Windows installers
- Use installer or portable builds of Ribbon UI Studio

## Downloads and releases

The website reads the current public version, release date, asset names, asset sizes, direct download links and download counters directly from GitHub Releases. Publishing a new public GitHub Release updates the visible release information without manually editing the download page.

Releases:
https://github.com/fernand21/ribbon-ui-studio/releases

## Discovery pages

- RibbonX Editor: https://fernand21.github.io/ribbon-ui-studio/ribbonx-editor/
- Custom UI Editor alternative: https://fernand21.github.io/ribbon-ui-studio/custom-ui-editor-alternative/
- Excel Ribbon Designer: https://fernand21.github.io/ribbon-ui-studio/excel-ribbon-designer/
- Office Add-in Creator: https://fernand21.github.io/ribbon-ui-studio/office-addin-creator/
- imageMso Browser: https://fernand21.github.io/ribbon-ui-studio/imagemso-browser/

## Site structure

- Product overview and latest-release download
- Installer and portable download cards populated from GitHub Releases
- Documentation and complete workflow guide
- Real product screenshots and Office-specific previews
- Version history populated from GitHub Releases
- GitHub Issues feedback and support links

All distribution links point to the canonical repository at `fernand21/ribbon-ui-studio`.

## Software status

This repository contains the distribution website only. Publishing this website does not publish or grant rights to the Ribbon UI Studio application source code. Application binaries are distributed separately through GitHub Releases.

## Local development

```bash
npm run dev
```

## Production validation

```bash
npm run build
```

The project uses vinext and is deployed automatically through GitHub Pages.

## Branding and URL migration

The product is branded **Ribbon UI Studio** and the canonical GitHub Pages URL is:

`https://fernand21.github.io/ribbon-ui-studio/`

The previous project path was:

`https://fernand21.github.io/office-ribbon-editor/`

The manifest, sitemap, canonical metadata, repository links and GitHub Pages base path use the current `ribbon-ui-studio` path.
