import styles from './Citations.module.css';

interface Citation {
  id: string;
  text: string;
  url?: string;
}

interface CitationsProps {
  citations: Citation[];
  className?: string;
}

export default function Citations({ citations, className = '' }: CitationsProps) {
  if (!citations || citations.length === 0) return null;

  return (
    <section className={`${styles.citations} ${className}`} aria-labelledby="citations-heading">
      <h3 id="citations-heading">
        <span role="img" aria-label="Books">📚</span> Sources & References
      </h3>
      <ol>
        {citations.map((citation) => (
          <li key={citation.id} id={`ref-${citation.id}`}>
            {citation.url ? (
              <a 
                href={citation.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {citation.text}
              </a>
            ) : (
              citation.text
            )}
          </li>
        ))}
      </ol>
      <p className={styles.sourceNote}>
        Medical and health claims are verified against peer-reviewed sources and veterinary 
        literature. See our <a href="/editorial-policy">editorial policy</a> for more information 
        on our sourcing standards.
      </p>
    </section>
  );
}

// Inline citation reference component
interface CitationRefProps {
  id: string;
}

export function CitationRef({ id }: CitationRefProps) {
  return (
    <sup>
      <a 
        href={`#ref-${id}`} 
        className={styles.citationRef}
        aria-label={`Reference ${id}`}
      >
        [{id}]
      </a>
    </sup>
  );
}
