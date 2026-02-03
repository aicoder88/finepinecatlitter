import Link from 'next/link';
import styles from './page.module.css';

const purrifyUrl = (path: string, medium: string) =>
  `https://purrify.ca${path}?utm_source=finepinecatlitter&utm_medium=${medium}`;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="badge">Nature&apos;s Best</span>
            <h1>The Natural Power of Fine Pine Cat Litter</h1>
            <p className={styles.heroSubtitle}>
              Discover why <strong>fine pine cat litter</strong> is the smart, sustainable choice for
              cat owners who want effective odor control straight from nature. Our <a href={purrifyUrl('/products', 'hero-text')} className={styles.inlineLink}>premium pine litter</a> delivers unmatched freshness.
            </p>
            <div className={styles.heroActions}>
              <a
                href={purrifyUrl('/products', 'hero')}
                className={`btn btn-lg ${styles.btnWhite}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop Purrify Pine Litter
              </a>
              <Link href="/why-pine" className={`btn btn-lg ${styles.btnOutline}`}>
                Learn About Pine →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`section ${styles.features}`}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Why Pine Works</span>
            <h2>The Forest in Your Litter Box</h2>
            <p>
              <strong>Pine wood cat litter</strong> harnesses millions of years of natural evolution to
              control odors effectively and sustainably. Unlike clay litter, <a href={purrifyUrl('/learn/how-it-works', 'features-text')} className={styles.inlineLink}>pine naturally neutralizes ammonia</a> without chemicals.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon} role="img" aria-label="Pine tree representing natural odor control">🌲</div>
              <h3>Natural Odor Control</h3>
              <p>
                Pine contains natural oils and phenols that neutralize ammonia
                and other odor compounds on contact. <a href={purrifyUrl('/learn/science', 'feature-odor')} className={styles.inlineLink}>Learn about the science</a> behind pine&apos;s effectiveness.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon} role="img" aria-label="Recycling symbol representing sustainability">♻️</div>
              <h3>100% Sustainable</h3>
              <p>
                Made from renewable pine sawdust—a byproduct of lumber mills
                that would otherwise go to waste. Our <a href={purrifyUrl('/products', 'feature-eco')} className={styles.inlineLink}>eco-friendly pine litter</a> supports a greener planet.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon} role="img" aria-label="Herb representing fresh forest scent">🌿</div>
              <h3>Fresh Forest Scent</h3>
              <p>
                Subtle, natural pine fragrance that&apos;s pleasant to humans without
                overwhelming your cat&apos;s sensitive nose. Experience <a href={purrifyUrl('/products', 'feature-scent')} className={styles.inlineLink}>natural freshness</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pine Section */}
      <section className={`section ${styles.whyPine}`}>
        <div className="container">
          <div className={styles.whyPineGrid}>
            <div className={styles.whyPineContent}>
              <span className="badge">The Science</span>
              <h2>Why Pine Outperforms Clay</h2>
              <p>
                Traditional clay litters absorb moisture, but <strong>natural pine litter</strong> does something
                better—it actually neutralizes odors at the molecular level while
                absorbing 3x its weight in liquid. <a href={purrifyUrl('/learn/biochar', 'why-pine-text')} className={styles.inlineLink}>Purrify enhances pine with biochar</a> for even better results.
              </p>
              <ul className={styles.whyPineList}>
                <li>
                  <span className={styles.checkIcon} role="img" aria-label="Check mark">✓</span>
                  <span>Absorbs 3x more liquid than clay</span>
                </li>
                <li>
                  <span className={styles.checkIcon} role="img" aria-label="Check mark">✓</span>
                  <span>Neutralizes ammonia naturally</span>
                </li>
                <li>
                  <span className={styles.checkIcon} role="img" aria-label="Check mark">✓</span>
                  <span>Lightweight and easy to carry</span>
                </li>
                <li>
                  <span className={styles.checkIcon} role="img" aria-label="Check mark">✓</span>
                  <span>Biodegradable and compostable</span>
                </li>
              </ul>
              <Link href="/benefits" className="btn btn-primary" style={{ marginTop: 'var(--space-6)' }}>
                See All Benefits →
              </Link>
            </div>

            <div className={styles.pineVisual}>
              <h3 role="img" aria-label="Pine tree">🌲</h3>
              <div className={styles.statsGrid}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>3x</span>
                  <span className={styles.statLabel}>More Absorbent</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>40%</span>
                  <span className={styles.statLabel}>Lighter Than Clay</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Biodegradable</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>0</span>
                  <span className={styles.statLabel}>Chemicals Added</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={`section ${styles.comparison}`}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Comparison</span>
            <h2>Pine vs. Traditional Litters</h2>
            <p>
              See how <strong>wood-based cat litter</strong> stacks up against clay and other common litter types.
              Ready to make the switch? <a href={purrifyUrl('/products', 'compare-text')} className={styles.inlineLink}>Shop biodegradable pine litter</a> today.
            </p>
          </div>

          <div className={styles.comparisonTable}>
            <div className={`${styles.comparisonRow} ${styles.comparisonHeader}`}>
              <div className={styles.comparisonCell}>Feature</div>
              <div className={styles.comparisonCell}>Pine Litter</div>
              <div className={styles.comparisonCell}>Clay Litter</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Natural odor control</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Yes</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> No (needs additives)</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Biodegradable</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> 100%</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> No</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Lightweight</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> 40% lighter</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Heavy</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Renewable resource</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Yes</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Strip-mined</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Low dust</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Very low</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Often dusty</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Link href="/compare" className="btn btn-secondary">
              Full Comparison Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Experience the Fine Pine Difference</h2>
          <p>
            <a href={purrifyUrl('/', 'cta-text')} className={styles.inlineLink}>Purrify</a> combines natural biochar with premium pine for the ultimate odor
            control—harnessing the best of nature for your cat. Our <strong>fine pine cat litter</strong> is trusted by thousands of Canadian cat owners.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={purrifyUrl('/products', 'home-cta')}
              className={`btn btn-lg ${styles.btnWhite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Fine Pine Litter
            </a>
            <Link href="/guide" className={`btn btn-lg ${styles.btnOutline}`}>
              Read Buying Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
