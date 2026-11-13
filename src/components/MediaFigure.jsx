import { useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import './MediaFigure.css';

function sourceFor(item, stage) {
  if (stage === 'remote' && item.remoteSrc) return item.remoteSrc;
  return item.src;
}

export default function MediaFigure({ items = [], accent = 'default', variant = 'full' }) {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState('local');
  const item = items[index];

  if (!item || stage === 'placeholder') {
    return (
      <ImagePlaceholder
        label={item?.caption || item?.alt || 'Verified image unavailable'}
        accent={accent}
      />
    );
  }

  const handleError = () => {
    if (stage === 'local' && item.remoteSrc) {
      setStage('remote');
      return;
    }
    setStage('placeholder');
  };

  return (
    <figure className={`media-figure media-figure--${variant}`}>
      <div className="media-figure__frame">
        <img
          src={sourceFor(item, stage)}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          onError={handleError}
        />
      </div>
      {variant === 'compact' ? (
        <figcaption className="media-figure__card-label">{item.cardLabel}</figcaption>
      ) : (
        <>
          <figcaption className="media-figure__meta">
            <span className="media-figure__caption">{item.caption}</span>
            <span className="media-figure__credit">
              {item.attribution}.{' '}
              {item.licenseUrl ? (
                <a href={item.licenseUrl} target="_blank" rel="noopener noreferrer">
                  {item.license}
                </a>
              ) : (
                item.license
              )}
              {' · '}
              <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                {item.sourceLabel}
              </a>
              . Local copy resized for display.
            </span>
          </figcaption>
          {items.length > 1 ? (
            <div className="media-figure__thumbs" role="group" aria-label="More images in this exhibit">
              {items.map((thumb, thumbIndex) => (
                <button
                  key={thumb.id}
                  type="button"
                  className={thumbIndex === index ? 'is-active' : undefined}
                  aria-pressed={thumbIndex === index}
                  aria-label={`Show image: ${thumb.cardLabel}`}
                  onClick={() => {
                    setIndex(thumbIndex);
                    setStage('local');
                  }}
                >
                  <img
                    src={thumb.src}
                    alt=""
                    onError={(event) => {
                      const image = event.currentTarget;
                      if (image.dataset.triedRemote === '1' || !thumb.remoteSrc) return;
                      image.dataset.triedRemote = '1';
                      image.src = thumb.remoteSrc;
                    }}
                  />
                </button>
              ))}
            </div>
          ) : null}
        </>
      )}
    </figure>
  );
}

export function MediaVideo({ video }) {
  if (!video?.youtubeId) return null;

  return (
    <figure className="media-video">
      <div className="media-video__frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
          title={video.title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <figcaption className="media-figure__meta">
        <span className="media-figure__caption">{video.title}</span>
        <span className="media-figure__credit">
          Official upload by{' '}
          <a href={video.channelUrl} target="_blank" rel="noopener noreferrer">
            {video.channel}
          </a>
          {' · '}
          <a href={video.watchUrl} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
          . {video.note} Nothing plays until you press play.
        </span>
      </figcaption>
    </figure>
  );
}
