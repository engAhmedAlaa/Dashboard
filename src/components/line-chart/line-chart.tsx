import { ReactNode, SVGProps } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {
  LineChart as LineChartComponent,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './line-chart.scss';

type Props = {
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
  number: string | number;
  percentage: number;
  dataKey: string;
  color: string;
  data: object[];
};

function LineChart({
  title,
  Icon,
  number,
  dataKey,
  color,
  percentage,
  data,
}: Props) {
  return (
    <section className="section-line-chart">
      <div className="section-info">
        <h2 className="info-title">
          <Icon className="info-icon" />
          {title}
        </h2>
        <span className="info-number">{number}</span>
        <Link to="#" className="info-link">
          View all
        </Link>
      </div>
      <div className="section-content">
        <div className="section-content-chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChartComponent data={data} style={{ color }}>
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
              <Line type="monotone" dataKey={dataKey} />
            </LineChartComponent>
          </ResponsiveContainer>
        </div>
        <div className="section-content-text">
          <span
            className={classNames('text-percentage', {
              high: percentage > 0,
              low: percentage < 0,
            })}
          >
            {percentage}%
          </span>
          <span className="text-duration">This month</span>
        </div>
      </div>
    </section>
  );
}

export default LineChart;
