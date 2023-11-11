import { NavLink } from 'react-router-dom';
import { linksList } from '../../data/links-list';
import { ScrollArea } from '../ui/scrollArea/ScrollArea';
import './sidebar.scss';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ScrollArea className="sidebar-scroll-area">
        <nav className="nav">
          <ul className="links-list">
            {linksList.map(({ heading, linksGroup }) => (
              <li key={heading}>
                <h5 className="links-group-heading">{heading}</h5>
                <ul className="links-group">
                  {linksGroup.map(
                    ({ path, pathName, icons: { Outlined, Rounded } }) => (
                      <li key={pathName}>
                        <NavLink to={path} className="link-group" end>
                          {({ isActive }) => {
                            return (
                              <>
                                {isActive ? (
                                  <Rounded className="link-group-icon" />
                                ) : (
                                  <Outlined className="link-group-icon" />
                                )}
                                <span className="pathname">{pathName}</span>
                              </>
                            );
                          }}
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </aside>
  );
}

export default Sidebar;
