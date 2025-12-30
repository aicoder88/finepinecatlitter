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
            <h1>The Natural Power of Pine</h1>
            <p className={styles.heroSubtitle}>
              Discover why pine cat litter is the smart, sustainable choice for
              cat owners who want effective odor control straight from nature.
            </p>
            <div className={styles.heroActions}>
              <a
                href={purrifyUrl('/products', 'hero')}
                className={`btn btn-lg ${styles.btnWhite}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop Purrify
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
              Pine litter harnesses millions of years of natural evolution to
              control odors effectively and sustainably.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌲</div>
              <h3>Natural Odor Control</h3>
              <p>
                Pine contains natural oils and phenols that neutralize ammonia
                and other odor compounds on contact.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>♻️</div>
              <h3>100% Sustainable</h3>
              <p>
                Made from renewable pine sawdust—a byproduct of lumber mills
                that would otherwise go to waste.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌿</div>
              <h3>Fresh Forest Scent</h3>
              <p>
                Subtle, natural pine fragrance that&apos;s pleasant to humans without
                overwhelming your cat&apos;s sensitive nose.
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
                Traditional clay litters absorb moisture, but pine does something
                better—it actually neutralizes odors at the molecular level while
                absorbing 3x its weight in liquid.
              </p>
              <ul className={styles.whyPineList}>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Absorbs 3x more liquid than clay</span>
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Neutralizes ammonia naturally</span>
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Lightweight and easy to carry</span>
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Biodegradable and compostable</span>
                </li>
              </ul>
              <Link href="/benefits" className="btn btn-primary" style={{ marginTop: 'var(--space-6)' }}>
                See All Benefits →
              </Link>
            </div>

            <div className={styles.pineVisual}>
              <h3>🌲 Pine by the Numbers</h3>
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
              See how pine stacks up against clay and other common litter types.
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
              <div className={styles.comparisonCell}><span className={styles.yes}>✓ Yes</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>✗ No (needs additives)</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Biodegradable</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>✓ 100%</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>✗ No</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Lightweight</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>✓ 40% lighter</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>✗ Heavy</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Renewable resource</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>✓ Yes</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>✗ Strip-mined</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Low dust</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>✓ Very low</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>✗ Often dusty</span></div>
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
          <h2>Experience the Pine Difference</h2>
          <p>
            Purrify combines natural biochar with pine for the ultimate odor
            control—harnessing the best of nature for your cat.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={purrifyUrl('/products', 'home-cta')}
              className={`btn btn-lg ${styles.btnWhite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Purrify
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
