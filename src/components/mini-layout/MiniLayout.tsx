import { Link, Outlet } from 'react-router-dom';
import { LogoIcon } from '../Icons';
import './mini-layout.scss';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../error-component/ErrorComponent';
import { Suspense } from 'react';
import LoadingComponent from '../loading-component/LoadingComponent';

function MiniLayout() {
  const date = new Date();
  const years = date.getFullYear();

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <Suspense fallback={<LoadingComponent />}>
        <div className="mini-layout">
          <div className="mini-container">
            <header className="mini-header">
              <Link to="/" className="logo-link">
                <span className="src-only">Dashboard</span>
                <LogoIcon className="logo-icon" />
              </Link>
            </header>
            <main className="mini-main-content">
              <Outlet />
            </main>
            <footer className="mini-footer">
              <p className="mini-footer-content">
                <Link to="/" className="mini-footer-link">
                  Dashboard
                </Link>
                <br />
                <span>
                  &copy; {years} Designed and Coded by{' '}
                  <a
                    href="https://github.com/engAhmedAlaa"
                    target="_blank"
                    rel="noreferrer"
                    className="mini-footer-link"
                  >
                    Ahmed Alaa
                  </a>
                </span>
              </p>
            </footer>
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default MiniLayout;
