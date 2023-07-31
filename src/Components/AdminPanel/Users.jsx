import styles from '../../styles/UserComponent.module.css';
import { DataGrid } from '@mui/x-data-grid';
//import { userColumns, userRows } from "../../js/datatablesource.js";
import Link from 'next/link';
import { useState } from 'react';

const UsersComponent = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link href="/users/test" style={{ textDecoration: 'none' }}>
              <div className={styles.viewButton}>View</div>
            </Link>
            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        Add New User
        <Link href="/users/new" className={styles.link}>
          Add New
        </Link>
      </div>
      {/* <DataGrid
        className={styles.datagrid}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel: { pageSize: 9 } } }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
      /> */}
    </div>
  );
};

export default UsersComponent;
