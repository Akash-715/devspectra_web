import { useRef } from "react";
import "../Styles/servicesPage.css";

const services = [
  {
    id: "web",
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    description:
      "We build scalable, high-performance digital platforms tailored for business growth.",
    points: [
      "Custom Web Applications",
      "E-Commerce Platforms",
      "Progressive Web Apps",
      "API Architecture",
      "Cloud Deployment"
    ]
  },
  {
    id: "ui",
    title: "UI / UX Design",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    description:
      "We craft intuitive, visually powerful experiences that enhance usability and engagement.",
    points: [
      "User Research",
      "Wireframes & Prototypes",
      "Design Systems",
      "Conversion Optimization",
      "Mobile-first Design"
    ]
  },
  {
    id: "portfolio",
    title: "Brand Websites",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
    description:
      "We create high-impact brand websites that communicate authority and convert visitors.",
    points: [
      "Corporate Sites",
      "Startup Landing Pages",
      "Personal Branding",
      "Performance Optimization",
      "SEO Foundation"
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description:
      "We drive measurable growth through performance-focused marketing strategies.",
    points: [
      "SEO & Content Strategy",
      "Paid Campaigns",
      "Analytics & Tracking",
      "Funnel Optimization",
      "Growth Experiments"
    ]
  }
];

export default function ServicesPage() {
  const detailRefs = useRef({});

  const scrollToSection = (id) => {
    detailRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section className="services-page">
      <div className="services-container">

        <div className="services-header">
          <p className="eyebrow">OUR SERVICES</p>
          <h1>Solutions Designed For Growth</h1>
          <p>
            Explore how we transform ideas into powerful digital experiences.
          </p>
        </div>

        {/* LARGE SLANTED CARDS */}
        <div className="cards-row">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => scrollToSection(service.id)}
              style={{
                transform: `rotate(-10deg) translateX(${index * -40}px)`
              }}
            >
              <img src={service.image} alt={service.title} />
              <div className="card-title">
                {service.title}
              </div>
            </div>
          ))}
        </div>

        {/* DETAIL SECTIONS */}
        <div className="detail-wrapper">
          {services.map((service) => (
            <div
              key={service.id}
              ref={(el) => (detailRefs.current[service.id] = el)}
              className="detail-section"
            >
              <h2>{service.title}</h2>
              <p>{service.description}</p>

              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}