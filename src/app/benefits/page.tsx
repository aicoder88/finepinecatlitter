import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';
import AuthorByline from '@/components/ui/AuthorByline';
import Citations from '@/components/ui/Citations';

export const metadata: Metadata = {
  title: 'Benefits of Fine Pine Cat Litter for Cats and the Environment',
  description:
    'Discover all the benefits of fine pine cat litter: natural odor control, eco-friendly, lightweight, and safe for cats. Compare wood-based pine to clay.',
  alternates: {
    canonical: '/benefits',
  },
  openGraph: {
    title: 'Benefits of Fine Pine Cat Litter for Cats and the Environment',
    description:
      'Discover all the benefits of pine cat litter: natural odor control, eco-friendly, lightweight, and safe for cats.',
    url: '/benefits',
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
  "headline": "Benefits of Fine Pine Cat Litter for Cats and the Environment",
  "description": "Discover all the benefits of fine pine cat litter: natural odor control, eco-friendly, lightweight, and safe for cats.",
  "url": "https://www.finepinecatlitter.com/benefits",
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
    "@id": "https://www.finepinecatlitter.com/benefits"
  },
  "about": {
    "@type": "Thing",
    "name": "Pine Cat Litter Benefits"
  }
};

// Citations for health claims
const citations = [
  {
    id: "1",
    text: "Cat Fanciers' Association (CFA). Practical cat care and litter environment guidance.",
    url: "https://cfa.org"
  },
  {
    id: "2",
    text: "Forest Stewardship Council (FSC). Standards for responsibly sourced wood fiber.",
    url: "https://fsc.org"
  },
  {
    id: "3",
    text: "VCA Animal Hospitals. Veterinary respiratory safety context for fragrance and chemical exposure.",
    url: "https://vcahospitals.com/know-your-pet/essential-oils-and-cats"
  },
  {
    id: "4",
    text: "Journal of Wood Chemistry and Technology. Academic reference for wood-fiber and pine compound research.",
    url: "https://www.tandfonline.com/journals/lwct20"
  },
  {
    id: "5",
    text: "American Lung Association. Indoor air quality guidance for home environments.",
    url: "https://www.lung.org/clean-air/indoor-air"
  },
  {
    id: "6",
    text: "USDA Forest Service. Forestry and wood-product sustainability resources.",
    url: "https://www.fs.usda.gov"
  }
];

