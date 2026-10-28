import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <p className="footer-eyebrow">Kosmetik · Massage · Selfcare</p>
          <p className="footer-logo">ELLE</p>
          <p className="footer-tagline">Weniger Stress, mehr Schönheit.</p>
        </div>
        <div className="footer-column">
          <p className="footer-heading">Entdecken</p>
          <Link href="#behandlungen">Leistungen</Link>
          <Link href="#about">Über Elle</Link>
          <Link href="#booking-cta-title">Termin buchen</Link>
        </div>
        <div className="footer-column">
          <p className="footer-heading">Kontakt</p>
          <a href="tel:+491788424521">0178 8424521</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Elle</span>
        <div><Link href="#impressum">Impressum</Link><Link href="#datenschutz">Datenschutz</Link></div>
      </div>
    </footer>
  );
}
