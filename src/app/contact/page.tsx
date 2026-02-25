import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Contact Us - Fine Pine Cat Litter',
  description:
    'Get in touch with Fine Pine Cat Litter. Questions about pine cat litter? Need help with your cat? Contact our team for support.',
  alternates: {
    canonical: '/contact',
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Fine Pine Cat Litter",
  "description": "Contact us with questions about pine cat litter or for support.",
  "url": "https://www.finepinecatlitter.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Fine Pine Cat Litter",
    "url": "https://www.finepinecatlitter.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://purrify.ca/contact",
      "availableLanguage": ["English", "French"]
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>
            Have questions about pine cat litter? Need help with your cat? 
            We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2>How Can We Help?</h2>
              <p>
                We welcome your questions, feedback, and suggestions. Whether you&apos;re 
                curious about pine litter, need help transitioning your cat, or want 
                to report an issue with our content, we&apos;d love to hear from you.
              </p>

              <h2>Contact Options</h2>

              <h3>General Inquiries</h3>
              <p>
                For questions about pine cat litter, our content, or general cat care advice:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@finepinecatlitter.com" className={styles.inlineLink}>
                    info@finepinecatlitter.com
                  </a>
                </li>
                <li>Response time: 1-2 business days</li>
              </ul>

              <h3>Content Corrections</h3>
              <p>
                Found an error in our content? Want to suggest an update? 
                Visit our <Link href="/corrections" className={styles.inlineLink}>corrections page</Link> or email:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:editorial@finepinecatlitter.com" className={styles.inlineLink}>
                    editorial@finepinecatlitter.com
                  </a>
                </li>
              </ul>

              <h3>Product Support</h3>
              <p>
                For questions about Purrify products, orders, shipping, or returns:
              </p>
              <ul>
                <li>
                  <strong>Purrify Support:</strong>{' '}
                  <a href="https://purrify.ca/contact" className={styles.inlineLink} target="_blank" rel="sponsored noopener noreferrer">
                    purrify.ca/contact
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:support@purrify.ca" className={styles.inlineLink} rel="sponsored noopener noreferrer">
                    support@purrify.ca
                  </a>
                </li>
              </ul>

              <h3>Media & Partnerships</h3>
              <p>
                For media inquiries, partnership opportunities, or business proposals:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:partnerships@purrify.ca" className={styles.inlineLink} rel="sponsored noopener noreferrer">
                    partnerships@purrify.ca
                  </a>
                </li>
              </ul>

              <h2>Frequently Asked Questions</h2>
              <p>
                Before reaching out, you might find answers in these resources:
              </p>
              <ul>
                <li>
                  <Link href="/guide" className={styles.inlineLink}>Buying Guide</Link> - 
                  Comprehensive guide to choosing and using pine litter
                </li>
                <li>
                  <Link href="/why-pine" className={styles.inlineLink}>Why Pine Works</Link> - 
                  The science behind pine litter effectiveness
                </li>
                <li>
                  <Link href="/compare" className={styles.inlineLink}>Comparison Guide</Link> - 
                  How pine compares to other litter types
                </li>
                <li>
                  <a href="https://purrify.ca/learn/faq" className={styles.inlineLink} target="_blank" rel="sponsored noopener noreferrer">
                    Purrify FAQ
                  </a> - 
                  Answers to common product questions
                </li>
              </ul>

              <h2>Connect With Us</h2>
              <p>
                Follow Purrify for updates, tips, and cat care content:
              </p>
              <ul>
                <li>
                  <strong>Website:</strong>{' '}
                  <a href="https://purrify.ca" className={styles.inlineLink} target="_blank" rel="sponsored noopener noreferrer">
                    purrify.ca
                  </a>
                </li>
                <li>
                  <strong>Social:</strong> @purrify on Instagram, Facebook, and Twitter
                </li>
              </ul>

              <h2>Office Location</h2>
              <p>
                Fine Pine Cat Litter is a digital publication operated by Purrify:
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                <strong>Purrify Inc.</strong><br />
                Canada
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Note: We do not have a physical retail location. Products are available 
                through our website at <a href="https://purrify.ca" className={styles.inlineLink} target="_blank" rel="sponsored noopener noreferrer">purrify.ca</a>.
              </p>

              <h2>Response Times</h2>
              <p>
                We aim to respond to all inquiries within:
              </p>
              <ul>
                <li><strong>General inquiries:</strong> 1-2 business days</li>
                <li><strong>Content corrections:</strong> 1 business day</li>
                <li><strong>Media inquiries:</strong> 2-3 business days</li>
              </ul>
              <p>
                During busy periods, response times may be slightly longer. We appreciate 
                your patience.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Quick Contact</h4>
                <ul style={{ fontSize: '0.875rem' }}>
                  <li role="img" aria-label="Email">📧</li>
                  <li>
                    <a href="mailto:info@finepinecatlitter.com" className={styles.inlineLink}>
                      info@finepinecatlitter.com
                    </a>
                  </li>
                  <li role="img" aria-label="Support">🎧</li>
                  <li>
                    <a href="https://purrify.ca/contact" className={styles.inlineLink} target="_blank" rel="sponsored noopener noreferrer">
                      Product Support
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Common Topics</h4>
                <ul style={{ fontSize: '0.875rem' }}>
                  <li role="img" aria-label="Question mark">❓</li>
                  <li>Product questions</li>
                  <li role="img" aria-label="Cat">🐱</li>
                  <li>Transition help</li>
                  <li role="img" aria-label="Pencil">✏️</li>
                  <li>Content corrections</li>
                  <li role="img" aria-label="Handshake">🤝</li>
                  <li>Partnerships</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Resources</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/guide" className={styles.inlineLink}>Buying Guide</Link>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/corrections" className={styles.inlineLink}>Report a Correction</Link>
                  </li>
                  <li>
                    <a href="https://purrify.ca/learn/faq" className={styles.inlineLink} target="_blank" rel="sponsored noopener noreferrer">
                      Purrify FAQ
                    </a>
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
