type SeoLandingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title:string; body:string }[];
  bullets: string[];
};

export default function SeoLanding({ eyebrow, title, intro, sections, bullets }: SeoLandingProps) {
  return <main>
    <header className="site-header">
      <a className="brand" href="../"><span className="brand-glyph" aria-hidden="true"><i/><i/><i/></span>Ribbon UI Studio</a>
      <nav aria-label="Main navigation"><a href="../#download">Download</a><a href="../#docs">Documentation</a><a href="../#screenshots">Screenshots</a><a href="../#versions">Versions</a></nav>
      <a className="header-github" href="https://github.com/fernand21/ribbon-ui-studio" target="_blank" rel="noreferrer">GitHub ↗</a>
    </header>

    <section className="hero" style={{minHeight:"520px",gridTemplateColumns:"1fr",maxWidth:"980px"}}>
      <div className="hero-copy">
        <p className="eyebrow"><span/>{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-lede">{intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="../#download">Download Ribbon UI Studio <span>↓</span></a>
          <a className="button button-secondary" href="../#manual">Read the complete guide <span>→</span></a>
        </div>
        <p className="fine-print">Free to download and use on Windows · Independent software for Microsoft Office</p>
      </div>
    </section>

    <section className="section">
      <div className="section-heading"><p className="eyebrow">Built for real Office workflows</p><h2>What Ribbon UI Studio gives you</h2><p>Use a visual workspace without giving up access to the underlying RibbonX XML, VBA callbacks and Office package structure.</p></div>
      <div className="feature-list" style={{marginTop:"42px"}}>{sections.map((item,index)=><article key={item.title}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
    </section>

    <section className="dark-section">
      <div className="section-heading"><p className="eyebrow">Developer workflow</p><h2>More than a text editor for customUI XML.</h2></div>
      <ul style={{maxWidth:"820px",lineHeight:1.9,color:"#c9d6dd",fontSize:"15px"}}>{bullets.map(item=><li key={item}>{item}</li>)}</ul>
      <div className="hero-actions" style={{marginTop:"30px"}}><a className="button button-primary" href="../">Explore Ribbon UI Studio →</a><a className="button" href="https://github.com/fernand21/ribbon-ui-studio/releases/latest" target="_blank" rel="noreferrer" style={{color:"white"}}>Open latest release ↗</a></div>
    </section>

    <footer style={{padding:"40px 30px",textAlign:"center",color:"#63727c",fontSize:"12px"}}>Ribbon UI Studio is an independent project and is not affiliated with Microsoft. Microsoft Office product names are used only to describe compatibility.</footer>
  </main>;
}
