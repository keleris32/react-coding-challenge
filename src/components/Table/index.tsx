import { useState } from 'react';
import useTable from '../../hooks/useTable';
import { IData } from '../../types/dataType';
import styles from './Table.module.scss';
import TableFooter from './TableFooter';

interface IProps {
  data: IData[];
  rowsPerPage: number;
}

const columns = [
  { accessor: 's/n', label: 'S/N' },
  { accessor: 'talentName', label: 'Talent Name' },
  { accessor: 'talentGrade', label: 'Talent Grade' },
  { accessor: 'bookingGrade', label: 'Booking Grade' },
  { accessor: 'operatingUnit', label: 'Operating Unit' },
  { accessor: 'officeCity', label: 'Office City' },
  { accessor: 'officePostalCode', label: 'Office Postal Code' },
  { accessor: 'jobManagerName', label: 'Job Manager Name' },
  { accessor: 'totalHours', label: 'Total Hours' },
  { accessor: 'clientName', label: 'Client Name' },
  { accessor: 'industry', label: 'Industry' },
  { accessor: 'isUnassigned', label: 'Unassigned' },
  { accessor: 'startDate', label: 'Start Date' },
  { accessor: 'endDate', label: 'End Date' },
];

const Table = ({ data, rowsPerPage }: IProps) => {
  const [activePage, setActivePage] = useState(1);
  const { calculatedRows, totalRows, totalPages } = useTable(
    data,
    activePage,
    rowsPerPage
  );

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className={styles.tableHeader}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((row) => (
            <tr key={row.id} className={styles.tableRowItems}>
              <td className={styles.tableCell}>{row.id}</td>
              <td className={styles.tableCell}>
                {row.talentName ? row.talentName : 'n/a'}
              </td>
              <td className={styles.tableCell}>
                {row.talentGrade ? row.talentGrade : 'n/a'}
              </td>
              <td className={styles.tableCell}>
                {row.bookingGrade ? row.bookingGrade : 'n/a'}
              </td>
              <td className={styles.tableCell}>{row.operatingUnit}</td>
              <td className={styles.tableCell}>{row.officeCity}</td>
              <td className={styles.tableCell}>{row.officePostalCode}</td>
              <td className={styles.tableCell}>{row.jobManagerName}</td>
              <td className={styles.tableCell}>{row.totalHours}</td>
              <td className={styles.tableCell}>{row.clientName}</td>
              <td className={styles.tableCell}>{row.industry}</td>
              <td className={styles.tableCell}>
                {row.isUnassigned ? 'true' : 'false'}
              </td>
              <td className={styles.tableCell}>{row.startDate}</td>
              <td className={styles.tableCell}>{row.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter
        activePage={activePage}
        setActivePage={setActivePage}
        totalRows={totalRows}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default Table;
