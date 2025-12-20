import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import { FavoritesPage } from './pages/favorites/favorites.page';
import LoginPage from './pages/login/login.page';
import MainPage from './pages/main/main.page';
import { OfferPage } from './pages/offer/offer.page';
import { Page404 } from './pages/page-404/page-404.page';
import PrivateRoute from './components/private-route/private-route.component';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Offer} element={<OfferPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
