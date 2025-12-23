import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/private-route/private-route';
import { AppRoute } from './const';
import FavoritesPage from './pages/favorites/favorites-page';
import LoginPage from './pages/login/login-page';
import MainPage from './pages/main/main-page';
import OfferPage from './pages/offer/offer-page';
import { AppDispatchType } from './store';
import { OfferPreviewType } from './types/offer-preview';
import Page404 from './pages/page-404/page-404';
import { fetchCheckAuth } from './store/user/action';

function App() {
  const offers: OfferPreviewType[] = [];
  const dispatch = useDispatch<AppDispatchType>();

  useEffect(() => {
    dispatch(fetchCheckAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage />}
        />
        <Route
          path={AppRoute.Page404}
          element={<Page404/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
