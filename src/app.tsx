import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import LoginPage from './pages/login/login.page';
import MainPage from './pages/main/main.page';
import { Page404 } from './pages/page-404/page-404.page';
import PrivateRoute from './components/private-route/private-route.component';
import { OfferType } from './types/offer';
import { ReviewType } from './types/review';
import FavoritesPage from './pages/favorites/favorites-page';
import OfferPage from './pages/offer/offer-page';

type TAppProps = {
  offers: OfferType[];
  reviews: ReviewType[];
};

export const App = ({ offers, reviews }: TAppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage offers={offers} />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesPage offers={offers} />
          </PrivateRoute>
        }
      />
      <Route
        path={`${AppRoute.Offer}/:id`}
        element={
          <OfferPage offers={offers} offersNearby={offers} reviews={reviews} />
        }
      />
      <Route path={AppRoute.Page404} element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
