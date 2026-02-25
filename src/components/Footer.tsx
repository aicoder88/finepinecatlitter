import Link from 'next/link';
import styles from './Footer.module.css';

const purrifyUrl = (path: string, medium: string) =>
  `https://purrify.ca${path}?utm_source=finepinecatlitter&utm_medium=${medium}`;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            🌲 Fine Pine
          </Link>
          <p>
            Discover the natural power of pine cat litter. Simple, sustainable,
            and effective odor control straight from the forest.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Explore</h4>
          <div className={styles.links}>
            <Link href="/why-pine">Why Pine</Link>
            <Link href="/benefits">Benefits</Link>
            <Link href="/compare">Compare Litters</Link>
            <Link href="/guide">Buying Guide</Link>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Trust & Transparency</h4>
          <div className={styles.links}>
            <Link href="/about">About Us</Link>
            <Link href="/author/james-hartwell">Our Author</Link>
            <Link href="/editorial-policy">Editorial Policy</Link>
            <Link href="/testing-methodology">Testing Methodology</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link href="/corrections">Corrections Policy</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Purrify</h4>
          <div className={styles.links}>
            <a href={purrifyUrl('/products', 'footer')} rel="sponsored noopener noreferrer">
              All Products
            </a>
            <a href={purrifyUrl('/learn/how-it-works', 'footer')} rel="sponsored noopener noreferrer">
              How It Works
            </a>
            <a href={purrifyUrl('/learn/science', 'footer')} rel="sponsored noopener noreferrer">
              The Science
            </a>
            <a href={purrifyUrl('/learn/faq', 'footer')} rel="sponsored noopener noreferrer">
              FAQ
            </a>
            <a href={purrifyUrl('/learn/safety', 'footer')} rel="sponsored noopener noreferrer">
              Safety Info
            </a>
            <a href={purrifyUrl('/contact', 'footer')} rel="sponsored noopener noreferrer">
              Contact Purrify
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2025 Fine Pine Cat Litter.</p>
        <p className={styles.disclosure}>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>: 
          We may earn commissions from purchases made through links to Purrify products.
        </p>
      </div>
    </footer>
  );
}
