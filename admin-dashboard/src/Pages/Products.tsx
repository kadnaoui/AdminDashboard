import { FC ,useEffect,useState} from "react";
import { ProductsWrapper } from "../assets/wrappers/ProductsWrapper";
import { productRows } from "../Data";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../redux/apiCalls";
import { productState } from "../redux/productRedux";
export const Products:FC=():JSX.Element=>{
    const {product} = useSelector((state:{product:productState}) => state.product);
    const [data,setData]=useState<any[]>([]);
    
    const dispatch=useDispatch();
    useEffect(()=>{
      getProduct(dispatch)
    },[dispatch])
    useEffect(()=>{
      const newData=product.map(p=>{
        const obj={ id: p._id, name: p.title,avatar:p.image.data.data,stock:p.inStock,price:p.price}
        return obj;
      })
      setData(newData)
    },[product])
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 220 },
    { field: 'product', headerName: 'Product', width: 220,renderCell:(params: GridValueGetterParams):JSX.Element =>(<div className='user'>
        <img src={params.row.avatar} alt="" />
        <span>{params.row.name}</span>
    </div> )},
    { field: 'stock', headerName: 'Stock', width: 100 },
    {
      field: 'price',
      headerName: 'Price ($)',
      type: 'number',
      width: 100,
    },  {
      field: 'action',
      headerName: 'Action ',
      width: 150,
      renderCell:(params: GridValueGetterParams):JSX.Element =>(<div className='action'>
        <Link to={`/products/${params.row.id}`}>
<EditOutlinedIcon className='edit'/>
</Link>
<DeleteOutlineOutlinedIcon className='delete' onClick={()=>deleteProduct(dispatch,params.row.id)}/>
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