export default function BenefitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Complete Overview</span>
          <h1>Benefits of Fine Pine Litter</h1>
          <p>
            From natural odor control to environmental sustainability, discover
            why <strong>fine pine cat litter</strong> is the smarter choice for your cat and the planet.
            <a href={purrifyUrl('/products', 'benefits-hero')} className={styles.inlineLink} rel="sponsored noopener noreferrer"> Experience the benefits</a> for yourself.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
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
            <span className="badge">For You & Your Cat</span>
            <h2>The Complete Picture</h2>
            <p>
              <strong>Pine wood cat litter</strong> delivers benefits that go beyond just odor control.
              See why thousands of cat owners are making the switch to <a href={purrifyUrl('/products', 'benefits-intro')} className={styles.inlineLink} rel="sponsored noopener noreferrer">natural pine litter</a>.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} role="img" aria-label="Pine tree">🌲</div>
              <div>
                <h3>Natural Odor Control</h3>
                <p>
                  Pine&apos;s natural phenols neutralize ammonia at the molecular level—
                  no artificial fragrances or chemicals needed. <a href={purrifyUrl('/learn/science', 'benefits-odor')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Learn the science</a>.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} role="img" aria-label="Water droplet">💧</div>
              <div>
                <h3>Superior Absorption</h3>
                <p>
                  Absorbs 3x its weight in liquid, keeping the litter box drier
                  longer and reducing the frequency of changes. <a href={purrifyUrl('/products', 'benefits-absorb')} className={styles.inlineLink} rel="sponsored noopener noreferrer">See absorption in action</a>.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} role="img" aria-label="Feather">🪶</div>
              <div>
                <h3>Lightweight</h3>
                <p>
                  40% lighter than clay litter, making it easier to carry, pour,
                  and dispose of. Your back will thank you. <a href={purrifyUrl('/products', 'benefits-light')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Compare weights</a>.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} role="img" aria-label="Earth">🌍</div>
              <div>
                <h3>Eco-Friendly</h3>
                <p>
                  Made from renewable sawdust byproducts. 100% biodegradable and
                  often compostable. <a href={purrifyUrl('/learn/sustainability', 'benefits-eco')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Our sustainability promise</a>.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} role="img" aria-label="Wind">💨</div>
              <div>
                <h3>Low Dust</h3>
                <p>
                  Pine pellets produce significantly less dust than clay, making
                  them ideal for cats and humans with respiratory sensitivities.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} role="img" aria-label="Paw prints">🐾</div>
              <div>
                <h3>Gentle on Paws</h3>
                <p>
                  Smooth pellets are comfortable for cats to walk on and won&apos;t
                  stick to their paws or track through your home.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} role="img" aria-label="Money bag">💰</div>
              <div>
                <h3>Cost Effective</h3>
                <p>
                  Higher absorption means you use less litter. Many cat owners
                  find pine litter lasts longer than comparable clay amounts.
                  <a href={purrifyUrl('/products', 'benefits-cost')} className={styles.inlineLink} rel="sponsored noopener noreferrer"> Shop affordable pine litter</a>.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} role="img" aria-label="Sparkles">✨</div>
              <div>
                <h3>Chemical-Free</h3>
                <p>
                  No artificial fragrances, dyes, or chemical additives. Just
                  pure, kiln-dried pine that&apos;s safe if accidentally ingested.
                  <a href={purrifyUrl('/learn/safety', 'benefits-safe')} className={styles.inlineLink} rel="sponsored noopener noreferrer"> Safety first</a>.
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
                <strong>Fine pine litter</strong> isn&apos;t just better for the environment—it&apos;s often
                better for your cat&apos;s health too. Discover why <a href={purrifyUrl('/products', 'benefits-cat')} className={styles.inlineLink} rel="sponsored noopener noreferrer">veterinarians recommend</a> natural litter options.
              </p>

              <h3>Respiratory Health</h3>
              <p>
                The low-dust nature of pine pellets means less airborne particles
                for your cat to breathe. This is especially important for cats
                with asthma or other respiratory conditions. See veterinary context from
                <a href="https://vcahospitals.com/know-your-pet/essential-oils-and-cats" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}> VCA chemical-sensitivity guidance</a>.
                <a href={purrifyUrl('/learn/safety', 'benefits-respiratory')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Learn about respiratory health</a>.
              </p>

              <h3>No Chemical Exposure</h3>
              <p>
                Cats groom themselves constantly, which means anything that sticks
                to their paws gets ingested. Pine&apos;s natural composition means
                no synthetic chemicals entering your cat&apos;s system. <a href={purrifyUrl('/learn/how-it-works', 'benefits-chemicals')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Why natural matters</a>.
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
                by most cats after a brief adjustment period. <a href={purrifyUrl('/learn/faq', 'benefits-scent')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Tips for transition</a>.
              </p>

              <div style={{ 
                background: 'var(--white)', 
                padding: 'var(--space-4)', 
                borderRadius: 'var(--radius-md)',
                marginTop: 'var(--space-6)',
                fontSize: '0.875rem',
                color: 'var(--text-muted)'
              }}>
                <strong>Affiliate Disclosure:</strong> Fine Pine Cat Litter is affiliated with Purrify. 
                We may earn commissions from purchases made through links on this page. 
                See our <Link href="/affiliate-disclosure" className={styles.inlineLink}>full disclosure</Link> for details.
              </div>

              <Citations citations={citations} />
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4 role="img" aria-label="Cat face">🐱</h4>
                <h4>Cat-Friendly Features</h4>
                <ul>
                  <li>Low dust for respiratory health</li>
                  <li>No chemicals to ingest</li>
                  <li>Smooth, comfortable texture</li>
                  <li>Subtle natural scent</li>
                  <li>Non-tracking formula</li>
                </ul>
                <p style={{ marginTop: 'var(--space-4)' }}>
                  <a href={purrifyUrl('/products', 'benefits-features')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Shop cat-friendly litter →</a>
                </p>
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
              Every choice matters. Here&apos;s how <strong>biodegradable pine litter</strong> helps reduce
              environmental impact. Make the switch to <a href={purrifyUrl('/products', 'benefits-planet')} className={styles.inlineLink} rel="sponsored noopener noreferrer">sustainable cat care</a>.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon} role="img" aria-label="Recycling symbol">♻️</div>
              <h3>Renewable Resource</h3>
              <p>
                Made from pine sawdust—a byproduct of the lumber industry that
                would otherwise be discarded. Trees are replanted, making it
                a sustainable cycle aligned with
                <a href="https://fsc.org" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}> FSC forestry principles</a>.
                <a href={purrifyUrl('/learn/sustainability', 'benefits-renewable')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Our sourcing</a>.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon} role="img" aria-label="Seedling">🌱</div>
              <h3>Biodegradable</h3>
              <p>
                Unlike clay which sits in landfills for centuries, pine breaks
                down naturally. The non-waste portion can even be composted.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon} role="img" aria-label="Lightning bolt">⚡</div>
              <h3>Low Carbon Footprint</h3>
              <p>
                No strip mining, minimal processing, and lighter shipping weight
                all contribute to a significantly lower carbon footprint than clay.
                <a href={purrifyUrl('/learn/sustainability', 'benefits-carbon')} className={styles.inlineLink} rel="sponsored noopener noreferrer"> Calculate the impact</a>.
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
            <a href={purrifyUrl('/', 'benefits-cta')} className={styles.inlineLink} rel="sponsored noopener noreferrer">Purrify</a> offers the benefits of <strong>fine pine</strong> enhanced with natural biochar
            for maximum odor control. Join the movement toward <strong>natural wood-based cat litter</strong>.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={purrifyUrl('/products', 'benefits')}
              className={`btn btn-lg ${styles.btnWhite}`}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              Shop Fine Pine Litter
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
