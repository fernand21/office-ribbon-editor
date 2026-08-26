# Ribbon UI Studio v3.0.0

## What's changed

### Windows Explorer integration
- Added a **Create Ribbon Add-in** context-menu submenu for creating Office add-ins directly from a folder.
- Added separate **Legacy 2007** and **Modern 2010+** templates for Excel `.xlam`, Word `.dotm`, and PowerPoint `.ppam` add-ins.
- Added **Edit RibbonX with Ribbon UI Studio** to the Windows Explorer context menu for supported Office files.
- Added Windows **Open with** integration for opening supported Office files directly in Ribbon UI Studio.

### RibbonX callback generation and diagnostics
- Corrected generated VBA signatures for dynamic RibbonX callbacks, including `getPressed`, `getSize`, gallery callbacks, image callbacks, and dynamic menus.
- Improved callback diagnostics so signature mismatches are detected instead of checking callback names only.
- Improved diagnostics for duplicate IDs, missing embedded images, invalid static `size` values, and conflicting static/dynamic attributes.
- Improved RibbonX structure validation for tabs, contextual tabs, tab sets, and groups.

### Office 2007 and modern RibbonX handling
- Corrected automatic selection and registration of `customUI/customUI.xml` for Office 2007 and `customUI/customUI14.xml` for Office 2010+.
- Improved creation of legacy and modern Ribbon templates so the correct namespace and package path are used.

### VBA editing workflow
- Improved VBA module saving so edits are written with fewer repeated Office automation sessions.
- Reduced visible Excel, Word, and PowerPoint launches during normal VBA save and callback-generation workflows.
- Improved VBA module cache synchronization after successful saves.

### Product and website transition
- Completed the public product rename to **Ribbon UI Studio**.
- Moved the canonical GitHub Pages site to `https://fernand21.github.io/ribbon-ui-studio/`.
- Updated the website to read the current version, release date, asset names, asset sizes, direct download links, and download totals automatically from GitHub Releases.
