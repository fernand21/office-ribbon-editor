# Office Ribbon Editor website

Official free-distribution website for Office Ribbon Editor. The application is proprietary software: it is free to download and use, but its source code is not published. The current public release is **v2.2**.

Website: https://fernand21.github.io/office-ribbon-editor/

## Office Ribbon Editor v2.2

- Improved `.dotm` packaging and VBA project locking for Word add-ins.
- Improved `.ppam` creation, editing, callbacks, module reading, obfuscation, and installer packaging for PowerPoint add-ins.
- Obfuscation is applied only to an installer copy; the original add-in is never modified.
- PowerPoint verifies that protected VBA was replaced before compiling an installer.
- Pure-VBA license validation and packaging changes reduce antivirus false positives.
- Stable per-add-in AppId values and explicit copying of custom installer icons.
- Expanded Monaco autocomplete and five additional editor themes.
- Host-aware title-bar colors for Excel, Word, PowerPoint, and the neutral workspace.

## Site structure

- Hero: product positioning and primary release link
- Downloads: installer, portable binaries, and legacy .NET Framework edition
- Documentation: four-step quick start plus project and issue links
- Screenshots: interface-oriented product previews and key capabilities
- Version history: official published releases
- Future licensing: reserved section for optional commercial or enterprise offers

All distribution links point to the canonical GitHub repository at `fernand21/office-ribbon-editor`.

## Software status

The source code in this repository belongs to the distribution website. Publishing this website does not publish or grant rights to the Office Ribbon Editor application source code. Application binaries will be distributed separately through GitHub Releases.

## Local development

```bash
npm run dev
```

## Production validation

```bash
npm run build
```

The project uses vinext and is published automatically through GitHub Pages.
