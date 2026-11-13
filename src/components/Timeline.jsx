import { timelineEvents } from '../data/timeline';
import './Timeline.css';

export default function Timeline() {
  return (
    <div className="timeline page">
      <header className="timeline__header section-shell">
        <p className="gallery__kicker">Chronology</p>
        <h1>Museum Timeline</h1>
        <p className="timeline__lead">
          Key beats from the 2000s through today, plus clearly labeled projections toward 2030.
        </p>
      </header>

      <ol className="timeline__list section-shell">
        {timelineEvents.map((event, index) => (
          <li
            key={event.id}
            className={`timeline__item timeline__item--${event.era}`}
            style={{ '--i': index }}
          >
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__card">
              <div className="timeline__meta">
                <time className="timeline__year">{event.year}</time>
                {event.speculative ? (
                  <span className="badge badge--future">Projection</span>
                ) : (
                  <span className={`badge badge--${event.era === 'future' ? 'future' : event.era}`}>
                    {event.era === 'past' ? 'Past' : event.era === 'present' ? 'Present' : '2030'}
                  </span>
                )}
              </div>
              <h2 className="timeline__title">{event.title}</h2>
              <p className="timeline__detail">{event.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
