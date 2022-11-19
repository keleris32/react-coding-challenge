import React from 'react';
import styles from './TableFooter.module.scss';

interface IProps {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  activePage: number;
  totalPages: number;
  totalRows: number;
  rowsPerPage: number;
}

const TableFooter = ({
  setActivePage,
  activePage,
  totalPages,
  totalRows,
  rowsPerPage,
}: IProps) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end =
    activePage === totalPages ? totalRows : beginning + rowsPerPage - 1;

  return (
    <div className={styles.container}>
      <div>
        <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
          ⏮️ First
        </button>
        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          ⬅️ Previous
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          Next ➡️
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          Last ⏭️
        </button>
      </div>
      <p>
        Page {activePage} of {totalPages}
      </p>
      <p>
        Rows: {beginning === end ? end : `${beginning} - ${end}`} of {totalRows}
      </p>
    </div>
  );
};

export default TableFooter;
