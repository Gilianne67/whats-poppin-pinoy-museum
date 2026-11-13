import { Navigate } from 'react-router-dom';
import Gallery from '../components/Gallery';
import { getExhibitsForGallery, getGalleryBySlug } from '../data/exhibits';

export default function GalleryPage({ slug }) {
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    return <Navigate to="/" replace />;
  }

  const exhibits = getExhibitsForGallery(gallery.id);

  return <Gallery gallery={gallery} exhibits={exhibits} />;
}
