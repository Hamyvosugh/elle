import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-orb" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-eyebrow">Kosmetik · Massage · Selfcare</p>
        <h1 id="hero-title">
          Weniger Stress,
          <br />
          mehr <em>Schönheit.</em>
        </h1>
        <p className="hero-description">
          Sanfte Rituale für natürliche Schönheit, tiefe Entspannung und ein
          gutes Gefühl in deiner Haut.
        </p>
        <div className="hero-actions">
          <Link className="hero-button" href="tel:+491788424521">
            Termin buchen
          </Link>
          <Link className="hero-link" href="#behandlungen">
            Behandlungen entdecken <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <p className="hero-scroll" aria-hidden="true">
        Scroll to explore <span>↓</span>
      </p>
    </section>
  );
}
