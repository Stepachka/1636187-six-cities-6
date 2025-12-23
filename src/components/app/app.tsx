import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute } from '../../const';
import { AppDispatchType } from '../../store';
import { fetchCheckAuth } from '../../store/user/action';

import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../../pages/favorites/favorites-page';
import LoginPage from '../../pages/login/login-page';
import MainPage from '../../pages/main/main-page';
import OfferPage from '../../pages/offer/offer-page';
import Page404 from '../../pages/page-404/page-404';

function App() {
  const dispatch = useDispatch<AppDispatchType>();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchCheckAuth());
    }

    return () => {
      isMounted = false;
    };
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
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage/>}
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
