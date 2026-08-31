"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Check, Menu, Sparkles, X } from "lucide-react";

const products = [
  { no: "01", type: "FLOOR CARE", name: "Pine & Lemongrass", copy: "Refreshing pine and lemongrass freshness for an inviting everyday clean.", tone: "green", image: "/products/pine-lemongrass.png" },
  { no: "02", type: "FLOOR CARE", name: "White Floor Cleaner", copy: "Everyday floor care with a fresh pine character and clean finish.", tone: "cream", image: "/products/white-floor-cleaner.png" },
  { no: "03", type: "BATHROOM CARE", name: "Toilet Cleaner", copy: "Purpose-built bathroom cleaning for tough stains and a visibly clean finish.", tone: "mint", image: "/products/toilet-cleaner.png" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <header className="nav">
        <a href="#home" className="logo"><span>MG</span><b>MR GLOWRA</b></a>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#products" onClick={() => setOpen(false)}>Products</a>
          <a href="#story" onClick={() => setOpen(false)}>Our Story</a>
          <a href="#why" onClick={() => setOpen(false)}>Why Glowra</a>
          <a href="#distributor" onClick={() => setOpen(false)}>Distributors</a>
          <a className="nav-pill" href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-noise" />
          <div className={`hero-copy ${loaded ? "show" : ""}`}>
            <div className="eyebrow">MADE IN UTTARAKHAND <i /> PREMIUM HOME CARE</div>
            <h1>Power that <em>shines.</em><br />Freshness that lasts.</h1>
            <p>Premium floor and toilet care created for modern homes that expect a beautiful finish, effective everyday cleaning and freshness they can feel.</p>
            <div className="actions"><a className="button primary" href="#products">Explore products <ArrowRight size={17} /></a><a className="button outline" href="#distributor">Become a distributor</a></div>
            <div className="hero-meta"><span><Check size={13} /> Everyday floor care</span><span><Check size={13} /> Fresh pine character</span></div>
          </div>

          <div className={`hero-product ${loaded ? "show" : ""}`}>
            <div className="sun" />
            <div className="leaf leaf-a" /><div className="leaf leaf-b" />
            <div className="bottle back"><div className="cap" /><div className="label"><small>MR</small><strong>GLOWRA</strong><span>FLOOR CARE</span></div></div>
            <div className="bottle front"><div className="cap" /><div className="label"><small>MR</small><strong>GLOWRA</strong><span>PINE + LEMONGRASS</span><b>FLOOR CLEANER</b><i>1 L</i></div></div>
            <div className="round-badge"><Sparkles size={17} /><b>PURE<br />FRESHNESS</b></div>
          </div>
          <a className="scroll" href="#story">SCROLL <ArrowDown size={15} /></a>
        </section>

        <section id="story" className="statement section">
          <div className="kicker">THE GLOWRA IDEA</div>
          <div className="statement-grid"><h2>Clean should feel<br /><em>good.</em></h2><div><p>Mr Glowra brings thoughtful formulas, fresh fragrance and premium presentation together — because the products you use every day deserve to feel special.</p><a className="under-link" href="#products">Meet the collection <ArrowRight size={15} /></a></div></div>
        </section>

        <section id="products" className="products section">
          <div className="heading-row"><div><div className="kicker">THE COLLECTION</div><h2>Choose your <em>clean.</em></h2></div><p>Three essentials. One simple promise: make everyday cleaning better.</p></div>
          <div className="cards">
            {products.map((p) => <article className={`product-card ${p.tone}`} key={p.no}>
              <div className="card-no">{p.no}</div>
              <div className="product-visual">
                <div className="bottle card-bottle"><div className="cap" /><div className="label"><small>MR</small><strong>GLOWRA</strong><span>{p.name.toUpperCase()}</span></div></div>
              </div>
              <div className="product-copy"><span>{p.type}</span><h3>{p.name}</h3><p>{p.copy}</p><a href="#contact">Product details <ArrowRight size={14} /></a></div>
            </article>)}
          </div>
        </section>

        <section id="why" className="dark-section">
          <div className="dark-image"><div className="image-shade" /><div className="image-tag">PINE <b>×</b> LEMONGRASS</div></div>
          <div className="dark-copy"><div className="kicker light">NATURE MEETS PERFORMANCE</div><h2>A little forest<br />in every <em>clean.</em></h2><p>Pine gives the collection its deep, clean character. Lemongrass brings a bright, uplifting note. Together, they turn a routine floor clean into a fresher home ritual.</p><div className="feature-list"><div><b>01</b><span>Fresh<br />fragrance</span></div><div><b>02</b><span>Everyday<br />floor care</span></div><div><b>03</b><span>Made in<br />Uttarakhand</span></div></div></div>
        </section>

        <section className="values section"><div className="kicker">WHY MR GLOWRA</div><h2>Small details.<br /><em>Big difference.</em></h2><div className="value-grid"><div><span>01</span><h3>Premium feel</h3><p>Modern design and a considered product experience from bottle to finish.</p></div><div><span>02</span><h3>Fresh character</h3><p>Pine and lemongrass notes designed to leave your space feeling refreshed.</p></div><div><span>03</span><h3>Made locally</h3><p>Proudly built in Uttarakhand with an ambition to reach homes across India.</p></div></div></section>

        <section id="distributor" className="distributor"><div className="rings" /><div className="kicker">GROW WITH MR GLOWRA</div><h2>Bring the power of <em>Glowra</em><br />to your market.</h2><p>Partner with a growing home-care brand and bring premium everyday cleaning to more customers.</p><a className="button dark-button" href="#contact">Apply for distributorship <ArrowRight size={17} /></a></section>

        <section id="contact" className="contact section"><div><div className="kicker">LET'S CONNECT</div><h2>Ready to make<br />cleaning <em>shine?</em></h2></div><div className="contact-box"><p>For product enquiries, distribution and partnerships.</p><a href="mailto:hello@mrglowra.com">hello@mrglowra.com</a><a href="tel:+919999999999">+91 99999 99999</a></div></section>
      </main>

      <footer><a href="#home" className="logo dark-logo"><span>MG</span><b>MR GLOWRA</b></a><p>Power That Shines! · Made in Uttarakhand</p><small>© 2026 Mr Glowra. All Rights Reserved.</small></footer>
    </>
  );
}
