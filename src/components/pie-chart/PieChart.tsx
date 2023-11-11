import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './pie-chart.scss';

type Props = {
  title: string;
  data: {
    name: string;
    value: number;
    color: string;
  }[];
};

function PieChartBox({ title, data }: Props) {
  return (
    <div className="section-pie-chart">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        <div className="section-content-chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
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
              <Pie
                data={data}
                innerRadius="70%"
                outerRadius="90%"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map(({ name, color }) => (
                  <Cell key={`cell-${name}`} fill={color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="section-content-info">
          {data.map(({ name, value, color }) => (
            <div key={name} className="info-container">
              <div className="info-name">
                <span className="dot" style={{ backgroundColor: color }} />
                <span className="name">{name}</span>
              </div>
              <div className="info-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PieChartBox;
