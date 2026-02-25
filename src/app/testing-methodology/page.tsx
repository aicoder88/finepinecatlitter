import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Testing Methodology - Fine Pine Cat Litter',
  description:
    'Learn how we test and evaluate cat litter products. Our rigorous methodology ensures accurate, unbiased reviews of pine and natural litter options.',
  alternates: {
    canonical: '/testing-methodology',
  },
};

const testingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Testing Methodology - Fine Pine Cat Litter",
  "description": "Our rigorous methodology for testing and evaluating cat litter products.",
  "url": "https://www.finepinecatlitter.com/testing-methodology"
};

export default function TestingMethodologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testingSchema) }}
      />
      
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Our Process</span>
          <h1>Testing Methodology</h1>
          <p>
            How we evaluate cat litter products to provide accurate, 
            data-driven recommendations you can trust.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2>Our Testing Philosophy</h2>
              <p>
                At <strong>Fine Pine Cat Litter</strong>, we believe that effective product 
                evaluation requires both scientific rigor and real-world testing. Our 
                methodology combines controlled testing with extended in-home use to 
                provide comprehensive, practical insights.
              </p>

              <h2>Testing Categories</h2>
              
              <h3>1. Odor Control Assessment</h3>
              <p>
                Odor control is the primary concern for most cat owners. We evaluate:
              </p>
              <ul>
                <li><strong>Ammonia Neutralization:</strong> Testing how effectively litter neutralizes urine ammonia over 24-48 hours</li>
                <li><strong>Fecal Odor Containment:</strong> Assessment of odor containment for solid waste</li>
                <li><strong>Long-Term Effectiveness:</strong> Odor control performance over the full recommended usage period</li>
                <li><strong>Artificial vs. Natural:</strong> Distinguishing between masking odors with fragrance vs. neutralizing them</li>
              </ul>
              <p>
                <em>Method:</em> Controlled environment testing with standardized ammonia 
                sources and blind odor assessment panels.
              </p>

              <h3>2. Absorption & Clumping</h3>
              <p>
                We measure how effectively litter handles moisture:
              </p>
              <ul>
                <li><strong>Liquid Absorption Rate:</strong> Speed of absorption when liquid contacts the litter</li>
                <li><strong>Total Absorption Capacity:</strong> Maximum liquid volume absorbed per unit of litter</li>
                <li><strong>Clump Integrity:</strong> For clumping litters, how well clumps hold together during scooping</li>
                <li><strong>Sawdust Breakdown:</strong> For pine pellets, how effectively they break down when saturated</li>
              </ul>
              <p>
                <em>Method:</em> Standardized liquid volume tests with measurement of 
                absorption time and capacity.
              </p>

              <h3>3. Dust Levels</h3>
              <p>
                Dust is a concern for both human and feline respiratory health:
              </p>
              <ul>
                <li><strong>Pouring Dust:</strong> Dust generated when pouring litter into the box</li>
                <li><strong>Scooping Dust:</strong> Dust raised during daily maintenance</li>
                <li><strong>Cat Activity Dust:</strong> Dust produced during normal cat digging and covering</li>
                <li><strong>Respiratory Impact:</strong> Subjective assessment of dust presence in the air</li>
              </ul>
              <p>
                <em>Method:</em> Visual assessment during typical use scenarios, with 
                comparison against dust-control benchmarks.
              </p>

              <h3>4. Tracking & Scattering</h3>
              <p>
                We evaluate how much litter leaves the box:
              </p>
              <ul>
                <li><strong>Paw Adhesion:</strong> How much litter sticks to cat paws</li>
                <li><strong>Scatter Radius:</strong> Distance litter travels from the box</li>
                <li><strong>Floor Residue:</strong> Amount of litter dust/debris on surrounding floors</li>
              </ul>

              <h3>5. Cat Acceptance</h3>
              <p>
                The best litter is one your cat will use:
              </p>
              <ul>
                <li><strong>Initial Interest:</strong> How quickly cats investigate new litter</li>
                <li><strong>Consistent Usage:</strong> Whether cats reliably use the litter box</li>
                <li><strong>Paw Comfort:</strong> Observations of cat behavior while in the box</li>
                <li><strong>Transition Ease:</strong> How readily cats adapt from previous litter</li>
              </ul>

              <h2>Testing Protocol</h2>

              <h3>Phase 1: Controlled Testing (Days 1-7)</h3>
              <ul>
                <li>Standardized litter depth (2 inches for most types)</li>
                <li>Controlled environment (same room temperature, humidity)</li>
                <li>Documented daily observations</li>
                <li>Measurement of key metrics (absorption, odor, dust)</li>
              </ul>

              <h3>Phase 2: Extended Use (Days 8-30)</h3>
              <ul>
                <li>Real-world household conditions</li>
                <li>Daily maintenance according to manufacturer recommendations</li>
                <li>Ongoing observation of performance degradation</li>
                <li>Documentation of any issues or concerns</li>
              </ul>

              <h3>Phase 3: Comparison Testing</h3>
              <ul>
                <li>Side-by-side comparison with competing products</li>
                <li>Same conditions, same time period</li>
                <li>Direct performance comparisons</li>
              </ul>

              <h2>Our Testing Environment</h2>
              <p>
                We test in real homes with real cats to ensure practical relevance:
              </p>
              <ul>
                <li>Multiple cat households (2-4 cats) for realistic usage</li>
                <li>Various litter box types (open, covered, sifting)</li>
                <li>Different home environments (apartments, houses)</li>
                <li>Climate variations across Canadian regions</li>
              </ul>

              <h2>Evaluation Criteria Scoring</h2>
              <p>
                Products are rated on a scale of 1-5 for each category:
              </p>
              <ul>
                <li><strong>5 (Excellent):</strong> Outstanding performance, exceeds expectations</li>
                <li><strong>4 (Very Good):</strong> Above average, minor issues only</li>
                <li><strong>3 (Good):</strong> Meets standard expectations</li>
                <li><strong>2 (Fair):</strong> Below average, noticeable issues</li>
                <li><strong>1 (Poor):</strong> Significant problems, not recommended</li>
              </ul>

              <h2>Transparency in Testing</h2>
              <p>
                We maintain transparency about our testing:
              </p>
              <ul>
                <li>All products are tested for minimum 30 days before review</li>
                <li>We disclose when products are provided by manufacturers</li>
                <li>Testing methodology is consistent across all products</li>
                <li>We document both strengths and limitations</li>
              </ul>

              <h2>Limitations</h2>
              <p>
                We acknowledge the limitations of our testing:
              </p>
              <ul>
                <li>Results may vary with different cats and environments</li>
                <li>Individual cat preferences affect acceptance</li>
                <li>Long-term durability beyond 30 days not fully assessed</li>
                <li>Regional climate differences may affect performance</li>
              </ul>

              <h2>Continuous Improvement</h2>
              <p>
                We regularly refine our methodology:
              </p>
              <ul>
                <li>Annual review of testing protocols</li>
                <li>Incorporation of reader feedback</li>
                <li>Updates based on new research and standards</li>
                <li>Calibration against industry developments</li>
              </ul>

              <h2>Questions About Our Testing?</h2>
              <p>
                Want to know more about how we evaluate products? 
                <Link href="/contact" className={styles.inlineLink}>Contact us</Link> with your questions.
              </p>

              <p style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--cream-dark)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <strong>Last Updated:</strong> February 2025
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Testing Criteria</h4>
                <ul style={{ fontSize: '0.875rem' }}>
                  <li role="img" aria-label="Nose">👃</li>
                  <li>Odor Control</li>
                  <li role="img" aria-label="Droplet">💧</li>
                  <li>Absorption</li>
                  <li role="img" aria-label="Wind">💨</li>
                  <li>Dust Levels</li>
                  <li role="img" aria-label="Paw prints">🐾</li>
                  <li>Tracking</li>
                  <li role="img" aria-label="Cat">🐱</li>
                  <li>Cat Acceptance</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Testing Timeline</h4>
                <ul style={{ fontSize: '0.875rem' }}>
                  <li><strong>Days 1-7:</strong> Controlled testing</li>
                  <li><strong>Days 8-30:</strong> Extended use</li>
                  <li><strong>Ongoing:</strong> Comparison testing</li>
                  <li><strong>Annual:</strong> Methodology review</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Related Pages</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/editorial-policy" className={styles.inlineLink}>Editorial Policy</Link>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/author/james-hartwell" className={styles.inlineLink}>Our Tester</Link>
                  </li>
                  <li>
                    <Link href="/compare" className={styles.inlineLink}>Comparison Results</Link>
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
