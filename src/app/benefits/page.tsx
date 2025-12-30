import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Benefits of Pine Cat Litter for Cats and the Environment',
  description:
    'Discover all the benefits of pine cat litter: natural odor control, eco-friendly, lightweight, and safe for cats. Compare pine to clay.',
  alternates: {
    canonical: '/benefits',
  },
  openGraph: {
    title: 'Benefits of Pine Cat Litter for Cats and the Environment',
    description:
      'Discover all the benefits of pine cat litter: natural odor control, eco-friendly, lightweight, and safe for cats.',
    url: '/benefits',
    images: ['/og-image.png'],
  },
};

const purrifyUrl = (path: string, medium: string) =>
  `https://purrify.ca${path}?utm_source=finepinecatlitter&utm_medium=${medium}`;

export default function BenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Complete Overview</span>
          <h1>Benefits of Pine Litter</h1>
          <p>
            From natural odor control to environmental sustainability, discover
            why pine is the smarter choice for your cat and the planet.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">For You & Your Cat</span>
            <h2>The Complete Picture</h2>
            <p>
              Pine litter delivers benefits that go beyond just odor control.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🌲</div>
              <div>
                <h3>Natural Odor Control</h3>
                <p>
                  Pine&apos;s natural phenols neutralize ammonia at the molecular level—
                  no artificial fragrances or chemicals needed.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💧</div>
              <div>
                <h3>Superior Absorption</h3>
                <p>
                  Absorbs 3x its weight in liquid, keeping the litter box drier
                  longer and reducing the frequency of changes.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🪶</div>
              <div>
                <h3>Lightweight</h3>
                <p>
                  40% lighter than clay litter, making it easier to carry, pour,
                  and dispose of. Your back will thank you.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🌍</div>
              <div>
                <h3>Eco-Friendly</h3>
                <p>
                  Made from renewable sawdust byproducts. 100% biodegradable and
                  often compostable (for non-waste portions).
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💨</div>
              <div>
                <h3>Low Dust</h3>
                <p>
                  Pine pellets produce significantly less dust than clay, making
                  them ideal for cats and humans with respiratory sensitivities.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🐾</div>
              <div>
                <h3>Gentle on Paws</h3>
                <p>
                  Smooth pellets are comfortable for cats to walk on and won&apos;t
                  stick to their paws or track through your home.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💰</div>
              <div>
                <h3>Cost Effective</h3>
                <p>
                  Higher absorption means you use less litter. Many cat owners
                  find pine litter lasts longer than comparable clay amounts.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>✨</div>
              <div>
                <h3>Chemical-Free</h3>
                <p>
                  No artificial fragrances, dyes, or chemical additives. Just
                  pure, kiln-dried pine that&apos;s safe if accidentally ingested.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Cats Section */}
      <section className="section" style={{ background: 'var(--soft-green)' }}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <span className="badge">Cat Health</span>
              <h2>Benefits for Your Cat</h2>
              <p>
                Pine litter isn&apos;t just better for the environment—it&apos;s often
                better for your cat&apos;s health too.
              </p>

              <h3>Respiratory Health</h3>
              <p>
                The low-dust nature of pine pellets means less airborne particles
                for your cat to breathe. This is especially important for cats
                with asthma or other respiratory conditions.
              </p>

              <h3>No Chemical Exposure</h3>
              <p>
                Cats groom themselves constantly, which means anything that sticks
                to their paws gets ingested. Pine&apos;s natural composition means
                no synthetic chemicals entering your cat&apos;s system.
              </p>

              <h3>Gentle Texture</h3>
              <p>
                Pine pellets are smooth and don&apos;t have the sharp edges that some
                clay litters can have. This makes them comfortable for cats with
                sensitive paws or those recovering from declawing (though we don&apos;t
                recommend that procedure).
              </p>

              <h3>Natural Scent Cats Accept</h3>
              <p>
                While artificial fragrances can deter cats from using the litter
                box, the subtle natural scent of pine is generally well-accepted
                by most cats after a brief adjustment period.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>🐱 Cat-Friendly Features</h4>
                <ul>
                  <li>Low dust for respiratory health</li>
                  <li>No chemicals to ingest</li>
                  <li>Smooth, comfortable texture</li>
                  <li>Subtle natural scent</li>
                  <li>Non-tracking formula</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Sustainability</span>
            <h2>Better for the Planet</h2>
            <p>
              Every choice matters. Here&apos;s how pine litter helps reduce
              environmental impact.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>♻️</div>
              <h3>Renewable Resource</h3>
              <p>
                Made from pine sawdust—a byproduct of the lumber industry that
                would otherwise be discarded. Trees are replanted, making it
                a sustainable cycle.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>🌱</div>
              <h3>Biodegradable</h3>
              <p>
                Unlike clay which sits in landfills for centuries, pine breaks
                down naturally. The non-waste portion can even be composted.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>⚡</div>
              <h3>Low Carbon Footprint</h3>
              <p>
                No strip mining, minimal processing, and lighter shipping weight
                all contribute to a significantly lower carbon footprint than clay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Make the Switch?</h2>
          <p>
            Purrify offers the benefits of pine enhanced with natural biochar
            for maximum odor control.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={purrifyUrl('/products', 'benefits')}
              className={`btn btn-lg ${styles.btnWhite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Purrify
            </a>
            <Link href="/compare" className={`btn btn-lg ${styles.btnOutline}`}>
              Compare Litters →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
