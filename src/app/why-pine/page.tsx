import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Why Fine Pine Cat Litter Works - The Science of Natural Odor Control',
  description:
    'Learn why pine is nature\'s perfect cat litter material. Discover the science behind natural pine litter and its sustainability benefits.',
  alternates: {
    canonical: '/why-pine',
  },
  openGraph: {
    title: 'Why Fine Pine Cat Litter Works - The Science of Natural Odor Control',
    description:
      'Learn why pine is nature\'s perfect cat litter material. Discover the science behind pine\'s natural odor control.',
    url: '/why-pine',
    images: ['/og-image.png'],
  },
};

const purrifyUrl = (path: string, medium: string) =>
  `https://purrify.ca${path}?utm_source=finepinecatlitter&utm_medium=${medium}`;

export default function WhyPinePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">The Science of Pine</span>
          <h1>Why Fine Pine Works So Well</h1>
          <p>
            For centuries, pine has been valued for its fresh scent and natural
            properties. Here&apos;s why it makes the perfect <strong>wood-based cat litter</strong>.
            <a href={purrifyUrl('/learn/science', 'why-hero')} className={styles.inlineLink}> Dive deeper into the science</a>.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2>The Natural Chemistry of Fine Pine</h2>
              <p>
                Pine wood contains natural compounds called phenols and terpenes.
                These aren&apos;t just what give pine its distinctive fresh scent—they&apos;re
                also powerful natural antimicrobials and odor neutralizers.
              </p>
              <p>
                When <strong>natural pine litter</strong> comes into contact with ammonia (the primary odor compound
                in cat urine), these natural chemicals work to neutralize it at the
                molecular level. This is fundamentally different from clay litters,
                which simply absorb and contain odors without actually neutralizing them.
                <a href={purrifyUrl('/learn/how-it-works', 'why-chemistry')} className={styles.inlineLink}> See how it compares</a>.
              </p>

              <h3>How Pine Pellets Work</h3>
              <p>
                <strong>Fine pine cat litter</strong> typically comes in pellet form. When your cat uses the
                litter box, the pellets absorb moisture and break down into sawdust.
                This sawdust traps odors while the natural pine oils work to
                neutralize them. <a href={purrifyUrl('/products', 'why-pellets')} className={styles.inlineLink}>Try premium pine pellets</a>.
              </p>
              <ul>
                <li>Moisture is absorbed into the pellet core</li>
                <li>Pellets expand and break down into sawdust</li>
                <li>Natural pine oils neutralize ammonia</li>
                <li>Fresh pine scent masks remaining odors</li>
              </ul>

              <h3>Superior Absorption</h3>
              <p>
                <strong>Pine cat litter</strong> can absorb approximately three times its weight in liquid—
                significantly more than traditional clay. This means less litter
                needed per change, and longer-lasting freshness between cleanings.
                <a href={purrifyUrl('/learn/science', 'why-absorption')} className={styles.inlineLink}>Learn about absorption</a>.
              </p>

              <h3>The Sustainability Story</h3>
              <p>
                <strong>Biodegradable pine litter</strong> is made from kiln-dried pine sawdust and shavings—
                byproducts of the lumber industry that would otherwise go to waste.
                By choosing pine litter, you&apos;re helping to reduce waste while
                supporting a circular economy.
              </p>
              <p>
                Unlike clay (which is strip-mined) or silica (which requires
                energy-intensive manufacturing), <a href={purrifyUrl('/learn/sustainability', 'why-sustainability')} className={styles.inlineLink}>pine litter</a> has one of the lowest
                environmental footprints of any litter type.
              </p>

              <h3>Safe and Natural</h3>
              <p>
                Quality <strong>fine pine litters</strong> are kiln-dried to remove harmful compounds and
                phenolic oils that could irritate cats. The remaining natural pine
                scent is subtle enough for cats while still providing odor control
                for humans. <a href={purrifyUrl('/learn/safety', 'why-safe')} className={styles.inlineLink}>Safety information</a>.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4 role="img" aria-label="Pine tree">🌲</h4>
                <h4>Pine Benefits</h4>
                <ul>
                  <li>Natural odor neutralization</li>
                  <li>3x absorption of clay</li>
                  <li>Lightweight (40% less)</li>
                  <li>100% biodegradable</li>
                  <li>Made from waste wood</li>
                  <li>Chemical-free</li>
                </ul>
                <p style={{ marginTop: 'var(--space-4)' }}>
                  <a href={purrifyUrl('/products', 'why-benefits')} className={styles.inlineLink}>Shop pine litter →</a>
                </p>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Did You Know?</h4>
                <ul>
                  <li role="img" aria-label="Microscope">🔬</li>
                  <li>Pine phenols are naturally antimicrobial</li>
                  <li role="img" aria-label="Earth">🌍</li>
                  <li>One bag = less landfill waste</li>
                  <li role="img" aria-label="Cat">🐱</li>
                  <li>Most cats adapt within 2 weeks</li>
                </ul>
                <p style={{ marginTop: 'var(--space-4)' }}>
                  <a href={purrifyUrl('/learn/faq', 'why-didyouknow')} className={styles.inlineLink}>More facts →</a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Experience Fine Pine + Biochar</h2>
          <p>
            <a href={purrifyUrl('/', 'why-cta')} className={styles.inlineLink}>Purrify</a> combines the natural power of <strong>fine pine</strong> with activated biochar
            for unmatched odor control. Discover the <a href={purrifyUrl('/products', 'why-cta-link')} className={styles.inlineLink}>best wood-based cat litter</a> available.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={purrifyUrl('/products', 'why-pine')}
              className={`btn btn-lg ${styles.btnWhite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Fine Pine Litter
            </a>
            <Link href="/benefits" className={`btn btn-lg ${styles.btnOutline}`}>
              See All Benefits →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
