import { Metadata } from 'next';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Pine Cat Litter Buying Guide - How to Choose and Transition',
  description:
    'Complete guide to choosing and using pine cat litter. Learn how to transition your cat, maintain the litter box, and get the best results.',
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
            maintaining pine cat litter for the best results.
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="section">
        <div className="container">
          {/* Section 1 */}
          <div className={styles.guideSection}>
            <h2>
              <span className={styles.guideNumber}>1</span>
              Choosing the Right Pine Litter
            </h2>
            <div className={styles.contentGrid} style={{ gap: 'var(--space-8)' }}>
              <div className={styles.contentMain}>
                <h3>Pellets vs. Shavings</h3>
                <p>
                  Pine litter comes in two main forms: compressed pellets and loose
                  shavings. Pellets are the most popular choice—they&apos;re cleaner,
                  more absorbent, and break down into sawdust when wet, making it
                  easy to spot and remove soiled areas.
                </p>

                <h3>Look for Kiln-Dried Pine</h3>
                <p>
                  Quality pine litter should be kiln-dried. This process removes
                  moisture and potentially harmful phenolic compounds while
                  preserving the beneficial natural properties. Avoid raw or
                  untreated pine products not intended for pet use.
                </p>

                <h3>Check for Additives</h3>
                <p>
                  The best pine litters are 100% natural with no artificial
                  fragrances, dyes, or chemical additives. Some brands add baking
                  soda or other odor enhancers—these are generally safe but
                  unnecessary if you maintain the box properly.
                </p>
              </div>
              <aside className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <h4>Quick Checklist</h4>
                  <ul>
                    <li>✓ Kiln-dried pine</li>
                    <li>✓ 100% natural</li>
                    <li>✓ No artificial fragrances</li>
                    <li>✓ Pellet form preferred</li>
                    <li>✓ From reputable brand</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>

          {/* Section 2 */}
          <div className={styles.guideSection}>
            <h2>
              <span className={styles.guideNumber}>2</span>
              Transitioning Your Cat
            </h2>
            <div className={styles.contentMain} style={{ maxWidth: '100%' }}>
              <p>
                Most cats adapt to pine litter within 1-2 weeks. Here&apos;s the
                recommended transition approach:
              </p>

              <h3>Week 1: Introduction</h3>
              <p>
                Mix 25% pine pellets with 75% of your current litter. This lets
                your cat get used to the new texture and scent gradually.
              </p>

              <h3>Week 2: Half and Half</h3>
              <p>
                Increase to a 50/50 mix of pine and old litter. Most cats will
                be using the box normally by this point.
              </p>

              <h3>Week 3: Majority Pine</h3>
              <p>
                Switch to 75% pine, 25% old litter. Your cat should be fully
                comfortable with the new texture now.
              </p>

              <h3>Week 4: Complete Transition</h3>
              <p>
                Move to 100% pine litter. Monitor for the first few days to
                ensure your cat is using the box normally.
              </p>

              <div className={styles.sidebarCard} style={{ marginTop: 'var(--space-6)', maxWidth: '500px' }}>
                <h4>💡 Tips for Success</h4>
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
              <span className={styles.guideNumber}>3</span>
              Litter Box Setup
            </h2>
            <div className={styles.contentMain} style={{ maxWidth: '100%' }}>
              <h3>How Much Litter to Use</h3>
              <p>
                Fill the box with 1-2 inches of pine pellets. Unlike clay, you
                don&apos;t need a deep layer. The pellets expand as they absorb
                moisture, so starting with less is actually better.
              </p>

              <h3>Box Type Recommendations</h3>
              <p>
                Pine litter works with any style of litter box. However, if
                you want to take advantage of the sawdust-sifting method,
                consider a sifting litter box system:
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
              <span className={styles.guideNumber}>4</span>
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
                  <li>Refill with fresh pellets</li>
                </ul>
              </div>
              <aside className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <h4>🌲 Pine Tip</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    The natural pine scent is strongest with fresh pellets.
                    If you notice odors, it&apos;s usually a sign to add more
                    fresh pellets or do a complete change.
                  </p>
                </div>
              </aside>
            </div>
          </div>

          {/* Section 5 */}
          <div className={styles.guideSection}>
            <h2>
              <span className={styles.guideNumber}>5</span>
              Troubleshooting Common Issues
            </h2>
            <div className={styles.contentMain} style={{ maxWidth: '100%' }}>
              <h3>Cat Won&apos;t Use the Box</h3>
              <p>
                If your cat is avoiding the pine litter, try slowing down the
                transition. Go back to a higher percentage of the old litter
                and increase pine more gradually. Some cats may take 4-6 weeks.
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
              <span className={styles.guideNumber}>6</span>
              Disposal Options
            </h2>
            <div className={styles.contentMain} style={{ maxWidth: '100%' }}>
              <h3>Regular Trash</h3>
              <p>
                Pine litter can go in your regular garbage. It&apos;s biodegradable,
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
          <h2>Ready to Try Pine?</h2>
          <p>
            Purrify offers premium pine-based litter enhanced with natural
            biochar for the best odor control nature can provide.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={purrifyUrl('/products', 'guide')}
              className={`btn btn-lg ${styles.btnWhite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Purrify
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
