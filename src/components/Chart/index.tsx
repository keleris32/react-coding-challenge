import styles from './Chart.module.css';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  //   Legend,
  ResponsiveContainer,
} from 'recharts';

interface IDataType {
  industry: string;
  count: number | unknown;
}

type PropTypes = {
  data: IDataType[];
  title: string;
  description: string;
};

const Chart = ({ data, title, description }: PropTypes) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="industry" />
          <Line type="monotone" dataKey="count" />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
