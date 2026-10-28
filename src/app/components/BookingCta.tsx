import Link from "next/link";

export default function BookingCta() {
  return (
    <section className="booking-cta" aria-labelledby="booking-cta-title">
      <div className="booking-cta-inner">
        <p className="section-label">Exklusive Selfcare</p>
        <h2 id="booking-cta-title">
          Deine Zeit.
          <br />
          Dein <em>Ritual.</em>
        </h2>
        <p>
          Ein persönlicher Moment nur für dich – ruhig, bewusst und ganz nach
          deinen Bedürfnissen.
        </p>
        <Link className="booking-cta-button" href="tel:+491788424521">
          Private Session buchen <span aria-hidden="true">↗</span>
        </Link>
        <p className="booking-cta-phone">0178 8424521</p>
      </div>
    </section>
  );
}
