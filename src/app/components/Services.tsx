const services = [
  {
    number: "01",
    title: "Ganzkörpermassage",
    description: "Eine wohltuende Massage für tiefe Entspannung und neue Energie.",
    duration: "60 Min. · 99$",
  },
  {
    number: "02",
    title: "Lashlift",
    description: "Natürlich geschwungene Wimpern für einen offenen, frischen Blick.",
    duration: "45$",
  },
  {
    number: "03",
    title: "Spaweekend",
    description: "Inklusive Massage, Getränk und Verpflegung – deine komplette Auszeit.",
    duration: "249$",
  },
  {
    number: "04",
    title: "Lippenhylase",
    description: "Eine gezielte Behandlung für ein gepflegtes und harmonisches Lippenbild.",
    duration: "300$",
  },
  {
    number: "05",
    title: "Hand- und Fußmassage",
    description: "Entspannung für Hände und Füße mit wohltuenden, ruhigen Griffen.",
    duration: "60 Min. · 80$",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="behandlungen" aria-labelledby="services-title">
      <div className="services-intro">
        <p className="section-label">Meine Leistungen</p>
        <h2 id="services-title">
          Pflege, die sich <em>gut</em> anfühlt.
        </h2>
        <p>
          Jede Behandlung beginnt mit Zeit für dich – aufmerksam, persönlich
          und mit Liebe zum Detail.
        </p>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <span className="service-duration">{service.duration}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
