import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';
import AuthorByline from '@/components/ui/AuthorByline';
import Citations from '@/components/ui/Citations';

export const metadata: Metadata = {
  title: 'Compare Pine vs Clay vs Silica Cat Litter - Full Guide',
  description:
    'Compare fine pine cat litter to clay, silica, corn, and other types. See how wood-based pine stacks up in odor control, absorbency, and environmental impact.',
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
  authors: [{ name: 'James Hartwell', url: 'https://www.finepinecatlitter.com/author/james-hartwell' }],
};

const purrifyUrl = (path: string, medium: string) =>
  `https://purrify.ca${path}?utm_source=finepinecatlitter&utm_medium=${medium}`;

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Compare Pine vs Clay vs Silica Cat Litter - Full Guide",
  "description": "Compare fine pine cat litter to clay, silica, corn, and other types. See how wood-based pine stacks up.",
  "url": "https://www.finepinecatlitter.com/compare",
  "author": {
    "@type": "Person",
    "name": "James Hartwell",
    "url": "https://www.finepinecatlitter.com/author/james-hartwell",
    "jobTitle": "Cat Care Specialist"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Fine Pine Cat Litter",
    "url": "https://www.finepinecatlitter.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.finepinecatlitter.com/og/home.png"
    }
  },
  "datePublished": "2024-12-01",
  "dateModified": "2025-02-20",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.finepinecatlitter.com/compare"
  },
  "about": {
    "@type": "Thing",
    "name": "Cat Litter Comparison"
  }
};

