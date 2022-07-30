import { FC ,useState} from "react";
import { ProductsWrapper } from "../assets/wrappers/ProductsWrapper";
import { productRows } from "../Data";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from "react-router-dom";


export const Products:FC=():JSX.Element=>{
    const [data,setData]=useState(productRows);
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'product', headerName: 'Product', width: 200,renderCell:(params: GridValueGetterParams):JSX.Element =>(<div className='user'>
        <img src={params.row.avatar} alt="" />
        <span>{params.row.name}</span>
    </div> )},
    { field: 'stock', headerName: 'Stock', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'price',
      headerName: 'Price ($)',
      type: 'number',
      width: 180,
    },  {
      field: 'action',
      headerName: 'Action ',
      width: 150,
      renderCell:(params: GridValueGetterParams):JSX.Element =>(<div className='action'>
        <Link to={`/products/${params.row.id}`}>
<EditOutlinedIcon className='edit'/>
</Link>
<DeleteOutlineOutlinedIcon className='delete'/>
    </div> )
    }
  ];
  

return<ProductsWrapper>
<Link to='/create-product' className='btn'>Create Product</Link>
    <div className='table'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
</ProductsWrapper>
}