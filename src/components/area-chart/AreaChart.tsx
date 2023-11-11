import {
  Area,
  AreaChart as AreaChartComponent,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './area-chart.scss';

type Props = {
  title: string;
  areas: {
    dataKey: string;
    id: string;
    stroke: string;
    stopColor: string;
  }[];
  data: object[];
};

function AreaChart({ title, areas, data }: Props) {
  return (
    <section className="section-area-chart">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChartComponent data={data}>
            <defs>
              {areas.map(({ dataKey, id, stopColor }) => (
                <linearGradient
                  key={dataKey}
                  id={id}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={stopColor} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={stopColor} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            <XAxis dataKey="name" tickLine={false} />
            <YAxis tickLine={false} tickFormatter={(value) => `$${value}`} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="tooltip">
                      {payload.map(({ name, value }) => (
                        <div className="info-container">
                          <span className="info-name">{name}</span>
                          <span className="info-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  );
                }

                return null;
              }}
            />
            {areas.map(({ dataKey, stroke, id }) => (
              <Area
                key={dataKey}
                type="monotone"
                dataKey={dataKey}
                stroke={stroke}
                fillOpacity={1}
                fill={`url(#${id})`}
              />
            ))}
          </AreaChartComponent>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default AreaChart;
