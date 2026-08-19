import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Contact</p>

          <h1 className="section-title">
            Let&apos;s Discuss
            <br />
            An Opportunity.
          </h1>

          <p className="section-description">
            Whether you are an investor, business owner, project owner,
            or strategic partner, connect with Montana Global Investama
            to discuss potential opportunities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Get In Touch</p>

              <h2 className="section-title">
                Start A
                <br />
                Conversation.
              </h2>

              <p className="section-description">
                Our team can discuss investment opportunities,
                strategic partnerships, and potential business
                collaborations.
              </p>
            </div>

            <div className="contact-card">
              <h2>Montana Global Investama</h2>

              <div className="contact-item">
                <p className="contact-label">Company</p>

                <p className="contact-value">
                  PT Montana Global Investama
                </p>
              </div>

              <div className="contact-item">
                <p className="contact-label">Email</p>

                <p className="contact-value">
                  Contact information to be confirmed
                </p>
              </div>

              <div className="contact-item">
                <p className="contact-label">WhatsApp</p>

                <p className="contact-value">
                  Contact information to be confirmed
                </p>
              </div>

              <div className="contact-item">
                <p className="contact-label">Office</p>

                <p className="contact-value">
                  Company address to be confirmed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}