// Citations
const citations = [
  {
    id: "1",
    text: "Dust Control and Respiratory Health in Felines: Comparative Analysis of Litter Types. Journal of Feline Medicine and Surgery, 2022.",
    url: "https://journals.sagepub.com/home/fmj"
  },
  {
    id: "2",
    text: "Environmental Working Group. 'Pet Products and Environmental Impact: A Lifecycle Analysis.' EWG Report, 2023.",
    url: "https://www.ewg.org/"
  },
  {
    id: "3",
    text: "Association of American Feed Control Officials. 'Pet Food and Supply Safety Guidelines.' AAFCO, 2024.",
    url: "https://www.aafco.org/"
  }
];

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Detailed Comparison</span>
          <h1>How Fine Pine Compares</h1>
          <p>
            See how <strong>pine cat litter</strong> stacks up against clay, silica, and other
            popular litter types across all the factors that matter. Find out why <a href={purrifyUrl('/products', 'compare-hero')} className={styles.inlineLink} rel="sponsored noopener noreferrer">pine is the top choice</a> for eco-conscious cat owners.
          </p>
        </div>
      </section>

      {/* Main Comparison */}
      <section className="section">
        <div className="container">
          <AuthorByline
            authorName="James Hartwell"
            authorHref="/author/james-hartwell"
            authorTitle="Cat Care Specialist & Product Researcher"
            publishedDate="2024-12-01"
            reviewedDate="2025-02-20"
          />

          <div className="section-header">
            <h2>Complete Litter Comparison</h2>
            <p>
              An honest look at how different litter types perform across key metrics.
              Ready to make the switch? <a href={purrifyUrl('/products', 'compare-cta')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Shop natural pine litter</a> today.
            </p>
          </div>

          <div className={styles.comparisonTable}>
            <div className={`${styles.comparisonRow} ${styles.comparisonHeader}`}>
              <div className={styles.comparisonCell}>Feature</div>
              <div className={styles.comparisonCell} role="img" aria-label="Pine tree">🌲</div>
              <div className={styles.comparisonCell} role="img" aria-label="Rock">🪨</div>
              <div className={styles.comparisonCell} role="img" aria-label="Diamond">💎</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Natural odor control</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Excellent</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Needs additives</div>
              <div className={styles.comparisonCell}><span className={styles.partial} role="img" aria-label="Triangle">△</span> Good</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Absorption capacity</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> 3x its weight</div>
              <div className={styles.comparisonCell}><span className={styles.partial} role="img" aria-label="Triangle">△</span> 1x its weight</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> 40x its weight</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Weight</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Lightweight</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Very heavy</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Lightweight</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Dust level</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Very low</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Often high</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Very low</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Biodegradable</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> 100%</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> No</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> No</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Renewable resource</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Yes</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Strip-mined</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Manufactured</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Clumping</div>
              <div className={styles.comparisonCell}><span className={styles.partial} role="img" aria-label="Triangle">△</span> Breaks to sawdust</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Strong clumps</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Non-clumping</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Chemical-free</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> 100% natural</div>
              <div className={styles.comparisonCell}><span className={styles.partial} role="img" aria-label="Triangle">△</span> Varies by brand</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Synthetic</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Cost per month</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> $$ Medium</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> $ Low-Medium</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> $$$ Higher</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Tracking</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Minimal</div>
              <div className={styles.comparisonCell}><span className={styles.no} role="img" aria-label="X mark">✗</span> Significant</div>
              <div className={styles.comparisonCell}><span className={styles.yes} role="img" aria-label="Check mark">✓</span> Minimal</div>
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
              <div className={styles.cardIcon} role="img" aria-label="Pine tree">🌲</div>
              <h3>Fine Pine Litter</h3>
              <p>
                Made from compressed pine sawdust, offering natural odor control
                and maximum sustainability. The best choice for eco-conscious cat owners.
              </p>
              <ul>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Natural ammonia neutralization</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>100% biodegradable</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Very low dust</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Lightweight</li>
                <li role="img" aria-label="Triangle">△</li>
                <li>Requires adjustment period</li>
                <li role="img" aria-label="Triangle">△</li>
                <li>Different texture than clay</li>
              </ul>
              <p style={{ marginTop: 'var(--space-4)' }}>
                <a href={purrifyUrl('/products', 'compare-pine')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Shop pine litter →</a>
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon} role="img" aria-label="Rock">🪨</div>
              <h3>Clay Litter</h3>
              <p>
                Traditional choice made from bentonite clay. Familiar but with
                environmental concerns.
              </p>
              <ul>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Strong clumping</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Familiar to cats</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Widely available</li>
                <li role="img" aria-label="X mark">✗</li>
                <li>Strip-mined (environmental impact)</li>
                <li role="img" aria-label="X mark">✗</li>
                <li>Very heavy</li>
                <li role="img" aria-label="X mark">✗</li>
                <li>Dusty (respiratory concerns)</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon} role="img" aria-label="Diamond">💎</div>
              <h3>Silica/Crystal Litter</h3>
              <p>
                Synthetic crystals with high absorption but questions about
                safety and sustainability.
              </p>
              <ul>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Excellent absorption</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Long-lasting</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Low dust</li>
                <li role="img" aria-label="X mark">✗</li>
                <li>Not biodegradable</li>
                <li role="img" aria-label="X mark">✗</li>
                <li>Sharp crystals may bother paws</li>
                <li role="img" aria-label="X mark">✗</li>
                <li>Higher cost</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon} role="img" aria-label="Corn">🌽</div>
              <h3>Corn Litter</h3>
              <p>
                Plant-based alternative made from corn. Clumps well but with
                some trade-offs.
              </p>
              <ul>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Biodegradable</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Good clumping</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Flushable (check local rules)</li>
                <li role="img" aria-label="Triangle">△</li>
                <li>Can attract bugs</li>
                <li role="img" aria-label="Triangle">△</li>
                <li>May mold if damp</li>
                <li role="img" aria-label="Triangle">△</li>
                <li>Some cats eat it</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon} role="img" aria-label="Wheat">🌾</div>
              <h3>Wheat Litter</h3>
              <p>
                Another plant option with natural enzyme odor control.
              </p>
              <ul>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Natural enzymes fight odor</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Biodegradable</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Soft texture</li>
                <li role="img" aria-label="Triangle">△</li>
                <li>Can be dusty</li>
                <li role="img" aria-label="Triangle">△</li>
                <li>May attract pests</li>
                <li role="img" aria-label="Triangle">△</li>
                <li>Not for cats with wheat allergies</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon} role="img" aria-label="Paper">📄</div>
              <h3>Paper Litter</h3>
              <p>
                Made from recycled paper. Best for post-surgery recovery.
              </p>
              <ul>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Extremely low dust</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Very gentle on paws</li>
                <li role="img" aria-label="Check mark">✓</li>
                <li>Good for healing cats</li>
                <li role="img" aria-label="X mark">✗</li>
                <li>Poor odor control</li>
                <li role="img" aria-label="X mark">✗</li>
                <li>Doesn&apos;t clump well</li>
                <li role="img" aria-label="X mark">✗</li>
                <li>Needs frequent changing</li>
              </ul>
            </div>
          </div>

          <div style={{ 
            background: 'var(--white)', 
            padding: 'var(--space-4)', 
            borderRadius: 'var(--radius-md)',
            marginTop: 'var(--space-8)',
            fontSize: '0.875rem',
            color: 'var(--text-muted)'
          }}>
            <strong>Affiliate Disclosure:</strong> Fine Pine Cat Litter is affiliated with Purrify. 
            We may earn commissions from purchases made through links on this page. 
            See our <Link href="/affiliate-disclosure" className={styles.inlineLink}>full disclosure</Link> for details.
          </div>

          <Citations citations={citations} />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>The Best of Fine Pine + Biochar</h2>
          <p>
            <a href={purrifyUrl('/', 'compare-cta')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Purrify</a> combines <strong>pine&apos;s natural benefits</strong> with activated biochar
            for the ultimate in natural odor control. Experience the difference of <strong>premium wood-based cat litter</strong>.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={purrifyUrl('/products', 'compare')}
              className={`btn btn-lg ${styles.btnWhite}`}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              Shop Fine Pine Litter
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
