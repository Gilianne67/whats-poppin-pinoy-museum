import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import FuturePage from './pages/FuturePage';
import TimelinePage from './pages/TimelinePage';
import ConclusionPage from './pages/ConclusionPage';
import ReferencesPage from './pages/ReferencesPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="technology" element={<GalleryPage slug="technology" />} />
        <Route path="performance" element={<GalleryPage slug="performance" />} />
        <Route path="globalization" element={<GalleryPage slug="globalization" />} />
        <Route path="future" element={<FuturePage />} />
        <Route path="timeline" element={<TimelinePage />} />
        <Route path="conclusion" element={<ConclusionPage />} />
        <Route path="references" element={<ReferencesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
