import { Link } from 'react-router-dom';
import { conclusionContent } from '../data/references';
import './Conclusion.css';

export default function Conclusion() {
  return (
    <div className="conclusion page">
      <div className="conclusion__panel section-shell">
        <p className="gallery__kicker">Closing hall</p>
        <h1>{conclusionContent.title}</h1>
        <p className="conclusion__lead">{conclusionContent.lead}</p>
        {conclusionContent.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        <blockquote className="conclusion__takeaway">
          <p>{conclusionContent.takeaway}</p>
        </blockquote>
        <div className="conclusion__actions">
          <Link to="/references" className="btn btn--primary">
            See References
          </Link>
          <Link to="/" className="btn btn--ghost conclusion__ghost">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
