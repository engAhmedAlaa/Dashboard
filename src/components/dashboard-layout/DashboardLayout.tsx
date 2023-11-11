import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AccentBackgroundImage from '../accentBackgroundImage/AccentBackgroundImage';
import LoadingComponent from '../loading-component/LoadingComponent';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../error-component/ErrorComponent';
import DataProvider from '../../context/DataContext';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import './dashboard-layout.scss';

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <AccentBackgroundImage />
      <Header />
      <div className="content-container">
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <Suspense fallback={<LoadingComponent />}>
            <DataProvider>
              <div className="container">
                <Sidebar />
                <main className="main-content">
                  <Suspense fallback={<LoadingComponent />}>
                    <Outlet />
                  </Suspense>
                </main>
              </div>
            </DataProvider>
          </Suspense>
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
