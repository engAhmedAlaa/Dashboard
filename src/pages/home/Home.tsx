import { useTitle } from 'react-use';
import {
  areaChartAnalytics,
  barChartRevenue,
  barChartVisit,
  lineChartConversion,
  lineChartProduct,
  lineChartRevenue,
  lineChartUser,
  pieChartLeads,
} from '../../data/charts';
import Title from '../../components/title/Title';
import LineChart from '../../components/line-chart/line-chart';
import BarChart from '../../components/bar-chart/BarChart';
import PieChart from '../../components/pie-chart/PieChart';
import AreaChart from '../../components/area-chart/AreaChart';
import './home.scss';

function Home() {
  useTitle('Dashboard');

  return (
    <div className="home">
      <Title title="Dashboard" />
      <div className="home-content">
        <div className="line-charts">
          <LineChart {...lineChartUser} />
          <LineChart {...lineChartProduct} />
          <LineChart {...lineChartRevenue} />
          <LineChart {...lineChartConversion} />
        </div>
        <div className="bar-charts">
          <BarChart {...barChartVisit} />
          <BarChart {...barChartRevenue} />
        </div>
        <PieChart {...pieChartLeads} />
        <AreaChart {...areaChartAnalytics} />
      </div>
    </div>
  );
}

export default Home;
