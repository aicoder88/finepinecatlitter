import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Pine Cat Litter Buying Guide - How to Choose and Transition',
  description:
    'Complete guide to choosing and using fine pine cat litter. Learn how to transition your cat, maintain the litter box, and get the best results from wood-based litter.',
  alternates: {
    canonical: '/guide',
  },
  openGraph: {
    title: 'Pine Cat Litter Buying Guide - How to Choose and Transition',
    description:
      'Complete guide to choosing and using pine cat litter. Learn how to transition your cat and maintain the litter box.',
    url: '/guide',
    images: ['/og-image.png'],
  },
};

const purrifyUrl = (path: string, medium: string) =>
  `https://purrify.ca${path}?utm_source=finepinecatlitter&utm_medium=${medium}`;

export default function GuidePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Complete Guide</span>
          <h1>Pine Litter Buying Guide</h1>
          <p>
            Everything you need to know about choosing, transitioning to, and
            maintaining <strong>fine pine cat litter</strong> for the best results. Looking for <a href={purrifyUrl('/products', 'guide-hero')} className={styles.inlineLink}>premium pine litter options</a>? We&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="section">
        <div className="container">
          {/* Section 1 */}
          <div className={styles.guideSection}>
            <h2>
              <span className={styles.guideNumber} role="img" aria-label="Number one">1</span>
              Choosing the Right Pine Litter
            </h2>
            <div className={styles.contentGrid} style={{ gap: 'var(--space-8)' }}>
              <div className={styles.contentMain}>
                <h3>Pellets vs. Shavings</h3>
                <p>
                  <strong>Pine cat litter</strong> comes in two main forms: compressed pellets and loose
                  shavings. Pellets are the most popular choice—they&apos;re cleaner,
                  more absorbent, and break down into sawdust when wet, making it
                  easy to spot and remove soiled areas. <a href={purrifyUrl('/products', 'guide-pellets')} className={styles.inlineLink}>Purrify&apos;s pine pellets</a> are designed for maximum absorption.
                </p>

                <h3>Look for Kiln-Dried Pine</h3>
                <p>
                  Quality <strong>wood-based cat litter</strong> should be kiln-dried. This process removes
                  moisture and potentially harmful phenolic compounds while
                  preserving the beneficial natural properties. Avoid raw or
                  untreated pine products not intended for pet use. The <a href={purrifyUrl('/learn/safety', 'guide-safety')} className={styles.inlineLink}>best pine litters</a> are always kiln-dried.
                </p>

                <h3>Check for Additives</h3>
                <p>
                  The best <strong>natural pine litter</strong> is 100% natural with no artificial
                  fragrances, dyes, or chemical additives. Some brands add baking
                  soda or other odor enhancers—these are generally safe but
                  unnecessary if you maintain the box properly. <a href={purrifyUrl('/learn/how-it-works', 'guide-additives')} className={styles.inlineLink}>Learn why pure pine works best</a>.
                </p>
              </div>
              <aside className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <h4>Quick Checklist</h4>
                  <ul>
                    <li role="img" aria-label="Check mark">✓ Kiln-dried pine</li>
                    <li role="img" aria-label="Check mark">✓ 100% natural</li>
                    <li role="img" aria-label="Check mark">✓ No artificial fragrances</li>
                    <li role="img" aria-label="Check mark">✓ Pellet form preferred</li>
                    <li role="img" aria-label="Check mark">✓ From reputable brand</li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-4)', fontSize: '0.875rem' }}>
                    <a href={purrifyUrl('/products', 'guide-checklist')} className={styles.inlineLink}>Shop kiln-dried pine litter →</a>
                  </p>
                </div>
              </aside>
            </div>
          </div>

          {/* Section 2 */}
          <div className={styles.guideSection}>
            <h2>
              <span className={styles.guideNumber} role="img" aria-label="Number two">2</span>
              Transitioning Your Cat
            </h2>
            <div className={styles.contentMain} style={{ maxWidth: '100%' }}>
              <p>
                Most cats adapt to <strong>biodegradable pine litter</strong> within 1-2 weeks. Here&apos;s the
                recommended transition approach:
              </p>

              <h3>Week 1: Introduction</h3>
              <p>
                Mix 25% pine pellets with 75% of your current litter. This lets
                your cat get used to the new texture and scent gradually. <a href={purrifyUrl('/learn/faq', 'guide-transition')} className={styles.inlineLink}>See our FAQ</a> for tips on picky cats.
              </p>

              <h3>Week 2: Half and Half</h3>
              <p>
                Increase to a 50/50 mix of pine and old litter. Most cats will
                be using the box normally by this point.
              </p>

              <h3>Week 3: Majority Pine</h3>
              <p>
                Switch to 75% pine, 25% old litter. Your cat should be fully
                comfortable with the <strong>fine pine texture</strong> now.
              </p>

              <h3>Week 4: Complete Transition</h3>
              <p>
                Move to 100% pine litter. Monitor for the first few days to
                ensure your cat is using the box normally. Need help? <a href={purrifyUrl('/contact', 'guide-help')} className={styles.inlineLink}>Contact our team</a>.
              </p>

              <div className={styles.sidebarCard} style={{ marginTop: 'var(--space-6)', maxWidth: '500px' }}>
                <h4 role="img" aria-label="Light bulb">💡 Tips for Success</h4>
                <ul>
                  <li>Keep the box in the same location</li>
                  <li>Don&apos;t change boxes during transition</li>
                  <li>Maintain normal cleaning schedule</li>
                  <li>Be patient—some cats need extra time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className={styles.guideSection}>
            <h2>
              <span className={styles.guideNumber} role="img" aria-label="Number three">3</span>
              Litter Box Setup
            </h2>
            <div className={styles.contentMain} style={{ maxWidth: '100%' }}>
              <h3>How Much Litter to Use</h3>
              <p>
                Fill the box with 1-2 inches of <strong>pine pellets</strong>. Unlike clay, you
                don&apos;t need a deep layer. The pellets expand as they absorb
                moisture, so starting with less is actually better. <a href={purrifyUrl('/products', 'guide-amount')} className={styles.inlineLink}>Get the right amount</a> of pine litter for your cat.
              </p>

              <h3>Box Type Recommendations</h3>
              <p>
                <strong>Pine cat litter</strong> works with any style of litter box. However, if
                you want to take advantage of the sawdust-sifting method,
                consider a <a href={purrifyUrl('/products/litter-box', 'guide-box')} className={styles.inlineLink}>sifting litter box system</a>:
              </p>
              <ul>
                <li>Fresh pellets stay on top</li>
                <li>Saturated sawdust falls through the grate</li>
                <li>Easy disposal of used material</li>
                <li>Less litter waste overall</li>
              </ul>

              <h3>Location Matters</h3>
              <p>
                Place the box in a quiet, accessible location away from food
                and water. Cats prefer privacy, but the box should still be
                easy for you to access for regular maintenance.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className={styles.guideSection}>
            <h2>
              <span className={styles.guideNumber} role="img" aria-label="Number four">4</span>
              Daily & Weekly Maintenance
            </h2>
            <div className={styles.contentGrid} style={{ gap: 'var(--space-8)' }}>
              <div className={styles.contentMain}>
                <h3>Daily Tasks</h3>
                <ul>
                  <li>Remove solid waste with a scoop</li>
                  <li>Stir the litter to distribute sawdust</li>
                  <li>Check moisture levels</li>
                  <li>Add fresh pellets if needed</li>
                </ul>

                <h3>Weekly Tasks</h3>
                <ul>
                  <li>Sift out saturated sawdust (if using sifting box)</li>
                  <li>Top up with fresh pellets</li>
                  <li>Wipe down box edges</li>
                </ul>

                <h3>Monthly Tasks</h3>
                <ul>
                  <li>Complete litter change</li>
                  <li>Wash box with mild soap</li>
                  <li>Rinse thoroughly and dry completely</li>
                  <li>Refill with fresh <a href={purrifyUrl('/products', 'guide-refill')} className={styles.inlineLink}>pine litter</a></li>
                </ul>
              </div>
              <aside className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <h4 role="img" aria-label="Pine tree">🌲</h4>
                  <h4>Pine Tip</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    The natural pine scent is strongest with fresh pellets.
                    If you notice odors, it&apos;s usually a sign to add more
                    fresh pellets or do a complete change. <a href={purrifyUrl('/learn/faq', 'guide-tip')} className={styles.inlineLink}>More tips</a>.
                  </p>
                </div>
              </aside>
            </div>
          </div>

          {/* Section 5 */}
          <div className={styles.guideSection}>
            <h2>
              <span className={styles.guideNumber} role="img" aria-label="Number five">5</span>
              Troubleshooting Common Issues
            </h2>
            <div className={styles.contentMain} style={{ maxWidth: '100%' }}>
              <h3>Cat Won&apos;t Use the Box</h3>
              <p>
                If your cat is avoiding the <strong>pine litter</strong>, try slowing down the
                transition. Go back to a higher percentage of the old litter
                and increase pine more gradually. Some cats may take 4-6 weeks. <a href={purrifyUrl('/learn/faq', 'guide-troubleshoot')} className={styles.inlineLink}>Read our transition FAQ</a>.
              </p>

              <h3>Odor Issues</h3>
              <p>
                Pine naturally controls odors, but if you&apos;re noticing smells:
              </p>
              <ul>
                <li>Increase scooping frequency</li>
                <li>Add more fresh pellets</li>
                <li>Ensure adequate ventilation</li>
                <li>Consider a complete litter change</li>
              </ul>
              <p>For maximum odor control, try <a href={purrifyUrl('/products', 'guide-odor')} className={styles.inlineLink}>Purrify with biochar</a>.</p>

              <h3>Tracking</h3>
              <p>
                While pine tracks less than clay, some sawdust may stick to paws.
                A litter mat outside the box catches most of it. Pellets themselves
                rarely track because of their larger size.
              </p>

              <h3>Pellets Not Breaking Down</h3>
              <p>
                If pellets aren&apos;t breaking down, they may not be getting wet
                enough (which is good—means they&apos;re still fresh!). Don&apos;t worry
                about breaking them down manually; just remove solids and let
                the system work naturally.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className={styles.guideSection}>
            <h2>
              <span className={styles.guideNumber} role="img" aria-label="Number six">6</span>
              Disposal Options
            </h2>
            <div className={styles.contentMain} style={{ maxWidth: '100%' }}>
              <h3>Regular Trash</h3>
              <p>
                <strong>Biodegradable pine litter</strong> can go in your regular garbage. It&apos;s biodegradable,
                so it will break down in landfills much faster than clay.
              </p>

              <h3>Composting (Non-Waste Only)</h3>
              <p>
                Clean, unused pine sawdust and pellets can be composted. However,
                never compost cat waste—it can contain harmful pathogens. Only
                compost the clean, saturated sawdust that didn&apos;t contact feces.
              </p>

              <h3>Never Flush</h3>
              <p>
                Despite some claims, we don&apos;t recommend flushing any cat litter.
                Cat waste can contain Toxoplasma gondii, which isn&apos;t fully
                removed by water treatment and can harm marine wildlife.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Try Fine Pine?</h2>
          <p>
            <a href={purrifyUrl('/', 'guide-cta')} className={styles.inlineLink}>Purrify</a> offers premium <strong>pine-based litter</strong> enhanced with natural
            biochar for the best odor control nature can provide. Join thousands of happy cat owners who&apos;ve switched to <strong>fine pine cat litter</strong>.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={purrifyUrl('/products', 'guide')}
              className={`btn btn-lg ${styles.btnWhite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Pine Litter
            </a>
            <a
              href={purrifyUrl('/learn/faq', 'guide')}
              className={`btn btn-lg ${styles.btnOutline}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View FAQ →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
