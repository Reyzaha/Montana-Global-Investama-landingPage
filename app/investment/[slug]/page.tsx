import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getInvestmentBySlug,
  investments,
} from "@/data/investment";

type InvestmentDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return investments.map((investment) => ({
    slug: investment.slug,
  }));
}

export async function generateMetadata({
  params,
}: InvestmentDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getInvestmentBySlug(slug);

  if (!project) {
    return {
      title: "Investment",
    };
  }

  return {
    title: project.name,
    description: project.overview,
  };
}

export default async function InvestmentDetailPage({
  params,
}: InvestmentDetailPageProps) {
  const { slug } = await params;

  const project = getInvestmentBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page">
      {/* =========================================
          DETAIL HERO
      ========================================= */}

      <section className="detail-hero">
        <div className="container">
          <Link
            href="/investment"
            style={{
              display: "inline-flex",
              marginBottom: 35,
              color: "#667085",
              fontSize: 12,
            }}
          >
            ← Back to Investment
          </Link>

          <div className="detail-layout">
            {/* Gallery */}

            <div>
              <div className="gallery-main">
                <Image
                  src={project.coverImage}
                  alt={project.name}
                  width={1200}
                  height={900}
                  priority
                />
              </div>

              <div className="gallery-grid">
                {project.gallery.map((image, index) => (
                  <a
                    key={`${image}-${index}`}
                    href={image}
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-thumb"
                    title="Open image"
                  >
                    <Image
                      src={image}
                      alt={`${project.name} ${index + 1}`}
                      width={300}
                      height={300}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Main Information */}

            <div>
              <p className="detail-category">
                {project.category}
              </p>

              <h1 className="detail-title">{project.name}</h1>

              <p className="detail-description">
                {project.overview}
              </p>

              <span className="detail-status">
                {project.status}
              </span>

              {(project.minimumInvestment ||
                project.investmentPeriod ||
                project.investment) && (
                <div className="detail-card">
                  <h2 className="detail-card-title">
                    Investment Overview
                  </h2>

                  <div className="detail-stat-grid">
                    {project.minimumInvestment && (
                      <div className="detail-stat">
                        <p className="detail-stat-label">
                          Minimum Investment
                        </p>

                        <p className="detail-stat-value">
                          {project.minimumInvestment}
                        </p>
                      </div>
                    )}

                    {project.investmentPeriod && (
                      <div className="detail-stat">
                        <p className="detail-stat-label">
                          Period
                        </p>

                        <p className="detail-stat-value">
                          {project.investmentPeriod}
                        </p>
                      </div>
                    )}

                    {project.investment?.requirement && (
                      <div className="detail-stat">
                        <p className="detail-stat-label">
                          Requirement
                        </p>

                        <p className="detail-stat-value">
                          {project.investment.requirement}
                        </p>
                      </div>
                    )}

                    {project.investment?.simulatedReturn && (
                      <div className="detail-stat">
                        <p className="detail-stat-label">
                          Simulated Return
                        </p>

                        <p className="detail-stat-value">
                          {project.investment.simulatedReturn}
                        </p>
                      </div>
                    )}

                    {project.investment?.risk && (
                      <div className="detail-stat">
                        <p className="detail-stat-label">
                          Risk
                        </p>

                        <p className="detail-stat-value">
                          Risk {project.investment.risk}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <Link
                href="/contact"
                className="project-button"
                style={{ marginTop: 18 }}
              >
                Discuss This Opportunity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          COMMERCIAL INFORMATION
      ========================================= */}

      {(project.commercial || project.allocationProject) && (
        <section className="detail-section">
          <div className="container">
            <div className="detail-two-column">

                {project.allocationProject && (
                <div>
                  <h2 className="detail-section-title">
                    Alokasi Project Investment
                  </h2>

                  <table className="spec-table">
                    <tbody>
                      <tr>
                        <td>Alokasi dana</td>
                        <td>{project.goalsInvestment}</td>
                      </tr>
                      
                      <tr>
                        <td>Struktur Biaya</td>
                        <td>
                          {project.allocationProject.costStructure.map((item) => (
                            <div key={item}>{item}</div>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <td>Mitigasi Resiko</td>
                        <td>
                          {project.allocationProject.riskMitigation.map((item) => (
                            <div key={item}>{item}</div>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              <table className="spec-table">
                <tbody>
                  {project.commercial?.purchasePrice && (
                    <tr>
                      <td>Harga Pokok Pembelian</td>
                      <td>{project.commercial.purchasePrice}</td>
                    </tr>
                  )}
                  {project.commercial?.sellingPrice && (
                    <tr>
                      <td>Harga Pokok Penjualan</td>
                      <td>{project.commercial.sellingPrice}</td>
                    </tr>
                  )}
                  {project.commercial?.successFee && (
                    <tr>
                      <td>Success Fee Penjualan</td>
                      <td>{project.commercial.successFee}</td>
                    </tr>
                  )}
                  {project.commercial?.importFee && (
                    <tr>
                      <td>Import Fee</td>
                      <td>
                        {project.commercial.importFee.map((fee) => (
                          <div key={fee}>{fee}</div>
                        ))}
                      </td>
                    </tr>
                  )}
                  {project.commercial?.vat && (
                    <tr>
                      <td>PPN</td>
                      <td>{project.commercial.vat}</td>
                    </tr>
                  )}
                  {project.commercial?.refurbishment && (
                    <tr>
                      <td>Biaya Rekondisi</td>
                      <td>{project.commercial.refurbishment}</td>
                    </tr>
                  )}
                  {project.commercial?.warranty && (
                    <tr>
                      <td>Alokasi Garansi</td>
                      <td>{project.commercial.warranty}</td>
                    </tr>
                  )}
                  {project.commercial?.incentive && (
                    <tr>
                      <td>Alokasi Insentif</td>
                      <td>{project.commercial.incentive}</td>
                    </tr>
                  )}
                  {project.commercial?.investorMargin && (
                    <tr>
                      <td>Margin Investor Nett</td>
                      <td>{project.commercial.investorMargin}</td>
                    </tr>
                  )}
                </tbody>
              </table>

            
            </div>
          </div>
        </section>
      )}

      {/* =========================================
          DESCRIPTION
      ========================================= */}

      <section className="detail-section section-soft">
        <div className="container">
          <div className="detail-two-column">
            <div>
              <p className="eyebrow">Project Overview</p>
              <h2 className="detail-section-title">About This Opportunity</h2>
              <p className="detail-text">{project.overview}</p>
              {project.location && (
                <p className="detail-text">
                  <strong>Lokasi:</strong> {project.location}
                </p>
              )}
              {project.countryOfOrigin && (
                <p className="detail-text">
                  <strong>Negara Asal:</strong> {project.countryOfOrigin}
                </p>
              )}
            </div>
            {project.features && (
              <div>
                <h2 className="detail-section-title">Fitur Utama</h2>
                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {project.advantages && (
        <section className="detail-section">
          <div className="container">
            <p className="eyebrow">Value</p>
            <h2 className="detail-section-title">Keunggulan</h2>
            <ul className="feature-list">
              {project.advantages.map((advantage) => (
                <li key={advantage}>{advantage}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {project.specifications && project.specifications.length > 0 && (
        <section className="detail-section section-soft">
          <div className="container">
            <p className="eyebrow">Technical Data</p>
            <h2 className="detail-section-title">Spesifikasi Teknis</h2>
            <table className="spec-table">
              <tbody>
                {project.specifications.map((specification) => (
                  <tr key={specification.label}>
                    <td>{specification.label}</td>
                    <td>{specification.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {project.services && (
        <section className="detail-section">
          <div className="container">
            <p className="eyebrow">After Sales</p>
            <h2 className="detail-section-title">Jaminan & Layanan Unit</h2>
            <ul className="feature-list">
              {project.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* =========================================
          VIDEO
      ========================================= */}

      {project.videoUrl && (
        <section className="detail-section section-soft">
          <div className="container">
            <p className="eyebrow">Video Unit</p>

            <h2 className="detail-section-title">
              Video Detail
            </h2>

            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/WIHiRggrnG4"
                title={`${project.name} - Video Detail`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* =========================================
          DISCLAIMER
      ========================================= */}

      <section className="detail-section">
        <div className="container">
          <div
            className="contact-card"
            style={{
              background: "#f8fafc",
              borderColor: "#e5e7eb",
            }}
          >
            <p className="eyebrow">Important Notice</p>

            <p className="detail-text">
              Informasi pada halaman ini merupakan overview dan/atau
              simulasi awal untuk kebutuhan pembahasan. Informasi
              investasi, proyeksi return, risiko, dan struktur komersial
              dapat berubah berdasarkan hasil business, legal, financial,
              technical, dan operational due diligence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}