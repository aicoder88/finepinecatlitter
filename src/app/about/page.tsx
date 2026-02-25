import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export const metadata: Metadata = {
  title: 'About Fine Pine Cat Litter - Our Story & Mission',
  description:
    'Learn about Fine Pine Cat Litter, a trusted resource for natural cat care. Discover our mission to help cat owners make informed decisions about pine litter.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Fine Pine Cat Litter - Our Story & Mission',
    description:
      'Learn about Fine Pine Cat Litter, a trusted resource for natural cat care.',
    url: '/about',
  },
};

// Organization Schema
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Fine Pine Cat Litter",
  "description": "Learn about Fine Pine Cat Litter, a trusted resource for natural cat care backed by Purrify.",
  "url": "https://www.finepinecatlitter.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Fine Pine Cat Litter",
    "url": "https://www.finepinecatlitter.com",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Purrify",
      "url": "https://purrify.ca"
    },
    "foundingDate": "2024",
    "areaServed": "Canada",
    "knowsAbout": [
      "Natural cat litter",
      "Pine-based cat litter",
      "Sustainable pet care",
      "Cat health and wellness"
    ]
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className="badge">Our Story</span>
          <h1>About Fine Pine Cat Litter</h1>
          <p>
            A trusted resource for cat owners seeking natural, sustainable litter solutions.
            Backed by science, guided by experience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2>Who We Are</h2>
              <p>
                <strong>Fine Pine Cat Litter</strong> is an educational resource created by 
                <Link href="https://purrify.ca" className={styles.inlineLink}> Purrify</Link>, 
                a Canadian company dedicated to natural cat care solutions. We&apos;ve built 
                this site to help cat owners understand the benefits of pine-based litter 
                and make informed decisions for their pets and the planet.
              </p>

              <h2>Our Mission</h2>
              <p>
                We believe that choosing the right cat litter shouldn&apos;t be complicated. 
                Our mission is to provide clear, evidence-based information about 
                <strong> natural pine cat litter</strong>—its benefits, how it works, and 
                how to use it effectively.
              </p>
              <p>
                We&apos;re committed to transparency, sustainability, and the well-being of 
                cats and their owners across Canada.
              </p>

              <h2>What We Do</h2>
              <ul>
                <li>Research and document the science behind pine litter effectiveness</li>
                <li>Provide unbiased comparisons of different litter types</li>
                <li>Share practical guides for transitioning cats to pine litter</li>
                <li>Promote sustainable, eco-friendly pet care practices</li>
                <li>Answer common questions about natural cat litter</li>
              </ul>

              <h2>Our Values</h2>
              <h3>Transparency</h3>
              <p>
                We clearly disclose our relationship with Purrify and our 
                <Link href="/affiliate-disclosure" className={styles.inlineLink}>commercial relationships</Link>. 
                Our content is created to educate first, promote second.
              </p>

              <h3>Accuracy</h3>
              <p>
                All health and safety claims are backed by reputable sources. 
                Our <Link href="/editorial-policy" className={styles.inlineLink}>editorial standards</Link> ensure 
                that information is fact-checked and reviewed before publication.
              </p>

              <h3>Sustainability</h3>
              <p>
                We&apos;re passionate about reducing the environmental impact of pet care. 
                Pine litter represents a significant improvement over traditional clay 
                litter in terms of sustainability.
              </p>

              <h2>Our Team</h2>
              <p>
                Our content is researched and written by 
                <Link href="/author/james-hartwell" className={styles.inlineLink}>James Hartwell</Link>, 
                a cat care specialist with years of experience in pet product testing and review. 
                All content undergoes review before publication.
              </p>

              <h2>Contact Us</h2>
              <p>
                Have questions or feedback? We&apos;d love to hear from you. 
                Visit our <Link href="/contact" className={styles.inlineLink}>contact page</Link> or 
                reach out through <Link href="https://purrify.ca/contact" className={styles.inlineLink}>Purrify&apos;s support team</Link>.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Quick Facts</h4>
                <ul>
                  <li role="img" aria-label="Maple leaf">🍁</li>
                  <li>Canadian-owned and operated</li>
                  <li role="img" aria-label="Tree">🌲</li>
                  <li>Focused on sustainable solutions</li>
                  <li role="img" aria-label="Cat">🐱</li>
                  <li>Cat-first approach to product recommendations</li>
                  <li role="img" aria-label="Check mark">✓</li>
                  <li>Evidence-based content</li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Related Pages</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/editorial-policy" className={styles.inlineLink}>Editorial Policy</Link>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/testing-methodology" className={styles.inlineLink}>Testing Methodology</Link>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <Link href="/affiliate-disclosure" className={styles.inlineLink}>Affiliate Disclosure</Link>
                  </li>
                  <li>
                    <Link href="/author/james-hartwell" className={styles.inlineLink}>About Our Author</Link>
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
