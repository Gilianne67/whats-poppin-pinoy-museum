import { useMemo, useState } from 'react';
import { museumMeta } from '../data/exhibits';
import ExhibitCard from './ExhibitCard';
import ImagePlaceholder from './ImagePlaceholder';
import Modal from './Modal';
import './Gallery.css';

const eraOrder = ['past', 'present', 'future'];

export default function Gallery({ gallery, exhibits }) {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState('all');

  const grouped = useMemo(() => {
    const map = { past: [], present: [], future: [] };
    exhibits.forEach((item) => {
      map[item.era]?.push(item);
    });
    return map;
  }, [exhibits]);

  const visible = filter === 'all' ? exhibits : exhibits.filter((e) => e.era === filter);

  return (
    <div className="gallery page">
      <header className="gallery__header section-shell">
        <p className="gallery__kicker">Gallery</p>
        <h1 className="gallery__title">{gallery.title}</h1>
        <p className="gallery__tagline">{gallery.tagline}</p>
        <p className="gallery__intro">{gallery.intro}</p>

        <div className="gallery__filters" role="group" aria-label="Filter exhibits by era">
          <button
            type="button"
            className={`filter-chip${filter === 'all' ? ' is-active' : ''}`}
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
          >
            All eras
          </button>
          {museumMeta.eras.map((era) => (
            <button
              key={era.id}
              type="button"
              className={`filter-chip${filter === era.id ? ' is-active' : ''}`}
              onClick={() => setFilter(era.id)}
              aria-pressed={filter === era.id}
            >
              {era.label}
            </button>
          ))}
        </div>
      </header>

      {filter === 'all' ? (
        eraOrder.map((eraId) => (
          <section
            key={eraId}
            className="gallery__era section-shell"
            aria-labelledby={`era-${gallery.id}-${eraId}`}
          >
            <div className="gallery__era-head">
              <h2 id={`era-${gallery.id}-${eraId}`}>
                {museumMeta.eras.find((e) => e.id === eraId)?.label}
              </h2>
              {eraId === 'future' ? (
                <p className="gallery__spec-note">
                  Speculative projections — not historical claims.
                </p>
              ) : null}
            </div>
            <div className="gallery__grid">
              {grouped[eraId].map((exhibit) => (
                <ExhibitCard
                  key={exhibit.id}
                  exhibit={exhibit}
                  accent={gallery.accent}
                  onOpen={setActive}
                />
              ))}
            </div>
          </section>
        ))
      ) : (
        <section className="gallery__era section-shell" aria-label="Filtered exhibits">
          <div className="gallery__grid">
            {visible.map((exhibit) => (
              <ExhibitCard
                key={exhibit.id}
                exhibit={exhibit}
                accent={gallery.accent}
                onOpen={setActive}
              />
            ))}
          </div>
        </section>
      )}

      <Modal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        title={active?.title || 'Exhibit'}
      >
        {active ? (
          <div className="exhibit-detail">
            <div className="exhibit-detail__badges">
              <span className={`badge badge--${active.era === 'future' ? 'future' : active.era}`}>
                {museumMeta.eras.find((e) => e.id === active.era)?.label}
              </span>
              {active.speculative ? (
                <span className="badge badge--future">Projection</span>
              ) : null}
            </div>
            <ImagePlaceholder label={active.imageLabel} accent={gallery.accent} />
            <p className="exhibit-detail__summary">{active.summary}</p>
            <p>{active.description}</p>
            <ul className="exhibit-detail__tags">
              {active.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
