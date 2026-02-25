import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Affiliate & Commercial Disclosure - Fine Pine Cat Litter',
  description:
    'Full disclosure of our affiliate relationships and commercial partnerships. Learn how we maintain transparency while providing valuable cat litter information.',
  alternates: {
    canonical: '/affiliate-disclosure',
  },
};

const disclosureSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Affiliate & Commercial Disclosure - Fine Pine Cat Litter",
  "description": "Full disclosure of affiliate relationships and commercial partnerships.",
  "url": "https://www.finepinecatlitter.com/affiliate-disclosure"
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(disclosureSchema) }}
      />
      
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Transparency</span>
          <h1>Affiliate & Commercial Disclosure</h1>
          <p>
            Full transparency about our relationships, revenue sources, 
            and how we maintain editorial independence.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2>Our Commitment to Transparency</h2>
              <p>
                <strong>Fine Pine Cat Litter</strong> is committed to complete transparency 
                about our commercial relationships. We believe you deserve to know how we 
                operate, who we work with, and how we generate revenue.
              </p>

              <h2>Parent Company Relationship</h2>
              <p>
                Fine Pine Cat Litter is a content resource owned and operated by 
                <strong> Purrify</strong>, a Canadian company specializing in natural cat 
                litter products. This relationship is fundamental to understanding our content:
              </p>
              <ul>
                <li>Purrify creates and sells natural pine and biochar cat litter products</li>
                <li>Fine Pine Cat Litter provides educational content about pine litter</li>
                <li>We link to Purrify products throughout our content</li>
                <li>However, we also provide information about pine litter generally, regardless of brand</li>
              </ul>

              <h2>How We Generate Revenue</h2>
              
              <h3>Product Sales</h3>
              <p>
                When you click on links to Purrify products and make a purchase, Purrify 
                generates revenue from those sales. This is our primary revenue model:
              </p>
              <ul>
                <li>Links to purrify.ca include tracking parameters for attribution</li>
                <li>We do not receive commissions from other brands or competitors</li>
                <li>Your purchase price is not affected by our links</li>
              </ul>

              <h3>Future Revenue Possibilities</h3>
              <p>
                We may explore additional revenue sources in the future, including:
              </p>
              <ul>
                <li>Advertising from pet care brands (clearly labeled)</li>
                <li>Sponsored content (clearly disclosed)</li>
                <li>Affiliate relationships with complementary products</li>
              </ul>
              <p>
                Any such relationships will be clearly disclosed on relevant pages.
              </p>

              <h2>Editorial Independence</h2>
              <p>
                Despite our relationship with Purrify, we maintain editorial independence:
              </p>
              <ul>
                <li>Content is created to educate, not just sell</li>
                <li>We discuss pine litter benefits generally, applicable to any quality brand</li>
                <li>Product comparisons include honest assessments of competitors</li>
                <li>Our <Link href="/editorial-policy" className={styles.inlineLink}>editorial policy</Link> guides content creation</li>
                <li>Reader education is prioritized over immediate sales</li>
              </ul>

              <h2>How We Handle Product Recommendations</h2>
              
              <h3>When We Recommend Purrify</h3>
              <p>
                We recommend Purrify products when:
              </p>
              <ul>
                <li>They genuinely meet the needs described in the content</li>
                <li>Their features align with the benefits discussed</li>
                <li>They represent a good value for cat owners</li>
              </ul>

              <h3>When We Discuss Alternatives</h3>
              <p>
                We also provide information about:
              </p>
              <ul>
                <li>General pine litter characteristics (applicable to any brand)</li>
                <li>Other litter types for comparison purposes</li>
                <li>Features to look for when shopping with any brand</li>
                <li>DIY and alternative approaches where appropriate</li>
              </ul>

              <h2>Link Identification</h2>
              <p>
                Links to Purrify products can be identified by:
              </p>
              <ul>
                <li>The destination URL (purrify.ca)</li>
                <li>UTM parameters in the link (utm_source=finepinecatlitter)</li>
                <li>Context suggesting a product recommendation</li>
              </ul>
              <p>
                We do not use deceptive linking practices or hide affiliate relationships.
              </p>

              <h2>Free Content Policy</h2>
              <p>
                All content on Fine Pine Cat Litter is free to access. We do not:
              </p>
              <ul>
                <li>Charge for access to guides or information</li>
                <li>Require registration to read content</li>
                <li>Hide information behind paywalls</li>
              </ul>

              <h2>Your Choice</h2>
              <p>
                We want you to make informed decisions:
              </p>
              <ul>
                <li>You are never obligated to purchase through our links</li>
                <li>You can visit Purrify directly without using our links</li>
                <li>The information we provide is valuable regardless of where you purchase</li>
                <li>We respect your right to choose any brand that meets your needs</li>
              </ul>

              <h2>Updates to This Disclosure</h2>
              <p>
                We will update this disclosure if:
              </p>
              <ul>
                <li>Our business relationships change</li>
                <li>We add new revenue sources</li>
                <li>Our operating model evolves</li>
              </ul>
              <p>
                Significant changes will be noted with an updated date.
              </p>

              <h2>Questions?</h2>
              <p>
                If you have questions about our commercial relationships or how we operate, 
                please <Link href="/contact" className={styles.inlineLink}>contact us</Link>. 
                We&apos;re happy to provide additional clarity.
              </p>

              <p style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--cream-dark)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <strong>Last Updated:</strong> February 2025
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Key Points</h4>
                <ul style={{ fontSize: '0.875rem' }}>
                  <li role="img" aria-label="Building">🏢</li>
                  <li>Owned by Purrify</li>
                  <li role="img" aria-label="Link">🔗</li>
                  <li>Links to Purrify products</li>
                  <li role="img" aria-label="Book">📖</li>
                  <li>Editorial independence maintained</li>
                  <li role="img" aria-label="Gift">🎁</li>
                  <li>All content is free</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Related Pages</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/about" className={styles.inlineLink}>About Us</Link>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/editorial-policy" className={styles.inlineLink}>Editorial Policy</Link>
                  </li>
                  <li>
                    <Link href="/contact" className={styles.inlineLink}>Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>FTC Compliance</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  This disclosure complies with FTC guidelines for affiliate marketing 
                  and commercial relationships transparency.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
