import styles from './Overview.module.scss';
import data from '../../data/planning.json';
import { numberOfTalentsRequiredPerIndustry } from '../../utilities/stats';
import { Chart } from '../../components';

const Overview = () => {
  // @ts-ignore
  const industryData = numberOfTalentsRequiredPerIndustry(data);

  return (
    <div className={styles.container}>
      <div>
        <Chart
          data={industryData}
          title="Industry Analytics"
          description="Number of talents required in each industry"
        />
      </div>
    </div>
  );
};

export default Overview;
