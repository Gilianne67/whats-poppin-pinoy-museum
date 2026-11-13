import { references, referencesIntro } from '../data/references';
import { listMediaCredits } from '../data/media';
import './References.css';

export default function References() {
  const credits = listMediaCredits();

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

      <section className="references__credits section-shell" aria-labelledby="media-credits-heading">
        <h2 id="media-credits-heading">Image and video credits</h2>
        <p className="references__intro">
          Stills below are the Commons files stored in this site. Where one file illustrates more
          than one exhibit, it is listed once. Videos are official YouTube uploads and do not
          autoplay.
        </p>
        <ul className="references__credits-list">
          {credits.images.map((item) => (
            <li key={item.sourceUrl}>
              <p className="references__label">{item.cardLabel}</p>
              <p className="references__note">
                {item.attribution}. {item.license}.{' '}
                <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {item.sourceLabel}
                </a>
                {item.licenseUrl ? (
                  <>
                    {' · '}
                    <a href={item.licenseUrl} target="_blank" rel="noopener noreferrer">
                      License
                    </a>
                  </>
                ) : null}
              </p>
            </li>
          ))}
          {credits.videos.map((video) => (
            <li key={video.id}>
              <p className="references__label">{video.title}</p>
              <p className="references__note">
                {video.channel}. {video.note}{' '}
                <a href={video.watchUrl} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p className="references__caveat section-shell">
        Where a specific URL is omitted, the museum relies on well-established public knowledge
        rather than inventing citations. Visitors should consult current scholarly and journalistic
        sources for deeper research.
      </p>
    </div>
  );
}
