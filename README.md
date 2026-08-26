# Ribbon UI Studio

Design and edit custom Microsoft Office ribbons with RibbonX and VBA in one platform, then package add-ins with Windows installers.

## Website

Official distribution website for Ribbon UI Studio. The application is proprietary software: it is free to download and use, while its application source code remains private.

Website: https://fernand21.github.io/ribbon-ui-studio/

The website reads the current public version, release date, asset names, asset sizes, download links, and download counters directly from GitHub Releases. Publishing a new GitHub Release updates the visible release information without editing the website source.

## Site structure

- Product overview and primary latest-release link
- Installer and portable download cards populated from GitHub Releases
- Documentation and workflow guide
- Product screenshots and Office-specific previews
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

The manifest, sitemap, canonical metadata, repository links, and GitHub Pages base path now use the new `ribbon-ui-studio` path.
