import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'James Hartwell - Cat Care Specialist & Author',
  description:
    'Learn about James Hartwell, cat care specialist and author at Fine Pine Cat Litter. Discover his expertise in natural cat care and pet product testing.',
  alternates: {
    canonical: '/author/james-hartwell',
  },
};

// Person Schema for James Hartwell
const authorSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "James Hartwell - Cat Care Specialist",
  "description": "Profile of James Hartwell, cat care specialist and author at Fine Pine Cat Litter.",
  "url": "https://www.finepinecatlitter.com/author/james-hartwell",
  "mainEntity": {
    "@type": "Person",
    "name": "James Hartwell",
    "jobTitle": "Cat Care Specialist & Product Researcher",
    "worksFor": {
      "@type": "Organization",
      "name": "Fine Pine Cat Litter",
      "url": "https://www.finepinecatlitter.com"
    },
    "description": "Cat care specialist with expertise in natural litter solutions, pet product testing, and sustainable pet care practices.",
    "knowsAbout": [
      "Natural cat litter",
      "Pine-based litter",
      "Cat behavior",
      "Pet product testing",
      "Sustainable pet care",
      "Feline health and wellness"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Canadian Pet Care Institute"
    }
  }
};

export default function AuthorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Author Profile</span>
          <h1>James Hartwell</h1>
          <p>Cat Care Specialist & Product Researcher</p>
        </div>
      </section>

      {/* Author Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2>About James</h2>
              <p>
                James Hartwell is a dedicated cat care specialist with over 8 years of experience 
                in pet product research, testing, and evaluation. As the primary author for 
                <strong> Fine Pine Cat Litter</strong>, James combines hands-on testing experience 
                with thorough research to provide cat owners with reliable, actionable information.
              </p>

              <h2>Expertise & Credentials</h2>
              
              <h3>Professional Experience</h3>
              <ul>
                <li>8+ years testing and reviewing pet care products</li>
                <li>Specialized focus on natural and sustainable cat litter solutions</li>
                <li>Collaborated with veterinarians on product safety evaluations</li>
                <li>Contributed to pet care publications and educational content</li>
                <li>Extensive experience with pine, clay, silica, and plant-based litters</li>
              </ul>

              <h3>Areas of Expertise</h3>
              <ul>
                <li><strong>Natural Cat Litter:</strong> In-depth knowledge of pine, wood, and plant-based alternatives</li>
                <li><strong>Product Testing:</strong> Systematic evaluation of odor control, absorption, and dust levels</li>
                <li><strong>Cat Behavior:</strong> Understanding litter box preferences and transition strategies</li>
                <li><strong>Sustainability:</strong> Environmental impact assessment of pet care products</li>
                <li><strong>Health & Safety:</strong> Awareness of respiratory health and allergen concerns</li>
              </ul>

              <h3>Research Methodology</h3>
              <p>
                James follows a rigorous <Link href="/testing-methodology" className={styles.inlineLink}>testing methodology</Link> that includes:
              </p>
              <ul>
                <li>Controlled side-by-side product comparisons</li>
                <li>Long-term usage testing (minimum 30 days per product)</li>
                <li>Consultation with veterinary professionals on safety claims</li>
                <li>Review of peer-reviewed research on litter materials</li>
                <li>Real-world testing with multiple cat households</li>
              </ul>

              <h2>Writing Philosophy</h2>
              <p>
                James believes in transparency and evidence-based recommendations. Every article 
                is thoroughly researched, with health and safety claims verified against reputable 
                sources. When recommending products, James prioritizes:
              </p>
              <ul>
                <li>Cat health and safety above all</li>
                <li>Environmental sustainability</li>
                <li>Practical effectiveness for everyday cat owners</li>
                <li>Value and accessibility</li>
              </ul>

              <h2>Content by James</h2>
              <p>
                James has authored comprehensive guides on pine cat litter, including:
              </p>
              <ul>
                <li><Link href="/why-pine" className={styles.inlineLink}>Why Fine Pine Works</Link> - The science behind pine litter</li>
                <li><Link href="/benefits" className={styles.inlineLink}>Benefits of Pine Litter</Link> - Complete benefits overview</li>
                <li><Link href="/compare" className={styles.inlineLink}>Litter Comparison Guide</Link> - Pine vs. other litter types</li>
                <li><Link href="/guide" className={styles.inlineLink}>Buying & Transition Guide</Link> - Practical usage advice</li>
              </ul>

              <h2>Connect</h2>
              <p>
                Have questions about cat litter or cat care? James is committed to helping 
                cat owners make informed decisions. Reach out through our 
                <Link href="/contact" className={styles.inlineLink}>contact page</Link>.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4 role="img" aria-label="Person">👤</h4>
                <h4>James Hartwell</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Cat Care Specialist<br />
                  Fine Pine Cat Litter
                </p>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Credentials</h4>
                <ul style={{ fontSize: '0.875rem' }}>
                  <li role="img" aria-label="Certificate">📜</li>
                  <li>8+ years product testing experience</li>
                  <li role="img" aria-label="Paw prints">🐾</li>
                  <li>Specialized in natural cat litter</li>
                  <li role="img" aria-label="Microscope">🔬</li>
                  <li>Evidence-based research approach</li>
                  <li role="img" aria-label="Handshake">🤝</li>
                  <li>Veterinary consultation network</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Content Standards</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  All content follows our{' '}
                  <Link href="/editorial-policy" className={styles.inlineLink}>editorial policy</Link>{' '}
                  and is reviewed for accuracy before publication.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
