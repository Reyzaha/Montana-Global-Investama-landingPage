import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-background">
          <Image
            src="/hero-city.jpg"
            alt="Montana Global Investama"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-copy">
            <span className="hero-eyebrow">
              Montana Global Investama
            </span>

            <h1 className="hero-title">
              Strategic Investment
              <br />
              <span>Partner.</span>
            </h1>

            <p className="hero-description">
              Montana Global Investama is a strategic investment company
              focused on identifying, developing, and building partnerships
              around business opportunities with long-term value potential.
            </p>

            <div className="hero-actions">
              <Link href="/investment" className="button-primary">
                Explore Investments
              </Link>

              <Link href="/about" className="button-secondary">
                About Montana
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Our Positioning</p>

          <h2 className="section-title">
            Connecting Capital
            <br />
            With Opportunity.
          </h2>

          <p className="section-description">
            Montana works across sectors to identify opportunities, assess
            their commercial potential, and build strategic relationships
            between capital, business owners, project owners, and strategic
            partners.
          </p>
        </div>
      </section>
    </div>
  );
}