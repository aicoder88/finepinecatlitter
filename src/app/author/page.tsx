import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'Our Authors - Fine Pine Cat Litter',
  description:
    'Meet the experts behind Fine Pine Cat Litter. Learn about our authors credentials and expertise in cat care and pet products.',
  alternates: {
    canonical: '/author',
  },
};

export default function AuthorsIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Expert Team</span>
          <h1>Our Authors</h1>
          <p>
            Meet the experts behind our content. Experienced professionals 
            dedicated to helping you make informed decisions about cat care.
          </p>
        </div>
      </section>

      {/* Authors List */}
      <section className="section">
        <div className="container">
          <div className={styles.cardsGrid}>
            <div className={`${styles.card} ${styles.cardFeatured}`}>
              <span className="badge">Primary Author</span>
              <h3 style={{ marginTop: 'var(--space-4)' }}>James Hartwell</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Cat Care Specialist & Product Researcher
              </p>
              <p>
                James brings years of hands-on experience in cat care and pet product 
                evaluation. He specializes in testing and reviewing natural cat litter 
                solutions, with a focus on sustainability and cat health.
              </p>
              <Link href="/author/james-hartwell" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>
                View Full Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
