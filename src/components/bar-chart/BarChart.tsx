import {
  Bar,
  BarChart as BarChartComponent,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import './bar-chart.scss';

type Props = {
  title: string;
  growth: number;
  dataKey: string;
  color: string;
  data: object[];
};

function BarChart({ title, dataKey, growth, color, data }: Props) {
  return (
    <section className="section-bar-chart">
      <h2 className="section-title">{title}</h2>
      <p className="section-info">+{growth}% from last week</p>
      <div className="section-content">
        <ResponsiveContainer width="100%" height="100%">
          <BarChartComponent data={data}>
            <Tooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length)
                  return (
                    <div className="tooltip">
                      <span className="info-name">{payload[0].name}</span>
                      <span className="info-value">{payload[0].value}</span>
                    </div>
                  );

                return null;
              }}
            />
            <Bar dataKey={dataKey} radius={[4, 4, 4, 4]} fill={color} />
          </BarChartComponent>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default BarChart;
