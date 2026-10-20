import { ArrowUpRight } from "lucide-react";

function Navigation() {
  return (
    <header className="site-header">
      <nav className="glass-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#home" aria-label="Portfolio home">
          <span className="wordmark-mark" aria-hidden="true">{"\u2733"}</span>
          <span>Folio<span className="wordmark-period">.</span></span>
        </a>
        <div className="nav-actions">
          <p className="availability">
            <span className="availability-dot" aria-hidden="true" />
            Open to select projects
          </p>
          <a className="nav-contact" href="mailto:">
            {"Let\u2019s talk"} <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="artwork" aria-hidden="true">
      <div className="artwork-grid" />
      <div className="artwork-glow" />
      <div className="orbit orbit--outer" />
      <div className="orbit orbit--inner" />
      <div className="hero-sphere">
        <div className="sphere-highlight" />
        <div className="sphere-shadow" />
      </div>
      <div className="artwork-label artwork-label--top">FORM / FUNCTION / FEELING</div>
      <div className="artwork-label artwork-label--bottom">
        <span>01</span>
        <span>Digital craft, in motion</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span>Creative developer</span>
              <span className="eyebrow-divider" aria-hidden="true">/</span>
              <span>Full-stack developer</span>
            </p>
            <h1 id="hero-title">
              Digital work
              <br />
              with <em>dimension.</em>
            </h1>
            <p className="hero-description">
              I shape expressive interfaces and dependable digital products,
              bringing a considered idea all the way to the browser.
            </p>
            <a className="hero-cta" href="mailto:">
              Start a conversation
              <span className="cta-icon"><ArrowUpRight aria-hidden="true" size={17} /></span>
            </a>
            <p className="hero-footnote">
              <span>Independent practice</span>
              <span className="footnote-divider" aria-hidden="true">{"\u00b7"}</span>
              <span>Design through development</span>
            </p>
          </div>
          <HeroArtwork />
          <div className="hero-index" aria-hidden="true">
            <span>SCROLL TO EXPLORE</span>
            <span className="index-line" />
            <span>{"001 \u2014 008"}</span>
          </div>
        </section>
      </main>
    </>
  );
}
