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
          <h4>Purrify</h4>
          <div className={styles.links}>
            <a href={purrifyUrl('/products', 'footer')} target="_blank" rel="noopener noreferrer">
              All Products
            </a>
            <a href={purrifyUrl('/learn/how-it-works', 'footer')} target="_blank" rel="noopener noreferrer">
              How It Works
            </a>
            <a href={purrifyUrl('/learn/science', 'footer')} target="_blank" rel="noopener noreferrer">
              The Science
            </a>
            <a href={purrifyUrl('/learn/faq', 'footer')} target="_blank" rel="noopener noreferrer">
              FAQ
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Support</h4>
          <div className={styles.links}>
            <a href={purrifyUrl('/learn/safety', 'footer')} target="_blank" rel="noopener noreferrer">
              Safety Info
            </a>
            <a href={purrifyUrl('/contact', 'footer')} target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2025 Fine Pine Cat Litter. A Purrify resource.</p>
      </div>
    </footer>
  );
}
