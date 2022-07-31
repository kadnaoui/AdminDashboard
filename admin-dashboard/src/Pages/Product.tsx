import { FC ,useState,ChangeEvent,FormEvent, useEffect,useMemo} from "react";
import { ProductWrapper } from "../assets/wrappers/ProductWrapper";
import { Link,useParams } from "react-router-dom";
import { Chart } from "../components/Chart";
import { productData } from '../Data'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useSelector ,useDispatch} from "react-redux";
import { productState } from "../redux/productRedux";
import { userRequest } from "../Requests";
import { updateProduct } from "../redux/apiCalls";

export const Product:FC=():JSX.Element=>{
    const Month= useMemo(():Array<string>=>['Jan','Feb','March','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],[])
  const dispatch=useDispatch();
    const {id}=useParams();
    const {product} = useSelector((state:{product:productState}) => state.product);
    const [chart,setChart]=useState([    {
        name: Month[new Date().getMonth()-1<0?12:new Date().getMonth()-1],
        sale: 0,
        },
      {
        name: Month[new Date().getMonth()],
        sale: 0,
        },
      {
        name: Month[new Date().getMonth()+1>12?1:new Date().getMonth()+1],
        sale: 0,
        }])
    const [data,setData]=useState({
        name:'',
        sales:0,
        active:false,
        inStock:false,
        id:'',
        image:''
    })
    const [inputs,setInputs]=useState({
        title:'',
        description:'',
        price:'',
        file:{},
        url:'',
        inStock:true
    })
    useEffect(()=>{
      const x=product.find(p=>p._id==id);
      setData({
        name:x.title,
        sales:x.price,
        active:x.inStock,
        inStock:x.inStock,
        id:x._id,
        image:x.image.data.data
    })
        
    },[product])
    
    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const id=e.target.id;
        const value=e.target.value;
       if(id!='file'){
        setInputs({
            ...inputs,
            [id]:value
        })
    }
        else{   if (e.target.files && e.target.files[0]) {
              
               const url= URL.createObjectURL(e.target.files[0])
                  setInputs({
                    ...inputs,
                    url:url,
                    file:e.target.files[0]
                })
        }
    }
    }
    const handleChange2=(e: ChangeEvent<HTMLSelectElement>)=>{
        const {id,value}=e.target;
        setInputs({
            ...inputs,
            [id]:value=='yes'
        })

}
const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(inputs);
    
    updateProduct(dispatch,id,inputs)
    
}

useEffect(()=>{
    const getInfos=async()=>{
            const res=await userRequest.get(`/order/income?pid=${id}`)
            const date=new Date();
            const month1=date.getMonth()+1;
            const month2=date.getMonth();
            const month3=date.getMonth()-1;
            res.data.map((d:any)=>{
                
                console.log(d._id,month1,month2,month3);
                
                if(d._id==month3){
                   const newData=chart;
                   newData[0].sale=d.total;
                   setChart([...newData])
                }
                if(d._id==month2){
                    const newData=chart;
                    newData[1].sale=d.total;
                    setChart([...newData])
                 }
                 if(d._id==month1){
                    const newData=chart;
                    newData[2].sale=d.total;
                    setChart([...newData])
                    
                 }
            })
            
    }
    getInfos()
}
,[])
    return<ProductWrapper>
        <div className="top">
            <div className="left">
             <Chart data={chart} title='Last 3 Months Sales :' dataKey="sale" aspect={3/1} margin={0}/>   
            </div>
            <div className="right">
                <div className="row">
                    <img src={data.image} alt="" />
                    <span className="name"> {data.name}</span>
                </div>
                <div className="row">
                    <span className="title">id</span>
                    <span className="value">{data.id}</span>
                </div>
                <div className="row">
                    <span className="title">price</span>
                    <span className="value">{data.sales}</span>
                </div>
                <div className="row">
                    <span className="title">inStock</span>
                    <span className="value">{data.inStock?'Yes':'No'}</span>
                </div>
                
            </div>
            
        </div>
        <form className="bottom" onSubmit={handleSubmit}>
            
                <div className="input">
                    <label htmlFor="title">Product Name</label>
                    <input type="text" id="title" onChange={handleChange}/>
                </div>
                <div className="input">
                    <label htmlFor="descripyion">Description</label>
                    <input type="text" id="description" onChange={handleChange}/>
                </div>
                <div className="input">
                    <label htmlFor="price">Price $</label>
                    <input type="number" id="price" onChange={handleChange}/>
                </div>
                <div className="input">
                    <label htmlFor="inStock">inStock</label>
                    <select  id="inStock" onChange={handleChange2}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                
                <div className="image">
            <img src={inputs.url?inputs.url:data.image} alt="" />
             <label htmlFor="file"><FileUploadOutlinedIcon/></label> 
             <input type="file" id="file" onChange={handleChange} accept="image/png, image/gif, image/jpeg" />
               <button type="submit">Submit</button>
            </div>
            

        </form>
    </ProductWrapper>
}