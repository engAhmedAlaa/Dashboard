import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthRequired from './components/AuthRequired';
import AuthDenied from './components/AuthDenied';
import Toast from './components/toast/Toast';
import LoadingComponent from './components/loading-component/LoadingComponent';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from './components/error-component/ErrorComponent';
const DashboardLayout = lazy(
  () => import('./components/dashboard-layout/DashboardLayout')
);
const Home = lazy(() => import('./pages/home/Home'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const UpdateProfile = lazy(
  () => import('./pages/update-profile/UpdateProfile')
);
const Settings = lazy(() => import('./pages/settings/Settings'));
const Clients = lazy(() => import('./pages/clients/Clients'));
const Products = lazy(() => import('./pages/products/Products'));
const Orders = lazy(() => import('./pages/orders/Orders'));
const Files = lazy(() => import('./pages/files/Files'));
const MiniLayout = lazy(() => import('./components/mini-layout/MiniLayout'));
const Signin = lazy(() => import('./pages/signin/Signin'));
const Signup = lazy(() => import('./pages/signup/Signup'));
const ForgotPassword = lazy(
  () => import('./pages/forgot-password/ForgotPassword')
);
const AuthManagement = lazy(
  () => import('./pages/auth-management/AuthManagement')
);
const NotFound = lazy(() => import('./pages/not-found/NotFound'));
import './styles/app.scss';

const router = createBrowserRouter([
  {
    element: <AuthRequired />,
    children: [
      {
        path: '/',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'profile/update',
            element: <UpdateProfile />,
          },
          {
            path: 'settings',
            element: <Settings />,
          },
          {
            path: 'clients',
            element: <Clients />,
          },
          {
            path: 'products',
            element: <Products />,
          },
          {
            path: 'orders',
            element: <Orders />,
          },
          {
            path: 'files',
            element: <Files />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthDenied />,
    children: [
      {
        path: '/',
        element: <MiniLayout />,
        children: [
          {
            path: 'signin',
            element: <Signin />,
          },
          {
            path: 'signup',
            element: <Signup />,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <MiniLayout />,
    children: [
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'auth-management',
        element: <AuthManagement />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <Suspense fallback={<LoadingComponent />}>
          <RouterProvider router={router} />
          <Toast />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
