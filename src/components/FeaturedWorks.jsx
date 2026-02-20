import "../Styles/featuredWorks.css";

const works = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    description:
      "Complete redesign and rebuild of a high-traffic e-commerce platform with performance optimization and modern UI architecture.",
    results: ["+140% Conversion Rate", "2.3s Load Time", "35% Revenue Growth"]
  },
  {
    id: 2,
    title: "AI-Powered SaaS Analytics Platform",
    category: "Product Engineering",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    description:
      "Designed and developed a scalable SaaS analytics system with real-time data visualization and AI-driven insights.",
    results: ["Enterprise Architecture", "Real-Time Processing", "Scalable Cloud Infrastructure"]
  },
  {
    id: 3,
    title: "Digital Marketing Growth System",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    description:
      "Built a performance-driven marketing ecosystem combining SEO, landing optimization and analytics automation.",
    results: ["3x Lead Generation", "+220% Organic Traffic", "High ROI Campaigns"]
  }
];

export default function FeaturedWorks() {
  return (
    <section className="featured-section">
      <div className="featured-container">

        <div className="featured-header">
          <p className="featured-eyebrow">FEATURED WORK</p>
          <h2>
            Real Projects. <br /> Real Impact.
          </h2>
          <p className="featured-sub">
            A selection of digital experiences crafted with strategy,
            creativity and engineering precision.
          </p>
        </div>

        <div className="featured-list">
          {works.map((work, index) => (
            <div
              key={work.id}
              className={`featured-item ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
            >
              <div className="featured-image">
                <img src={work.image} alt={work.title} />
              </div>

              <div className="featured-content">
                <span className="featured-category">
                  {work.category}
                </span>

                <h3>{work.title}</h3>

                <p className="featured-desc">
                  {work.description}
                </p>

                <div className="featured-results">
                  {work.results.map((result, i) => (
                    <div key={i} className="result-badge">
                      {result}
                    </div>
                  ))}
                </div>

                <button className="featured-btn">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
