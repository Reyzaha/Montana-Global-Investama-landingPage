import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Montana Global Investama",
    template: "%s | Montana Global Investama",
  },
  description:
    "Montana Global Investama — Strategic Investment Company focused on identifying, developing, and partnering in strategic business opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container navbar">
            <Link href="/" className="brand">
              <Image
                src="/logo.png"
                alt="Montana Global Investama"
                width={180}
                height={60}
                priority
              />
            </Link>

            <nav className="nav-links">
              <Link href="/about">About Us</Link>
              <Link href="/investment">Investment</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <Link href="/contact" className="nav-cta">
              Contact Us
            </Link>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <p className="footer-brand">MONTANA GLOBAL INVESTAMA</p>

              <p className="footer-description">
                Strategic investment and business partnership across Indonesia.
              </p>
            </div>

            <div className="footer-links">
              <Link href="/about">About Us</Link>
              <Link href="/investment">Investment</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <p className="footer-copy">
              © {new Date().getFullYear()} Montana Global Investama. All
              rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}