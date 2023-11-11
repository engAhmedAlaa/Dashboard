import { Link } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import { LogoIcon } from '../Icons';
import classNames from 'classnames';
import SidebarSheet from '../sidebarSheet/SidebarSheet';
import MainSearch from '../main-search/MainSearch';
import HeaderMenus from '../header-menus/HeaderMenus';
import './header.scss';

function Header() {
  const { y } = useWindowScroll();

  return (
    <header
      className={classNames(
        'main-header',
        { initial: y < 50 },
        { current: y > 50 }
      )}
    >
      <div className="container">
        <div className="main-logo">
          <SidebarSheet />
          <Link to="/" className="logo-link">
            <LogoIcon className="logo-icon" />
            <span className="logo-name" translate="no">
              Dashboard
            </span>
          </Link>
        </div>
        <div className="controls">
          <MainSearch />
          <HeaderMenus />
        </div>
      </div>
    </header>
  );
}

export default Header;
