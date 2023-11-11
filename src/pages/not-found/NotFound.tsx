import { useTitle } from 'react-use';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import './not-found.scss';

function NotFound() {
  useTitle('Not found 404 | Dashboard');
  const { user } = useAuth();

  return (
    <section className="section-not-found">
      <p className="section-number">404</p>
      <h1 className="section-title">Page not found</h1>
      <div className="section-content">
        <p className="section-description">
          Sorry, we couldn't find the page you're looking for.
        </p>
        {user ? (
          <Link
            to="/"
            className="return-link button-shape outline default-size"
          >
            Go to home
          </Link>
        ) : (
          <Link
            to="/signin"
            className="return-link button-shape outline default-size"
          >
            Go to sign in
          </Link>
        )}
      </div>
    </section>
  );
}

export default NotFound;
