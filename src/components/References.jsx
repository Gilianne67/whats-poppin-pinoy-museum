import { references, referencesIntro } from '../data/references';
import './References.css';

export default function References() {
  return (
    <div className="references page">
      <header className="references__header section-shell">
        <p className="gallery__kicker">Sources</p>
        <h1>References</h1>
        <p className="references__intro">{referencesIntro}</p>
      </header>

      <ol className="references__list section-shell">
        {references.map((ref, index) => (
          <li key={ref.id} className="references__item">
            <span className="references__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="references__label">{ref.label}</p>
              <p className="references__note">{ref.note}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="references__caveat section-shell">
        Where a specific URL is omitted, the museum relies on well-established public knowledge
        rather than inventing citations. Visitors should consult current scholarly and journalistic
        sources for deeper research.
      </p>
    </div>
  );
}
