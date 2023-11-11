import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import { Form, Formik } from 'formik';
import { signOut } from 'firebase/auth';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/use-auth';
import { useTheme } from '../../hooks/use-theme';
import { auth } from '../../firebase/authentication';
import { getErrorMessage } from '../../utils/getErrorMessage';
import {
  UpdateIconOutlined,
  SignoutIcon,
  PersonOutlinedIcon,
  SettingsOutlinedIcon,
  SunOutlinedIcon,
  SunRoundedIcon,
  MoonOutlinedIcon,
  MoonRoundedIcon,
  ComputerOutlinedIcon,
  ComputerRoundedIcon,
  LoadingIcon,
  ErrorIcon,
} from '../Icons';
import { ToastMessage } from '../toast/Toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '../ui/dialog/Dialog';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../../components/ui/dropdown-menu/DropdownMenu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select/Select';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover/Popover';
import Avatar from '../ui/avatar/Avatar';
import Button from '../../components/ui/button/Button';
import './header-menus.scss';

const HeaderMenus = memo(() => {
  const { user } = useAuth();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const { width } = useWindowSize();
  const { theme, setTheme } = useTheme();
  const profileLinks = [
    {
      path: '/profile',
      pathName: 'Profile',
      Icon: PersonOutlinedIcon,
    },
    {
      path: '/profile/update',
      pathName: 'Update profile',
      Icon: UpdateIconOutlined,
    },
    {
      path: '/settings',
      pathName: 'Settings',
      Icon: SettingsOutlinedIcon,
    },
  ];
  const themes = [
    {
      themeType: 'light',
      themeName: 'Light',
      icons: {
        Outlined: SunOutlinedIcon,
        Rounded: SunRoundedIcon,
      },
    },
    {
      themeType: 'dark',
      themeName: 'Dark',
      icons: {
        Outlined: MoonOutlinedIcon,
        Rounded: MoonRoundedIcon,
      },
    },
    {
      themeType: 'system',
      themeName: 'System',
      icons: {
        Outlined: ComputerOutlinedIcon,
        Rounded: ComputerRoundedIcon,
      },
    },
  ];

  useEffect(() => {
    if (width > 768) {
      setOpenDialog(false);
    } else {
      setOpenDropdownMenu(false);
      setOpenPopover(false);
    }
  }, [width]);

  async function handleSignout() {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      await signOut(auth);
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Oops! Something went wrong"
          description={message}
        />,
        {
          icon: ErrorIcon,
        }
      );
    }
  }

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger className="profile-dialog-trigger">
          <Avatar src={user!.photoURL!} alt={user!.displayName!} />
        </DialogTrigger>
        <DialogContent
          className="profile-dialog-content"
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <DialogHeader className="profile-dialog-header">
            <div className="profile-info">
              <Avatar src={user!.photoURL!} alt={user!.displayName!} />
              <div className="info">
                <span className="name">{user!.displayName}</span>
                <span className="email">{user!.email}</span>
              </div>
            </div>
          </DialogHeader>
          <ul className="profile-links">
            {profileLinks.map(({ path, pathName, Icon }) => (
              <li key={pathName}>
                <Link
                  key={pathName}
                  to={path}
                  className="profile-link"
                  onClick={() => setOpenDialog(false)}
                >
                  <Icon className="profile-link-icon" />
                  {pathName}
                </Link>
              </li>
            ))}
          </ul>
          <div className="theme-select">
            <label htmlFor="theme" className="theme-select-label">
              Switch Theme
            </label>
            <Select
              value={theme}
              onValueChange={setTheme as (value: string) => void}
              name="theme"
            >
              <SelectTrigger id="theme" className="theme-select-trigger">
                <SelectValue />
              </SelectTrigger>
              <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
                {themes.map(
                  ({ themeType, themeName, icons: { Outlined, Rounded } }) => (
                    <SelectItem
                      key={themeName}
                      className="theme-select-item"
                      value={themeType}
                    >
                      {themeType === theme ? (
                        <Rounded className="theme-icon" />
                      ) : (
                        <Outlined className="theme-icon" />
                      )}
                      {themeName}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
          <Formik initialValues={{}} onSubmit={handleSignout}>
            {({ isSubmitting }) => (
              <Form className="signout-form">
                <Button
                  type="submit"
                  className="signout-btn"
                  onClick={handleSignout}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingIcon className="loading-icon" />
                  ) : (
                    <>
                      <SignoutIcon className="signout-icon" /> Sign out
                    </>
                  )}
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
      <DropdownMenu
        modal={false}
        open={openDropdownMenu}
        onOpenChange={setOpenDropdownMenu}
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="theme-dropdown-menu-trigger"
          >
            {theme === 'system' ? (
              <>
                <SunOutlinedIcon className="theme-icon sun" />
                <MoonOutlinedIcon className="theme-icon moon" />
              </>
            ) : (
              <>
                <SunRoundedIcon className="theme-icon sun" />
                <MoonRoundedIcon className="theme-icon moon" />
              </>
            )}
            <span className="src-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="theme-dropdown-menu-content"
          sideOffset={4}
          align="end"
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          {themes.map(
            ({ themeType, themeName, icons: { Outlined, Rounded } }) => (
              <DropdownMenuItem
                key={themeName}
                className={classNames('theme-dropdown-menu-item', {
                  active: theme === themeType,
                })}
                onSelect={() =>
                  setTheme(themeType as 'light' | 'dark' | 'system')
                }
              >
                {themeType === theme ? (
                  <Rounded className="theme-icon" />
                ) : (
                  <Outlined className="theme-icon" />
                )}
                {themeName}
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <Popover open={openPopover} onOpenChange={setOpenPopover}>
        <PopoverTrigger className="profile-popover-trigger">
          <Avatar src={user!.photoURL!} alt={user!.displayName!} />
        </PopoverTrigger>
        <PopoverContent
          className="profile-popover-content"
          side="bottom"
          align="end"
          sideOffset={6}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div className="profile-info">
            <Avatar src={user!.photoURL!} alt={user!.displayName!} />
            <div className="info">
              <span className="name">{user!.displayName}</span>
              <span className="email">{user!.email}</span>
            </div>
          </div>
          <div className="profile-actions">
            <div className="profile-links">
              {profileLinks.map(({ path, pathName, Icon }) => (
                <Link
                  key={pathName}
                  to={path}
                  className="profile-link"
                  onClick={() => setOpenPopover(false)}
                >
                  <Icon className="profile-link-icon" />
                  {pathName}
                </Link>
              ))}
            </div>
            <Formik initialValues={{}} onSubmit={handleSignout}>
              {({ isSubmitting }) => (
                <Form className="signout-form">
                  <button
                    type="submit"
                    className="signout-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <LoadingIcon className="loading-icon" />
                    ) : (
                      <>
                        <SignoutIcon className="signout-icon" />
                        Sign out
                      </>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
});

export default HeaderMenus;
