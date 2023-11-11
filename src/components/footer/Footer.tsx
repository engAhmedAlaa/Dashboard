import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {
  const data = new Date();
  const years = data.getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <p className="content">
          <Link to="/" className="link">
            Dashboard
          </Link>
          <span>
            &copy; {years} Coded by{' '}
            <a
              href="https://github.com/engAhmedAlaa"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Ahmed Alaa
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
