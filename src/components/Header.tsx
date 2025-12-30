'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/why-pine', label: 'Why Pine' },
  { href: '/benefits', label: 'Benefits' },
  { href: '/compare', label: 'Compare' },
  { href: '/guide', label: 'Guide' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🌲</span>
          Fine Pine
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://purrify.ca/products?utm_source=finepinecatlitter&utm_medium=header"
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Purrify
        </a>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`${styles.mobileNav} ${mobileOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://purrify.ca/products?utm_source=finepinecatlitter&utm_medium=mobile-header"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Purrify →
        </a>
      </nav>
    </header>
  );
}
