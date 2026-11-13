import { futureCategories, futureIntro } from '../data/future';
import { getMediaList } from '../data/media';
import MediaFigure from './MediaFigure';
import './FutureCategories.css';

export default function FutureCategories() {
  return (
    <div className="future page">
      <header className="future__header section-shell">
        <p className="gallery__kicker">{futureIntro.subtitle}</p>
        <h1>{futureIntro.title}</h1>
        <p className="future__lead">{futureIntro.lead}</p>
        <p className="future__disclaimer" role="note">
          All six categories below are discussion projections for ~2030, grounded in patterns
          visible from 2000–present — not claims about what will definitely happen.
        </p>
      </header>

      <div className="future__grid section-shell">
        {futureCategories.map((category) => (
          <article key={category.id} className="future-card" id={category.id}>
            {category.mediaIds?.length ? (
              <MediaFigure items={getMediaList(category.mediaIds)} variant="full" />
            ) : null}
            <div className="future-card__icon" aria-hidden="true">
              {category.icon}
            </div>
            <h2 className="future-card__title">{category.title}</h2>
            <p className="future-card__summary">{category.summary}</p>
            <p className="future-card__projection">{category.projection}</p>
            <p className="future-card__continuity">
              <span className="future-card__label">Continuity thread</span>
              {category.continuity}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
