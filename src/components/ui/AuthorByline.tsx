import Link from 'next/link';
import styles from './AuthorByline.module.css';

interface AuthorBylineProps {
  authorName: string;
  authorHref: string;
  authorTitle: string;
  publishedDate: string;
  reviewedDate: string;
  reviewerName?: string;
  reviewerHref?: string;
  className?: string;
}

export default function AuthorByline({
  authorName,
  authorHref,
  authorTitle,
  publishedDate,
  reviewedDate,
  reviewerName,
  reviewerHref,
  className = '',
}: AuthorBylineProps) {
  return (
    <div className={`${styles.authorByline} ${className}`}>
      <div className={styles.authorInfo}>
        <div className={styles.authorAvatar} role="img" aria-label="Author">
          👤
        </div>
        <div className={styles.authorDetails}>
          <Link href={authorHref} className={styles.authorName}>
            {authorName}
          </Link>
          <span className={styles.authorTitle}>{authorTitle}</span>
        </div>
      </div>
      
      <div className={styles.dates}>
        <div className={styles.dateItem}>
          <span className={styles.dateLabel}>Published:</span>
          <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
        </div>
        <div className={styles.dateItem}>
          <span className={styles.dateLabel}>Last Reviewed:</span>
          <time dateTime={reviewedDate}>{formatDate(reviewedDate)}</time>
        </div>
      </div>
      
      {reviewerName && (
        <div className={styles.reviewerInfo}>
          Medically reviewed by{' '}
          {reviewerHref ? (
            <Link href={reviewerHref}>{reviewerName}</Link>
          ) : (
            reviewerName
          )}
        </div>
      )}
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
