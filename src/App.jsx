import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const handler = () => {
      const sel = window.getSelection?.();
      if (sel && sel.toString().length > 0) {
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const oscillator = ctx.createOscillator();
          const gain = ctx.createGain();
          gain.gain.value = 0; // silent scream
          oscillator.connect(gain).connect(ctx.destination);
          oscillator.type = "sawtooth";
          oscillator.start();
          setTimeout(() => {
            oscillator.stop();
            ctx.close();
          }, 200);
        } catch {}
      }
    };
    document.addEventListener("selectionchange", handler);
    return () => document.removeEventListener("selectionchange", handler);
  }, []);

  const handleCopyAlert = () => {
    alert("cope");
  };

  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <img src="/logo.png" alt="Anus LLC Logo" className="logo" />
        <h1 className="hero-title">ANUS LLC</h1>
        <p className="hero-sub">“A Wyoming Limited Liability Company”</p>
        <a
          href="https://x.com/i/communities/1993625715208552611"
          className="btn-join"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Us
        </a>
      </section>

      <hr />

      {/* Mission Statement */}
      <section id="content" className="mission">
        <p className="mission-text">
          “Anus LLC was founded in 2025 when Chase (@therealchaseeb) tweeted the
          funniest corporate name in human history and 40,000 degens decided to
          make it real. Purpose: To legally separate serious financial losses
          from people who still can’t pronounce ‘Solana’ correctly. We hold
          digital assets so you don’t have to admit you hold them.”
        </p>
      </section>

      <hr />

      {/* The Token */}
      <section className="token">
        <h2 className="token-title">$ANUS</h2>
        <p className="token-sub">
          Ticker: $ANUS &nbsp;&nbsp;&nbsp;&nbsp; Chain: Solana
          &nbsp;&nbsp;&nbsp;&nbsp; Supply: 1,000,000,000
        </p>
        <p className="contract">
          <code>FQFG4tnMAiAZaFKqRcSNY6J6vZyLkW2GpbSLERFePXKh</code>
        </p>
        <button className="btn-copy" onClick={handleCopyAlert}>
          Copy CA
        </button>
      </section>

      <hr />

      {/* Legal Disclaimer */}
      <section className="legal">
        <p className="legal-text">
          “Anus LLC is a real registered Wyoming LLC. No, really. We have the
          PDF. This is not financial advice. This is not advice of any kind.
          This is barely English. Chase is not affiliated, he is simply the
          messiah who spoke the name. By reading this far you agree that if
          $ANUS goes to zero it’s your fault for having no humor. Not affiliated
          with actual anuses (yet).”
        </p>
      </section>

      <hr />

      {/* Team */}
      <section className="team">
        <h3 className="team-title">Leadership</h3>
        <p>Founder &amp; Visionary Prophet: Chase (not actually involved)</p>
        <p>Chief Executive Officer: Anonymous Degen #42069</p>
        <p>Chief Financial Officer: The Voices</p>
      </section>

      <hr />

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2025 Anus LLC | All Rights Reserved | Wyoming Registered Agent paid
          in $ANUS | Whitepaper: there isn’t one, grow up
        </p>
      </footer>
    </div>
  );
}
