import styles from './Client.module.scss';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import data from '../../data/planning.json';
import { IData } from '../../types/dataType';
import { Table } from '../../components';

const Client = () => {
  const rows: IData[] | any = data;

  // console.log(rows);

  // const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 70 },
  // { field: 'talentName', headerName: 'Talent Name', width: 150 },
  // { field: 'talentGrade', headerName: 'Talent Grade', width: 70 },
  // {
  //   field: 'bookingGrade',
  //   headerName: 'Booking Grade',
  //   width: 70,
  // },
  // {
  //   field: 'operatingUnit',
  //   headerName: 'Operating Unit',
  //   width: 100,
  // },
  // {
  //   field: 'officeCity',
  //   headerName: 'Office City',
  //   width: 150,
  // },
  // {
  //   field: 'officePostalCode',
  //   headerName: 'Office Postal Code',
  //   width: 100,
  // },
  // {
  //   field: 'jobManagerName',
  //   headerName: 'Job Manager Name',
  //   width: 150,
  // },
  // {
  //   field: 'totalHours',
  //   headerName: 'Total Hours',
  //   width: 70,
  // },
  // {
  //   field: 'startDate',
  //   headerName: 'Start Date',
  //   width: 150,
  // },
  // {
  //   field: 'endDate',
  //   headerName: 'End Date',
  //   width: 150,
  // },
  // {
  //   field: 'clientName',
  //   headerName: 'Client Name',
  //   width: 150,
  // },
  // {
  //   field: 'industry',
  //   headerName: 'Industry',
  //   width: 100,
  // },
  // {
  //   field: 'isUnassigned',
  //   headerName: 'Unassigned',
  //   width: 70,
  // },
  // // {
  //   field: 'endDate',
  //   headerName: 'End Date',
  //   width: 150,
  // },
  // {
  //   field: 'action',
  //   headerName: 'Action',
  //   width: 70,
  //   renderCell: (params) => {
  //     return (
  //       <>
  //         {/* <button className={styles.editBtn}>Edit</button> */}
  //         <div
  //           onClick={() => {
  //             setSelectedOption(params.row);
  //             toggleVisibility();
  //           }}
  //         >
  //           <DeleteForeverIcon className={styles.deleteBtn} />
  //         </div>
  //       </>
  //     );
  //   },
  // },
  // ];

  return (
    <div className={styles.container}>
      <Table data={rows} rowsPerPage={20} />
      {/* <div>
        <DataGrid
          rows={rows}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          checkboxSelection
          rowsPerPageOptions={[10]}
        />
      </div> */}
    </div>
  );
};

export default Client;
