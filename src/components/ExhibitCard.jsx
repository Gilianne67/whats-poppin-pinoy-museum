import ImagePlaceholder from './ImagePlaceholder';
import MediaFigure from './MediaFigure';
import { getMediaList } from '../data/media';
import './ExhibitCard.css';

const eraBadgeClass = {
  past: 'badge--past',
  present: 'badge--present',
  future: 'badge--future',
};

const eraLabels = {
  past: '2000–2010',
  present: 'Present',
  future: '2030 Projection',
};

export default function ExhibitCard({ exhibit, accent, onOpen }) {
  return (
    <article className="exhibit-card">
      <button
        type="button"
        className="exhibit-card__hit"
        onClick={() => onOpen(exhibit)}
        aria-label={`Open exhibit: ${exhibit.title}`}
      >
        {exhibit.mediaIds?.length ? (
          <MediaFigure
            items={getMediaList(exhibit.mediaIds)}
            accent={accent}
            variant="compact"
          />
        ) : (
          <ImagePlaceholder label={exhibit.imageLabel} accent={accent} />
        )}
        <div className="exhibit-card__body">
          <div className="exhibit-card__meta">
            <span className={`badge ${eraBadgeClass[exhibit.era]}`}>
              {eraLabels[exhibit.era]}
            </span>
            {exhibit.speculative ? (
              <span className="badge badge--future">Speculative</span>
            ) : null}
          </div>
          <h3 className="exhibit-card__title">{exhibit.title}</h3>
          <p className="exhibit-card__summary">{exhibit.summary}</p>
          <span className="exhibit-card__cta">View exhibit →</span>
        </div>
      </button>
    </article>
  );
}
