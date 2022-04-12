import ROUTES from 'constants/routes';
import AlbumEditorPage from 'Pages/AlbumEditorPage/AlbumEditorPage';
import AlbumsPage from 'Pages/AlbumsPage/AlbumsPage';
import ForeclosureEditorPage from 'Pages/ForeclosureEditorPage/ForeclosureEditorPage';
import LineEditorPage from 'Pages/LineEditorPage/LineEditorPage';
import LoginPage from 'Pages/LoginPage/LoginPage';
import TimetablePage from 'Pages/TimetablePage/TimetablePage';
import { Routes, Route, Navigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ProtectedPanel from './components/ProtectedPanel/ProtectedPanel';

const RoutesSwitch = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route element={<ProtectedPanel />}>
          <Route path={ROUTES.timetable} element={<TimetablePage />} />
          <Route path={ROUTES.lines}>
            <Route path=":id" element={<LineEditorPage />} />
            <Route path="new" element={<LineEditorPage />} />
            <Route path="" element={<Navigate to={ROUTES.timetable} />} />
          </Route>
          <Route path={ROUTES.foreclosures}>
            <Route path=":id" element={<ForeclosureEditorPage />} />
            <Route path="new" element={<ForeclosureEditorPage />} />
            <Route path="" element={<Navigate to={ROUTES.timetable} />} />
          </Route>
          <Route path={ROUTES.albums}>
            <Route path=":id" element={<AlbumEditorPage />} />
            <Route path="new" element={<AlbumEditorPage />} />
            <Route path="" element={<AlbumsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.timetable} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSwitch;
