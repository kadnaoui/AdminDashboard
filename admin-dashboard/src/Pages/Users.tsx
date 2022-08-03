import {FC,useState,useEffect} from 'react';
import { UsersWrapper } from '../assets/wrappers/UserWrapper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import { userRequest } from '../Requests';
import user from '../assets/user.png';
import admin from '../assets/admin.png';
import { deleteUser } from '../redux/apiCalls';

  

  
export const Users:FC=():JSX.Element=>{
  const [data,setData]=useState<any[]>([]);
  const [count,setCount]=useState(0)
 

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 230 },
  { field: 'fullname', headerName: 'Full name', width: 180},
  { field: 'email', headerName: 'Email', width: 180 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'active', headerName: 'Active', width: 100 },
   {
    field: 'action',
    headerName: 'Action ',
    width: 150,
    renderCell:(params: GridValueGetterParams):JSX.Element =>(<div className='action'>
      <Link to={`/users/${params.row.id}`}>
<EditOutlinedIcon className='edit'/>
</Link>
{!params.row.isAdmin&&<DeleteOutlineOutlinedIcon className='delete' onClick={()=>{deleteUser(params.row.id);setCount(count+1)}}/>}
  </div> )
  }
];
  useEffect(()=>{
    const getUser = async()=>{
      try {
          const res=await userRequest.get('/users/find');
          const newData=res.data.map((p:any)=>{
            const obj={ id: p._id,isAdmin:p.isAdmin,active:p.active, username: p.username,avatar:p.isAdmin?admin:user,email:p.email,fullname:p.fullname}
            return obj;
          })
          setData(newData)
          
          
          
      } catch (error) {
        console.log(error);
        
      }
  
  }
  getUser()
  },[count])
 
    return<UsersWrapper>
      <Link to='/create-user' className='btn'>Create User</Link>
     <div className='table'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

    </UsersWrapper>
}