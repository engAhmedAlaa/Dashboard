import {
  GroupOutlinedIcon,
  LabelOutlinedIcon,
  MoneyIcon,
  RatioIcon,
} from '../components/Icons';

export const lineChartUser = {
  title: 'Total clients',
  Icon: GroupOutlinedIcon,
  number: '11.238',
  percentage: 45,
  dataKey: 'clients',
  color: 'var(--primary)',
  data: [
    { name: 'Sun', clients: 500 },
    { name: 'Mon', clients: 700 },
    { name: 'Tue', clients: 400 },
    { name: 'Wed', clients: 900 },
    { name: 'Thu', clients: 500 },
    { name: 'Fri', clients: 800 },
    { name: 'Sat', clients: 450 },
  ],
};

export const lineChartProduct = {
  title: 'Total products',
  Icon: LabelOutlinedIcon,
  number: '238',
  percentage: 21,
  dataKey: 'products',
  color: '#adfa1d',
  data: [
    { name: 'Sun', products: 400 },
    { name: 'Mon', products: 800 },
    { name: 'Tue', products: 400 },
    { name: 'Wed', products: 700 },
    { name: 'Thu', products: 400 },
    { name: 'Fri', products: 500 },
    { name: 'Sat', products: 450 },
  ],
};

export const lineChartRevenue = {
  title: 'Total revenue',
  Icon: MoneyIcon,
  number: '$56.432',
  percentage: -12,
  dataKey: 'revenue',
  color: 'var(--destructive)',
  data: [
    { name: 'Sun', revenue: 400 },
    { name: 'Mon', revenue: 600 },
    { name: 'Tue', revenue: 500 },
    { name: 'Wed', revenue: 700 },
    { name: 'Thu', revenue: 400 },
    { name: 'Fri', revenue: 500 },
    { name: 'Sat', revenue: 450 },
  ],
};

export const lineChartConversion = {
  title: 'Total ratio',
  Icon: RatioIcon,
  number: '2.6',
  percentage: 12,
  dataKey: 'ratio',
  color: 'var(--primary)',
  data: [
    { name: 'Sun', ratio: 400 },
    { name: 'Mon', ratio: 800 },
    { name: 'Tue', ratio: 400 },
    { name: 'Wed', ratio: 700 },
    { name: 'Thu', ratio: 400 },
    { name: 'Fri', ratio: 800 },
    { name: 'Sat', ratio: 450 },
  ],
};

export const barChartVisit = {
  title: 'Total visit',
  growth: 240.6,
  dataKey: 'visit',
  color: '#38BDF8',
  data: [
    {
      name: 'Sun',
      visit: 6000,
    },
    {
      name: 'Mon',
      visit: 10000,
    },
    {
      name: 'Tue',
      visit: 5000,
    },
    {
      name: 'Wed',
      visit: 6000,
    },
    {
      name: 'Thu',
      visit: 7000,
    },
    {
      name: 'Fri',
      visit: 6000,
    },
    {
      name: 'Sat',
      visit: 4000,
    },
  ],
};

export const barChartRevenue = {
  title: 'Profit earned',
  growth: 180.1,
  dataKey: 'profit',
  color: '#aafa1d',
  data: [
    {
      name: 'Sun',
      profit: 4000,
    },
    {
      name: 'Mon',
      profit: 3000,
    },
    {
      name: 'Tue',
      profit: 2000,
    },
    {
      name: 'Wed',
      profit: 3000,
    },
    {
      name: 'Thu',
      profit: 2000,
    },
    {
      name: 'Fri',
      profit: 2500,
    },
    {
      name: 'Sat',
      profit: 3500,
    },
  ],
};

export const pieChartLeads = {
  title: 'Leads by source',
  data: [
    { name: 'mobile', value: 400, color: '#0088FE' },
    { name: 'desktop', value: 300, color: '#00C49F' },
    { name: 'laptop', value: 300, color: '#FFBB28' },
    { name: 'Tablet', value: 200, color: '#FF8042' },
  ],
};

export const areaChartAnalytics = {
  title: 'Revenue analytics',
  areas: [
    {
      dataKey: 'electronics',
      id: 'colorElectronics',
      stroke: '#8884d8',
      stopColor: '#8884d8',
    },
    {
      dataKey: 'clothes',
      id: 'colorClothes',
      stroke: '#82ca9d',
      stopColor: '#82ca9d',
    },
    {
      dataKey: 'books',
      id: 'colorBooks',
      stroke: '#ffc658',
      stopColor: '#ffc658',
    },
  ],
  data: [
    {
      name: 'Sun',
      books: 4000,
      clothes: 2400,
      electronics: 2400,
    },
    {
      name: 'Mon',
      books: 3000,
      clothes: 1398,
      electronics: 2210,
    },
    {
      name: 'Tue',
      books: 2000,
      clothes: 9800,
      electronics: 2290,
    },
    {
      name: 'Wed',
      books: 2780,
      clothes: 3908,
      electronics: 2000,
    },
    {
      name: 'Thu',
      books: 1890,
      clothes: 4800,
      electronics: 2181,
    },
    {
      name: 'Fri',
      books: 2390,
      clothes: 3800,
      electronics: 2500,
    },
    {
      name: 'Sat',
      books: 3490,
      clothes: 4300,
      electronics: 2100,
    },
  ],
};
