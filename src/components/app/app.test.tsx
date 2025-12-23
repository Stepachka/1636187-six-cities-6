import { render, screen } from '@testing-library/react';
import App from './app';
import { AppRoute } from '../../const';

let initialEntries: string[] = [AppRoute.Main];

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );

  return {
    ...actual,
    BrowserRouter: ({ children }: { children: React.ReactNode }) => (
      <actual.MemoryRouter initialEntries={initialEntries}>
        {children}
      </actual.MemoryRouter>
    ),
  };
});

const dispatchMock = vi.fn();

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof import('react-redux')>('react-redux');

  return {
    ...actual,
    useDispatch: () => dispatchMock,
    useSelector: vi.fn(() => undefined),
  };
});

vi.mock('../../store/user/action', () => ({
  fetchCheckAuth: vi.fn(() => ({ type: 'user/checkAuth' })),
}));

vi.mock('../private-route/private-route', () => ({
  default: ({ children }: { children: JSX.Element }) => (
    <div data-testid="private-route">{children}</div>
  ),
}));

vi.mock('../../page/main-page/main-page', () => ({
  default: () => <div>MainPage</div>,
}));

vi.mock('../../page/login-page/login-page', () => ({
  default: () => <div>LoginPage</div>,
}));

vi.mock('../../page/favorites-page/favorites-page', () => ({
  default: () => <div>FavoritesPage</div>,
}));

vi.mock('../../page/offer-page/offer-page', () => ({
  default: () => <div>OfferPage</div>,
}));

vi.mock('../../page/page-404/page-404', () => ({
  default: () => <div>Page404</div>,
}));

describe('Component: App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    initialEntries = [AppRoute.Main];
  });

  it('renders Page404 on unknown route', () => {
    initialEntries = ['/unknown-route'];

    render(<App />);

    expect(screen.getByText('404 - Page not found')).toBeInTheDocument();
  });
});
