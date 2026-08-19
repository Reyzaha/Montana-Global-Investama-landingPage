import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">About Montana</p>

          <h1 className="section-title">
            Building Strategic
            <br />
            Business Opportunities.
          </h1>

          <p className="section-description">
            Montana Global Investama is positioned as a Strategic Investment
            Company focused on identifying, analyzing, developing, and
            partnering in strategic business opportunities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <p className="eyebrow">Who We Are</p>

              <h2 className="section-title">
                Capital.
                <br />
                Opportunity.
                <br />
                Partnership.
              </h2>
            </div>

            <div className="about-copy">
              <p>
                Montana Global Investama works at the intersection of capital
                and business opportunity.
              </p>

              <p>
                Our approach is focused on identifying opportunities with
                sound commercial fundamentals, assessing their potential, and
                developing strategic partnerships that can create sustainable
                value.
              </p>

              <p>
                Montana takes a multi-sector approach, allowing the company
                to evaluate opportunities dynamically based on business
                fundamentals, market conditions, risk, and long-term value
                creation.
              </p>

              <div className="info-list">
                <div className="info-item">
                  <span className="info-label">Company</span>

                  <span className="info-value">
                    PT Montana Global Investama
                  </span>
                </div>

                <div className="info-item">
                  <span className="info-label">Positioning</span>

                  <span className="info-value">
                    Strategic Investment Company
                  </span>
                </div>

                <div className="info-item">
                  <span className="info-label">Approach</span>

                  <span className="info-value">
                    Multi-Sector Investment
                  </span>
                </div>

                <div className="info-item">
                  <span className="info-label">Leadership</span>

                  <span className="info-value">
                    Alexander Jordan — Director
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Our Partners</p>

          <h2 className="section-title">
            Working Across
            <br />
            The Opportunity Ecosystem.
          </h2>

          <div className="about-grid" style={{ marginTop: 50 }}>
            <div className="about-copy">
              <p>
                Montana seeks to build relationships with parties across the
                business ecosystem.
              </p>
            </div>

            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Capital</span>
                <span className="info-value">
                  Individual, corporate, and institutional investors
                </span>
              </div>

              <div className="info-item">
                <span className="info-label">Business</span>
                <span className="info-value">
                  Business owners and strategic partners
                </span>
              </div>

              <div className="info-item">
                <span className="info-label">Projects</span>
                <span className="info-value">
                  Project owners and operators
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}