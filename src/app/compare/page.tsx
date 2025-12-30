import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Compare Pine vs Clay vs Silica Cat Litter - Full Guide',
  description:
    'Compare pine cat litter to clay, silica, corn, and other types. See how pine stacks up in odor control, absorbency, and environmental impact.',
  alternates: {
    canonical: '/compare',
  },
  openGraph: {
    title: 'Compare Pine vs Clay vs Silica Cat Litter - Full Guide',
    description:
      'Compare pine cat litter to clay, silica, corn, and other types. See how pine stacks up in odor control and absorbency.',
    url: '/compare',
    images: ['/og-image.png'],
  },
};

const purrifyUrl = (path: string, medium: string) =>
  `https://purrify.ca${path}?utm_source=finepinecatlitter&utm_medium=${medium}`;

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Detailed Comparison</span>
          <h1>How Pine Compares</h1>
          <p>
            See how pine litter stacks up against clay, silica, and other
            popular litter types across all the factors that matter.
          </p>
        </div>
      </section>

      {/* Main Comparison */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Complete Litter Comparison</h2>
            <p>
              An honest look at how different litter types perform across key metrics.
            </p>
          </div>

          <div className={styles.comparisonTable}>
            <div className={`${styles.comparisonRow} ${styles.comparisonHeader}`}>
              <div className={styles.comparisonCell}>Feature</div>
              <div className={styles.comparisonCell}>🌲 Pine</div>
              <div className={styles.comparisonCell}>🪨 Clay</div>
              <div className={styles.comparisonCell}>💎 Silica</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Natural odor control</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>✓ Excellent</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>Needs additives</span></div>
              <div className={styles.comparisonCell}><span className={styles.partial}>Good</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Absorption capacity</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>3x its weight</span></div>
              <div className={styles.comparisonCell}><span className={styles.partial}>1x its weight</span></div>
              <div className={styles.comparisonCell}><span className={styles.yes}>40x its weight</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Weight</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>Lightweight</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>Very heavy</span></div>
              <div className={styles.comparisonCell}><span className={styles.yes}>Lightweight</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Dust level</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>Very low</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>Often high</span></div>
              <div className={styles.comparisonCell}><span className={styles.yes}>Very low</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Biodegradable</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>✓ 100%</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>✗ No</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>✗ No</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Renewable resource</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>✓ Yes</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>✗ Strip-mined</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>✗ Manufactured</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Clumping</div>
              <div className={styles.comparisonCell}><span className={styles.partial}>Breaks to sawdust</span></div>
              <div className={styles.comparisonCell}><span className={styles.yes}>✓ Strong clumps</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>✗ Non-clumping</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Chemical-free</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>✓ 100% natural</span></div>
              <div className={styles.comparisonCell}><span className={styles.partial}>Varies by brand</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>Synthetic</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Cost per month</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>$$ Medium</span></div>
              <div className={styles.comparisonCell}><span className={styles.yes}>$ Low-Medium</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>$$$ Higher</span></div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Tracking</div>
              <div className={styles.comparisonCell}><span className={styles.yes}>Minimal</span></div>
              <div className={styles.comparisonCell}><span className={styles.no}>Significant</span></div>
              <div className={styles.comparisonCell}><span className={styles.yes}>Minimal</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="section" style={{ background: 'var(--soft-green)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Type-by-Type Breakdown</h2>
            <p>A closer look at each litter type&apos;s strengths and weaknesses.</p>
          </div>

          <div className={styles.cardsGrid}>
            <div className={`${styles.card} ${styles.cardFeatured}`}>
              <span className="badge">Recommended</span>
              <div className={styles.cardIcon}>🌲</div>
              <h3>Pine Litter</h3>
              <p>
                Made from compressed pine sawdust, offering natural odor control
                and maximum sustainability.
              </p>
              <ul>
                <li>✓ Natural ammonia neutralization</li>
                <li>✓ 100% biodegradable</li>
                <li>✓ Very low dust</li>
                <li>✓ Lightweight</li>
                <li>△ Requires adjustment period</li>
                <li>△ Different texture than clay</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>🪨</div>
              <h3>Clay Litter</h3>
              <p>
                Traditional choice made from bentonite clay. Familiar but with
                environmental concerns.
              </p>
              <ul>
                <li>✓ Strong clumping</li>
                <li>✓ Familiar to cats</li>
                <li>✓ Widely available</li>
                <li>✗ Strip-mined (environmental impact)</li>
                <li>✗ Very heavy</li>
                <li>✗ Dusty (respiratory concerns)</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>💎</div>
              <h3>Silica/Crystal Litter</h3>
              <p>
                Synthetic crystals with high absorption but questions about
                safety and sustainability.
              </p>
              <ul>
                <li>✓ Excellent absorption</li>
                <li>✓ Long-lasting</li>
                <li>✓ Low dust</li>
                <li>✗ Not biodegradable</li>
                <li>✗ Sharp crystals may bother paws</li>
                <li>✗ Higher cost</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>🌽</div>
              <h3>Corn Litter</h3>
              <p>
                Plant-based alternative made from corn. Clumps well but with
                some trade-offs.
              </p>
              <ul>
                <li>✓ Biodegradable</li>
                <li>✓ Good clumping</li>
                <li>✓ Flushable (check local rules)</li>
                <li>△ Can attract bugs</li>
                <li>△ May mold if damp</li>
                <li>△ Some cats eat it</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>🌾</div>
              <h3>Wheat Litter</h3>
              <p>
                Another plant option with natural enzyme odor control.
              </p>
              <ul>
                <li>✓ Natural enzymes fight odor</li>
                <li>✓ Biodegradable</li>
                <li>✓ Soft texture</li>
                <li>△ Can be dusty</li>
                <li>△ May attract pests</li>
                <li>△ Not for cats with wheat allergies</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>📄</div>
              <h3>Paper Litter</h3>
              <p>
                Made from recycled paper. Best for post-surgery recovery.
              </p>
              <ul>
                <li>✓ Extremely low dust</li>
                <li>✓ Very gentle on paws</li>
                <li>✓ Good for healing cats</li>
                <li>✗ Poor odor control</li>
                <li>✗ Doesn&apos;t clump well</li>
                <li>✗ Needs frequent changing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>The Best of Pine + Biochar</h2>
          <p>
            Purrify combines pine&apos;s natural benefits with activated biochar
            for the ultimate in natural odor control.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={purrifyUrl('/products', 'compare')}
              className={`btn btn-lg ${styles.btnWhite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Purrify
            </a>
            <Link href="/guide" className={`btn btn-lg ${styles.btnOutline}`}>
              Buying Guide →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
