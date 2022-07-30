import {FC} from 'react';
import { UsersWrapper } from '../assets/wrappers/UserWrapper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import { rows } from '../Data';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'User', width: 200,renderCell:(params: GridValueGetterParams):JSX.Element =>(<div className='user'>
        <img src={params.row.avatar} alt="" />
        <span>{params.row.userName}</span>
    </div> )},
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'transaction',
      headerName: 'Transaction ($)',
      type: 'number',
      width: 180,
    },  {
      field: 'action',
      headerName: 'Action ',
      width: 150,
      renderCell:(params: GridValueGetterParams):JSX.Element =>(<div className='action'>
        <Link to={`/users/${params.row.id}`}>
<EditOutlinedIcon className='edit'/>
</Link>
<DeleteOutlineOutlinedIcon className='delete'/>
    </div> )
    }
  ];
  

  
export const Users:FC=():JSX.Element=>{
    return<UsersWrapper>
      <Link to='/create-user' className='btn'>Create User</Link>
     <div className='table'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

    </UsersWrapper>
}