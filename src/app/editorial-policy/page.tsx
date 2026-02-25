import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Editorial Policy - Fine Pine Cat Litter',
  description:
    'Our editorial standards and guidelines ensure accurate, unbiased information about natural cat litter. Learn how we create and review content.',
  alternates: {
    canonical: '/editorial-policy',
  },
};

// Editorial Policy Schema
const editorialSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Editorial Policy - Fine Pine Cat Litter",
  "description": "Our editorial standards ensure accurate, unbiased information about natural cat litter.",
  "url": "https://www.finepinecatlitter.com/editorial-policy",
  "publisher": {
    "@type": "Organization",
    "name": "Fine Pine Cat Litter",
    "url": "https://www.finepinecatlitter.com"
  }
};

export default function EditorialPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(editorialSchema) }}
      />
      
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Our Standards</span>
          <h1>Editorial Policy</h1>
          <p>
            How we create, review, and maintain content to ensure accuracy, 
            transparency, and trustworthiness.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2>Our Commitment to Quality</h2>
              <p>
                At <strong>Fine Pine Cat Litter</strong>, we are committed to providing accurate, 
                evidence-based information that helps cat owners make informed decisions. 
                Our editorial policy ensures that all content meets high standards of 
                accuracy, transparency, and usefulness.
              </p>

              <h2>Content Creation Process</h2>
              
              <h3>1. Research-First Approach</h3>
              <p>
                All articles begin with thorough research. We consult:
              </p>
              <ul>
                <li>Peer-reviewed veterinary and scientific literature</li>
                <li>Industry safety standards and regulations</li>
                <li>Manufacturer specifications and testing data</li>
                <li>Real-world user experiences and feedback</li>
              </ul>

              <h3>2. Expert Authorship</h3>
              <p>
                Content is created by <Link href="/author/james-hartwell" className={styles.inlineLink}>James Hartwell</Link>, 
                our cat care specialist with extensive experience in pet product testing. 
                Every article includes author attribution and publication dates.
              </p>

              <h3>3. Review and Verification</h3>
              <p>
                Before publication, all content undergoes:
              </p>
              <ul>
                <li>Fact-checking of health and safety claims</li>
                <li>Review for accuracy and completeness</li>
                <li>Verification of citations and sources</li>
                <li>Editorial review for clarity and usefulness</li>
              </ul>

              <h2>Accuracy & Corrections</h2>
              <p>
                We strive for accuracy in all content. If we discover errors or receive 
                corrections from readers, we:
              </p>
              <ul>
                <li>Investigate the reported issue promptly</li>
                <li>Make corrections with clear documentation</li>
                <li>Update the &ldquo;Last Reviewed&rdquo; date on affected pages</li>
                <li>Maintain a <Link href="/corrections" className={styles.inlineLink}>corrections log</Link> for transparency</li>
              </ul>

              <h2>Source Citations</h2>
              <p>
                We believe in transparency about our information sources:
              </p>
              <ul>
                <li>Health and safety claims cite peer-reviewed research or veterinary sources</li>
                <li>Product claims reference manufacturer data or independent testing</li>
                <li>Statistics include source attribution</li>
                <li>Medical information is reviewed against current veterinary consensus</li>
              </ul>

              <h2>Commercial Relationships</h2>
              <p>
                Fine Pine Cat Litter is affiliated with Purrify, our parent company. 
                We maintain editorial independence while being transparent about this relationship:
              </p>
              <ul>
                <li>All affiliate and commercial relationships are disclosed (see our{' '}
                <Link href="/affiliate-disclosure" className={styles.inlineLink}>affiliate disclosure</Link>)</li>
                <li>Product recommendations are based on merit, not commercial relationships</li>
                <li>We compare Purrify products honestly against competitors</li>
                <li>Sponsored content, if any, is clearly labeled</li>
              </ul>

              <h2>Health & Safety Standards</h2>
              <p>
                Content involving cat health and safety receives special attention:
              </p>
              <ul>
                <li>Medical claims are verified against veterinary sources</li>
                <li>We consult with veterinary professionals on health-related content</li>
                <li>Safety warnings are prominent and clear</li>
                <li>We recommend consulting veterinarians for specific health concerns</li>
                <li>Product safety information is cross-referenced with regulatory data</li>
              </ul>

              <h2>Content Updates</h2>
              <p>
                We regularly review and update content to ensure it remains accurate:
              </p>
              <ul>
                <li>Articles display &ldquo;Last Reviewed&rdquo; dates</li>
                <li>Key advice pages are reviewed at least annually</li>
                <li>Updates are made when new research becomes available</li>
                <li>Product information is updated when specifications change</li>
              </ul>

              <h2>User Feedback</h2>
              <p>
                We welcome reader feedback and corrections:
              </p>
              <ul>
                <li>Readers can report errors through our <Link href="/contact" className={styles.inlineLink}>contact page</Link></li>
                <li>All feedback is reviewed by our editorial team</li>
                <li>Verified corrections are implemented promptly</li>
                <li>Contributors are acknowledged when appropriate</li>
              </ul>

              <h2>Independence & Objectivity</h2>
              <p>
                While Fine Pine Cat Litter is affiliated with Purrify, our content is 
                guided by these principles:
              </p>
              <ul>
                <li>Information is presented objectively, with pros and cons</li>
                <li>Competing products are evaluated fairly</li>
                <li>Editorial decisions are based on reader value, not revenue</li>
                <li>We prioritize cat health and owner education</li>
              </ul>

              <h2>Contact Our Editorial Team</h2>
              <p>
                Questions about our editorial policy? Want to report an error or suggest a correction? 
                <Link href="/contact" className={styles.inlineLink}>Contact us here</Link>.
              </p>

              <p style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--cream-dark)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <strong>Last Updated:</strong> February 2025
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Key Principles</h4>
                <ul style={{ fontSize: '0.875rem' }}>
                  <li role="img" aria-label="Check mark">✓</li>
                  <li>Evidence-based information</li>
                  <li role="img" aria-label="Check mark">✓</li>
                  <li>Transparent sourcing</li>
                  <li role="img" aria-label="Check mark">✓</li>
                  <li>Regular content review</li>
                  <li role="img" aria-label="Check mark">✓</li>
                  <li>Clear commercial disclosures</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Related Policies</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/affiliate-disclosure" className={styles.inlineLink}>Affiliate Disclosure</Link>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/testing-methodology" className={styles.inlineLink}>Testing Methodology</Link>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/corrections" className={styles.inlineLink}>Corrections Policy</Link>
                  </li>
                  <li>
                    <Link href="/about" className={styles.inlineLink}>About Us</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
