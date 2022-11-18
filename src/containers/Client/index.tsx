import styles from './Client.module.scss';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import data from '../../data/planning.json';
import { IData } from '../../types/dataType';
import { Table } from '../../components';

const Client = () => {
  const rows: IData[] | any = data;

  return (
    <div className={styles.container}>
      <Table data={rows} rowsPerPage={20} />
    </div>
  );
};

export default Client;
