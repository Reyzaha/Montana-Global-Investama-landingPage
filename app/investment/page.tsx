import Image from "next/image";
import Link from "next/link";
import { investmentProjects } from "@/data/investment";

export default function InvestmentPage() {
  return (
    <main className="investment-page">
      <section className="investment-hero">
        <div className="container">
          <div>
            <p className="eyebrow">Investment opportunities</p>
            <h1>Choose your next opportunity</h1>
            <p className="investment-intro">
              Explore selected strategic projects from Montana Global Investama.
            </p>
          </div>
        </div>
      </section>

      <section className="investment-list">
        <div className="container">
          <div className="investment-grid">
            {investmentProjects.map((project) => {
              const isAvailable = project.status === "running";
              const fundedPercent = isAvailable ? 65 : 0;

              return (
                <article key={project.slug} className="investment-card">
                <Link
                  href={`/investment/${project.slug}`}
                  className="investment-image"
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} - Montana Global Investama`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="investment-image-content"
                  />

                  <div className="investment-image-overlay" />
                  <div className="investment-image-copy">
                    <h2>{project.name}</h2>
                    <span>{project.category}</span>
                  </div>
                </Link>

                <div className="investment-card-content">
                  <div className="investment-funding-head">
                    <span>Funded</span>
                    <span className={isAvailable ? "funding-open" : "funding-soon"}>
                      {isAvailable ? "Open" : "Coming soon"}
                    </span>
                  </div>

                  <div className="investment-progress" aria-label={`${fundedPercent}% funded`}>
                    <span style={{ width: `${fundedPercent}%` }} />
                  </div>

                  <div className="investment-funding-value">
                    <strong>{project.minimumInvestment}</strong>
                    <span>{fundedPercent}% funded</span>
                  </div>

                  <div className="investment-rule" />

                  <div className="investment-meta">
                    <Metric label="Location" value="Indonesia" />
                    <Metric label="Category" value={project.category} />
                    <Metric label="Target" value={project.requirement ?? "To be announced"} />
                    <Metric label="Tenor" value={project.period} />
                    <Metric label="Returns" value={project.simulatedReturn ?? "To be announced"} />
                    <Metric label="Risk" value={isAvailable ? "Medium" : "Pending"} />
                  </div>

                  <Link
                    href={`/investment/${project.slug}`}
                    className="investment-button"
                  >
                    More detail
                  </Link>
                </div>
                </article>
              );
            })}
          </div>

          {investmentProjects.length === 0 && (
            <div className="investment-empty">
              <p>No investment projects available.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="investment-metric">
      <span className="investment-metric-label">{label}</span>
      <strong className="investment-metric-value">{value}</strong>
    </div>
  );
}