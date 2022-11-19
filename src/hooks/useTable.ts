import { useEffect, useState } from 'react';
import { IData } from '../types/dataType';

const sliceData = (data: IData[], activePage: number, rowsPerPage: number) => {
  return data.slice((activePage! - 1) * rowsPerPage, activePage! * rowsPerPage);
};

const useTable = (data: IData[], activePage: number, rowsPerPage: number) => {
  const [calculatedRows, setCalculatedRows] = useState<IData[]>([]);
  const totalRows = data.length;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  useEffect(() => {
    const slicedData = sliceData(data, activePage, rowsPerPage);
    setCalculatedRows([...slicedData]);
  }, [data, activePage, rowsPerPage, setCalculatedRows]);

  return { calculatedRows, totalRows, totalPages };
};

export default useTable;
