import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Why Pine Cat Litter Works - The Science of Natural Odor Control',
  description:
    'Learn why pine is nature\'s perfect cat litter material. Discover the science behind pine\'s natural odor control and sustainability benefits.',
  alternates: {
    canonical: '/why-pine',
  },
  openGraph: {
    title: 'Why Pine Cat Litter Works - The Science of Natural Odor Control',
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
          <h1>Why Pine Works So Well</h1>
          <p>
            For centuries, pine has been valued for its fresh scent and natural
            properties. Here&apos;s why it makes the perfect cat litter.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2>The Natural Chemistry of Pine</h2>
              <p>
                Pine wood contains natural compounds called phenols and terpenes.
                These aren&apos;t just what give pine its distinctive fresh scent—they&apos;re
                also powerful natural antimicrobials and odor neutralizers.
              </p>
              <p>
                When pine comes into contact with ammonia (the primary odor compound
                in cat urine), these natural chemicals work to neutralize it at the
                molecular level. This is fundamentally different from clay litters,
                which simply absorb and contain odors without actually neutralizing them.
              </p>

              <h3>How Pine Pellets Work</h3>
              <p>
                Pine cat litter typically comes in pellet form. When your cat uses the
                litter box, the pellets absorb moisture and break down into sawdust.
                This sawdust traps odors while the natural pine oils work to
                neutralize them.
              </p>
              <ul>
                <li>Moisture is absorbed into the pellet core</li>
                <li>Pellets expand and break down into sawdust</li>
                <li>Natural pine oils neutralize ammonia</li>
                <li>Fresh pine scent masks remaining odors</li>
              </ul>

              <h3>Superior Absorption</h3>
              <p>
                Pine litter can absorb approximately three times its weight in liquid—
                significantly more than traditional clay. This means less litter
                needed per change, and longer-lasting freshness between cleanings.
              </p>

              <h3>The Sustainability Story</h3>
              <p>
                Pine cat litter is made from kiln-dried pine sawdust and shavings—
                byproducts of the lumber industry that would otherwise go to waste.
                By choosing pine litter, you&apos;re helping to reduce waste while
                supporting a circular economy.
              </p>
              <p>
                Unlike clay (which is strip-mined) or silica (which requires
                energy-intensive manufacturing), pine litter has one of the lowest
                environmental footprints of any litter type.
              </p>

              <h3>Safe and Natural</h3>
              <p>
                Quality pine litters are kiln-dried to remove harmful compounds and
                phenolic oils that could irritate cats. The remaining natural pine
                scent is subtle enough for cats while still providing odor control
                for humans.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>🌲 Pine Benefits</h4>
                <ul>
                  <li>Natural odor neutralization</li>
                  <li>3x absorption of clay</li>
                  <li>Lightweight (40% less)</li>
                  <li>100% biodegradable</li>
                  <li>Made from waste wood</li>
                  <li>Chemical-free</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Did You Know?</h4>
                <ul>
                  <li>🔬 Pine phenols are naturally antimicrobial</li>
                  <li>🌍 One bag = less landfill waste</li>
                  <li>🐱 Most cats adapt within 2 weeks</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Experience Pine + Biochar</h2>
          <p>
            Purrify combines the natural power of pine with activated biochar
            for unmatched odor control.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={purrifyUrl('/products', 'why-pine')}
              className={`btn btn-lg ${styles.btnWhite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Purrify
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
