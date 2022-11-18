import styles from './Client.module.scss';
import data from '../../data/planning.json';
import { IData } from '../../types/dataType';
import { Table } from '../../components';

const Client = () => {
  const rows: IData[] | any = data;

  const rowsPerPage = 20;

  return (
    <div className={styles.container}>
      <Table data={rows} rowsPerPage={rowsPerPage} />
    </div>
  );
};

export default Client;
