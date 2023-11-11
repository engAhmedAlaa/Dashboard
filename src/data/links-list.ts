import {
  CartOutlinedIcon,
  CartRoundedIcon,
  UpdateIconOutlined,
  UpdateIconRounded,
  FileIconOutlined,
  FileIconRounded,
  GroupOutlinedIcon,
  GroupRoundedIcon,
  HomeOutlinedIcon,
  HomeRoundedIcon,
  PersonOutlinedIcon,
  PersonRoundedIcon,
  SettingsOutlinedIcon,
  SettingsRoundedIcon,
  LabelOutlinedIcon,
  LabelRoundedIcon,
} from '../components/Icons';

export const linksList = [
  {
    heading: 'Main',
    linksGroup: [
      {
        path: '/',
        pathName: 'Home',
        icons: {
          Outlined: HomeOutlinedIcon,
          Rounded: HomeRoundedIcon,
        },
      },
      {
        path: '/profile',
        pathName: 'Profile',
        icons: {
          Outlined: PersonOutlinedIcon,
          Rounded: PersonRoundedIcon,
        },
      },
      {
        path: '/profile/update',
        pathName: 'Update profile',
        icons: {
          Outlined: UpdateIconOutlined,
          Rounded: UpdateIconRounded,
        },
      },
      {
        path: '/settings',
        pathName: 'Settings',
        icons: {
          Outlined: SettingsOutlinedIcon,
          Rounded: SettingsRoundedIcon,
        },
      },
    ],
  },
  {
    heading: 'Tables',
    linksGroup: [
      {
        path: '/clients',
        pathName: 'Clients',
        icons: {
          Outlined: GroupOutlinedIcon,
          Rounded: GroupRoundedIcon,
        },
      },
      {
        path: '/products',
        pathName: 'Products',
        icons: {
          Outlined: LabelOutlinedIcon,
          Rounded: LabelRoundedIcon,
        },
      },
      {
        path: '/orders',
        pathName: 'Orders',
        icons: {
          Outlined: CartOutlinedIcon,
          Rounded: CartRoundedIcon,
        },
      },
    ],
  },
  {
    heading: 'Others',
    linksGroup: [
      {
        path: '/files',
        pathName: 'Files',
        icons: {
          Outlined: FileIconOutlined,
          Rounded: FileIconRounded,
        },
      },
    ],
  },
];
