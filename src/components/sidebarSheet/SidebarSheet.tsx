import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { Link, NavLink } from 'react-router-dom';
import { linksList } from '../../data/links-list';
import { LogoIcon, MenuIcon } from '../Icons';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet/Sheet';
import { ScrollArea } from '../ui/scrollArea/ScrollArea';
import Button from '../ui/button/Button';
import './sidebarSheet.scss';

function SidebarSheet() {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (width > 1024) handleClose();
  }, [width]);

  function handleClose() {
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="sidebar-sheet-trigger"
          aria-label="Open"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="sidebar-sheet-content"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <Link to="/" className="logo-link" onClick={handleClose}>
            <LogoIcon className="logo-icon" />
            <span className="logo-name" translate="no">
              Dashboard
            </span>
          </Link>
        </SheetHeader>
        <ScrollArea className="sidebar-sheet-scroll-area">
          <nav className="nav">
            <ul className="links-list">
              {linksList.map(({ heading, linksGroup }) => (
                <li key={heading}>
                  <h5 className="links-group-heading">{heading}</h5>
                  <ul className="links-group">
                    {linksGroup.map(
                      ({ path, pathName, icons: { Outlined, Rounded } }) => (
                        <li key={pathName}>
                          <NavLink
                            to={path}
                            className="link-group"
                            onClick={handleClose}
                            end
                          >
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
      </SheetContent>
    </Sheet>
  );
}

export default SidebarSheet;
