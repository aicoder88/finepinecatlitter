import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Corrections Policy - Fine Pine Cat Litter',
  description:
    'Our corrections policy and log of updates made to our content. We are committed to accuracy and transparency in all our cat litter guides.',
  alternates: {
    canonical: '/corrections',
  },
};

const correctionsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Corrections Policy - Fine Pine Cat Litter",
  "description": "Our corrections policy and transparency log for content updates.",
  "url": "https://www.finepinecatlitter.com/corrections"
};

export default function CorrectionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(correctionsSchema) }}
      />
      
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Accuracy Matters</span>
          <h1>Corrections Policy</h1>
          <p>
            We&apos;re committed to accuracy. Learn how we handle corrections 
            and see our transparency log.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2>Our Commitment to Accuracy</h2>
              <p>
                At <strong>Fine Pine Cat Litter</strong>, we strive for accuracy in all 
                our content. However, we recognize that errors can occur. When they do, 
                we are committed to correcting them promptly and transparently.
              </p>

              <h2>How We Handle Corrections</h2>

              <h3>Reporting Errors</h3>
              <p>
                We encourage readers to report any errors they find. You can report 
                errors by:
              </p>
              <ul>
                <li>Emailing us at{' '}
                  <a href="mailto:editorial@finepinecatlitter.com" className={styles.inlineLink}>
                    editorial@finepinecatlitter.com
                  </a>
                </li>
                <li>Using our <Link href="/contact" className={styles.inlineLink}>contact page</Link></li>
                <li>Specifying the page URL and nature of the error</li>
              </ul>

              <h3>Correction Process</h3>
              <p>
                When we receive a correction report:
              </p>
              <ol>
                <li><strong>Verification:</strong> We verify the reported error against our sources</li>
                <li><strong>Research:</strong> We research the correct information thoroughly</li>
                <li><strong>Correction:</strong> We update the content with accurate information</li>
                <li><strong>Documentation:</strong> We log the correction with date and details</li>
                <li><strong>Review:</strong> We review related content for similar issues</li>
              </ol>

              <h3>Types of Corrections</h3>
              <p>
                We make corrections for:
              </p>
              <ul>
                <li><strong>Factual errors:</strong> Incorrect dates, statistics, or claims</li>
                <li><strong>Outdated information:</strong> Content that no longer reflects current knowledge</li>
                <li><strong>Broken links:</strong> Links that no longer work</li>
                <li><strong>Typos and clarity:</strong> Errors affecting understanding</li>
                <li><strong>Missing context:</strong> Important information that should be included</li>
              </ul>

              <h3>Correction Display</h3>
              <p>
                When we make significant corrections:
              </p>
              <ul>
                <li>The corrected content is updated immediately</li>
                <li>The &ldquo;Last Reviewed&rdquo; date on the page is updated</li>
                <li>Significant corrections are logged on this page</li>
                <li>We acknowledge contributors who reported verified errors (with permission)</li>
              </ul>

              <h2>Corrections Log</h2>
              <p>
                The following is a record of significant corrections made to our content:
              </p>

              <div style={{ 
                background: 'var(--soft-green)', 
                padding: 'var(--space-6)', 
                borderRadius: 'var(--radius-lg)',
                marginTop: 'var(--space-6)'
              }}>
                <p style={{ 
                  textAlign: 'center', 
                  color: 'var(--text-muted)',
                  margin: 0,
                  fontStyle: 'italic'
                }}>
                  No corrections logged yet. This page was created February 2025 as 
                  part of our commitment to transparency.
                </p>
              </div>

              <h3 style={{ marginTop: 'var(--space-8)' }}>How to Read This Log</h3>
              <p>
                When corrections are made, they will be listed with:
              </p>
              <ul>
                <li><strong>Date:</strong> When the correction was made</li>
                <li><strong>Page:</strong> Which page was corrected</li>
                <li><strong>Original:</strong> What the content said before</li>
                <li><strong>Correction:</strong> What it says now</li>
                <li><strong>Reason:</strong> Why the correction was necessary</li>
              </ul>

              <h2>Content Updates vs. Corrections</h2>
              <p>
                We distinguish between:
              </p>

              <h3>Corrections</h3>
              <p>
                Changes made to fix errors in existing content. These are documented 
                in this log.
              </p>

              <h3>Updates</h3>
              <p>
                Changes made to reflect new information, updated research, or improved 
                clarity. These are not typically logged as corrections but are reflected 
                in the &ldquo;Last Reviewed&rdquo; date on pages.
              </p>

              <h3>Routine Maintenance</h3>
              <p>
                Minor edits for grammar, formatting, or broken links. These are not 
                typically logged.
              </p>

              <h2>Proactive Review</h2>
              <p>
                In addition to reactive corrections, we:
              </p>
              <ul>
                <li>Review all content at least annually</li>
                <li>Monitor scientific literature for new research</li>
                <li>Update product information when specifications change</li>
                <li>Verify external links quarterly</li>
              </ul>

              <h2>Our Promise</h2>
              <p>
                We are committed to:
              </p>
              <ul>
                <li>Investigating all correction reports promptly</li>
                <li>Making corrections without delay once verified</li>
                <li>Being transparent about significant changes</li>
                <li>Learning from errors to improve our processes</li>
                <li>Acknowledging those who help us maintain accuracy</li>
              </ul>

              <h2>Report an Error</h2>
              <p>
                Found something that needs correction? Help us maintain accuracy:
              </p>
              <p>
                <a 
                  href="mailto:editorial@finepinecatlitter.com?subject=Content%20Correction%20Report" 
                  className="btn btn-primary"
                  style={{ marginTop: 'var(--space-4)' }}
                >
                  Report a Correction
                </a>
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: 'var(--space-4)' }}>
                Or use our <Link href="/contact" className={styles.inlineLink}>contact form</Link> to send details about the error.
              </p>

              <p style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--cream-dark)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <strong>Last Updated:</strong> February 2025
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Correction Stats</h4>
                <ul style={{ fontSize: '0.875rem' }}>
                  <li role="img" aria-label="Document">📄</li>
                  <li>Total corrections: 0</li>
                  <li role="img" aria-label="Calendar">📅</li>
                  <li>Last correction: N/A</li>
                  <li role="img" aria-label="Check mark">✓</li>
                  <li>Average response: &lt; 24 hours</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>How to Report</h4>
                <ol style={{ fontSize: '0.875rem', paddingLeft: 'var(--space-4)' }}>
                  <li>Note the page URL</li>
                  <li>Describe the error</li>
                  <li>Suggest the correction (if known)</li>
                  <li>Include sources if applicable</li>
                </ol>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Related</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/editorial-policy" className={styles.inlineLink}>Editorial Policy</Link>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/contact" className={styles.inlineLink}>Contact Us</Link>
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
