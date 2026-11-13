import './ImagePlaceholder.css';

export default function ImagePlaceholder({ label, accent = 'default' }) {
  return (
    <figure className={`image-placeholder image-placeholder--${accent}`} role="img" aria-label={label}>
      <div className="image-placeholder__grid" aria-hidden="true" />
      <div className="image-placeholder__chrome" aria-hidden="true">
        <span className="image-placeholder__dot" />
        <span className="image-placeholder__dot" />
        <span className="image-placeholder__dot" />
        <span className="image-placeholder__bar" />
      </div>
      <figcaption className="image-placeholder__caption">{label}</figcaption>
    </figure>
  );
}
