const latestRelease = "https://github.com/fernand21/office-ribbon-editor/releases/latest";
const allReleases = "https://github.com/fernand21/office-ribbon-editor/releases";
const repository = "https://github.com/fernand21/office-ribbon-editor";

const features = [
  ["Schema-aware editing", "Author RibbonX for Office 2007 and Office 2010+ with validation close at hand."],
  ["Built-in icon workflow", "Inspect, add, replace, and preview custom images without unpacking Office files by hand."],
  ["Callback helpers", "Generate callback signatures and move from XML to VBA or .NET code with fewer interruptions."],
];

const releases = [
  ["1.0.0", "First public release", "The initial official release includes a Windows installer and a portable ZIP package."],
];

function GithubMark() {
  return <span className="github-mark" aria-hidden="true">GH</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Office Ribbon Editor home">
          <span className="brand-glyph" aria-hidden="true"><i /><i /><i /></span>
          <span>Office Ribbon Editor</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#download">Download</a>
          <a href="#docs">Documentation</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#versions">Versions</a>
        </nav>
        <a className="header-github" href={repository} target="_blank" rel="noreferrer"><GithubMark /> GitHub</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Free to download and use on Windows</p>
          <h1>Design the Office ribbon<br />without fighting the XML.</h1>
          <p className="hero-lede">A focused desktop editor for creating and maintaining RibbonX customizations in Excel, Word, PowerPoint, and other Office files.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={latestRelease} target="_blank" rel="noreferrer">Download latest release <span>↓</span></a>
            <a className="button button-secondary" href="#docs">Read the quick start <span>→</span></a>
          </div>
          <p className="fine-print">Free distribution via GitHub Releases · Windows desktop application</p>
        </div>
        <div className="editor-window" aria-label="Illustration of the Office Ribbon Editor interface">
          <div className="window-title"><span className="app-mini">R</span> Office RibbonX Editor <b>— sample.xlsm</b><i>— □ ✕</i></div>
          <div className="window-menu">File&nbsp;&nbsp;&nbsp; Edit&nbsp;&nbsp;&nbsp; View&nbsp;&nbsp;&nbsp; Insert&nbsp;&nbsp;&nbsp; Help</div>
          <div className="window-toolbar"><span>⌕</span><span>✓</span><span>↶</span><span>↷</span><em /><small>Office 2010+</small></div>
          <div className="workspace">
            <aside><strong>Custom UI</strong><p>⌄ customUI14.xml</p><p className="tree-indent">⌄ ribbon</p><p className="tree-indent2">⌄ tabs</p><p className="selected">▣ tabHome</p><p className="tree-indent2">▦ groupTools</p><p className="tree-indent2">▤ buttonRun</p></aside>
            <div className="code"><div className="code-tabs"><span>customUI14.xml</span><span>Preview</span></div><pre><b>1</b>  <u>&lt;customUI</u> xmlns=<q>&quot;.../2009/07/customui&quot;</q><u>&gt;</u>{'\n'}<b>2</b>    <u>&lt;ribbon&gt;</u>{'\n'}<b>3</b>      <u>&lt;tabs&gt;</u>{'\n'}<b>4</b>        <u>&lt;tab</u> id=<q>&quot;tabHome&quot;</q> label=<q>&quot;Workspace&quot;</q><u>&gt;</u>{'\n'}<b>5</b>          <u>&lt;group</u> id=<q>&quot;groupTools&quot;</q><u>&gt;</u>{'\n'}<b>6</b>            <u>&lt;button</u> id=<q>&quot;buttonRun&quot;</q>{'\n'}<b>7</b>              label=<q>&quot;Run report&quot;</q>{'\n'}<b>8</b>              size=<q>&quot;large&quot;</q>{'\n'}<b>9</b>              onAction=<q>&quot;RunReport&quot;</q> <u>/&gt;</u></pre></div>
          </div>
          <div className="status">✓ XML is valid <span>Ln 9, Col 42&nbsp;&nbsp; UTF-8</span></div>
        </div>
      </section>

      <section className="trust-strip"><span>Made for</span><b>Excel</b><b>Word</b><b>PowerPoint</b><b>Access</b><b>Office Open XML</b></section>

      <section className="section" id="download">
        <div className="section-heading"><p className="eyebrow">Get the editor</p><h2>Choose the build that fits.</h2><p>Official packages are hosted on GitHub Releases with a clear, versioned download history.</p></div>
        <div className="download-grid">
          <article className="download-card featured"><div className="card-top"><span>Recommended</span><small>v1.0.0</small></div><h3>Windows installer</h3><p>The simplest setup for most Windows users. Includes the required runtime and adds the editor to your installed apps.</p><ul><li>Guided installation</li><li>Required runtime included</li><li>No separate setup needed</li></ul><a href={latestRelease} target="_blank" rel="noreferrer">Open latest release <span>↗</span></a></article>
          <article className="download-card"><div className="card-icon">ZIP</div><h3>Portable package</h3><p>Extract and run without installation. Useful for restricted machines, USB toolkits, or keeping the application in a project folder.</p><ul><li>Portable ZIP archive</li><li>Required runtime included</li><li>No Start menu entry</li></ul><a href={latestRelease} target="_blank" rel="noreferrer">View release assets <span>↗</span></a></article>
          <article className="download-card muted"><div className="card-icon">HELP</div><h3>Questions or problems?</h3><p>Use the official issue tracker if you encounter a reproducible problem while installing or editing an Office file.</p><ul><li>Search known issues</li><li>Report reproducible bugs</li><li>Follow future releases</li></ul><a href={`${repository}/issues`} target="_blank" rel="noreferrer">Open issue tracker <span>↗</span></a></article>
        </div>
        <p className="download-note"><strong>Before you install:</strong> Close any open Office documents and keep a backup of files before editing their custom UI.</p>
      </section>

      <section className="dark-section" id="docs">
        <div className="section-heading"><p className="eyebrow">Documentation</p><h2>From file to custom ribbon<br />in four clear steps.</h2></div>
        <ol className="steps">
          <li><span>01</span><div><h3>Open an Office file</h3><p>Start with a macro-enabled or Open XML document such as XLSM, XLAM, DOCM, or PPTM.</p></div></li>
          <li><span>02</span><div><h3>Add the RibbonX part</h3><p>Choose the Office 2007 or Office 2010+ schema and add a custom UI part to the file.</p></div></li>
          <li><span>03</span><div><h3>Write and validate XML</h3><p>Define tabs, groups, and controls. Validate before saving to catch schema issues early.</p></div></li>
          <li><span>04</span><div><h3>Connect callbacks and test</h3><p>Add VBA or .NET callbacks, save, then reopen the document in Office to test the ribbon.</p></div></li>
        </ol>
        <div className="docs-links"><a href={`${repository}#readme`} target="_blank" rel="noreferrer"><strong>Complete project guide</strong><span>Installation, editing, callbacks, and advanced workflows →</span></a><a href={`${repository}/issues`} target="_blank" rel="noreferrer"><strong>Troubleshooting & issues</strong><span>Search known problems or report a reproducible bug →</span></a></div>
      </section>

      <section className="section screenshots" id="screenshots">
        <div className="section-heading"><p className="eyebrow">Inside the app</p><h2>A practical workspace,<br />built around RibbonX.</h2></div>
        <div className="feature-list">{features.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="shot-grid"><div className="shot shot-code"><span>XML editor</span><pre>&lt;group id=&quot;reports&quot;&gt;{`\n`}  &lt;button label=&quot;Run&quot; /&gt;{`\n`}&lt;/group&gt;</pre></div><div className="shot shot-icons"><span>Icon browser</span><div>{["A","★","✓","↗","◆","☰","+","?"] .map((x,i)=><i key={i}>{x}</i>)}</div></div><div className="shot shot-callback"><span>Callback generator</span><p>Sub RunReport(control As IRibbonControl)</p><p className="cursor">&nbsp;</p><p>End Sub</p></div></div>
      </section>

      <section className="section version-section" id="versions">
        <div className="section-heading"><p className="eyebrow">Version history</p><h2>Every release, preserved.</h2><p>Use the current generation when possible. Older packages remain available for compatible environments and reproducible projects.</p></div>
        <div className="timeline">{releases.map(([version, label, copy], index) => <article key={version} className={index === 0 ? "current" : ""}><div><b>{version}</b><span>{label}</span></div><p>{copy}</p>{index === 0 && <i>Active</i>}</article>)}</div>
        <a className="button button-secondary release-button" href={allReleases} target="_blank" rel="noreferrer">View complete history on GitHub <span>↗</span></a>
      </section>

      <section className="license-section" id="license">
        <div><p className="eyebrow">Looking ahead</p><h2>Free today. Clear about tomorrow.</h2></div>
        <div><p>Office Ribbon Editor is proprietary software distributed free of charge through its official GitHub Releases page. The application is free to download and use, but its source code is not published. A future licensing area is reserved for optional support or enterprise offerings.</p><span className="planned">Free proprietary software</span></div>
      </section>

      <footer><div className="brand"><span className="brand-glyph" aria-hidden="true"><i /><i /><i /></span><span>Office Ribbon Editor</span></div><p>Independent proprietary software for Microsoft Office, distributed free of charge. Not affiliated with Microsoft.</p><nav><a href={repository} target="_blank" rel="noreferrer">Product</a><a href={`${repository}/issues`} target="_blank" rel="noreferrer">Issues</a><a href={allReleases} target="_blank" rel="noreferrer">Releases</a><a href="#license">Licensing</a></nav></footer>
    </main>
  );
}
