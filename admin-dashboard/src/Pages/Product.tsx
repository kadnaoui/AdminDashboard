import { FC ,useState,ChangeEvent,FormEvent} from "react";
import { ProductWrapper } from "../assets/wrappers/ProductWrapper";
import { Link } from "react-router-dom";
import { Chart } from "../components/Chart";
import { productData } from '../Data'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export const Product:FC=():JSX.Element=>{
    const [inputs,setInputs]=useState({
        name:'',
        instock:true,
        active:true,
        file:''
    })
    
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
                    file:url
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
    
}
    return<ProductWrapper>
        <div className="top">
            <div className="left">
             <Chart data={productData} title='Last 3 Months Sales :' dataKey="sale" aspect={3/1} margin={0}/>   
            </div>
            <div className="right">
                <div className="row">
                    <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067__340.jpg" alt="" />
                    <span className="name"> Iphone</span>
                </div>
                <div className="row">
                    <span className="title">id</span>
                    <span className="value">1</span>
                </div>
                <div className="row">
                    <span className="title">sales</span>
                    <span className="value">764</span>
                </div>
                <div className="row">
                    <span className="title">active</span>
                    <span className="value">true</span>
                </div>
                <div className="row">
                    <span className="title">inStock</span>
                    <span className="value">56</span>
                </div>
                
            </div>
            
        </div>
        <form className="bottom" onSubmit={handleSubmit}>
            
                <div className="input">
                    <label htmlFor="name">Product Name</label>
                    <input type="text" id="name" onChange={handleChange}/>
                </div>
                <div className="input">
                    <label htmlFor="instock">inStock</label>
                    <select  id="instock" onChange={handleChange2}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="input">
                    <label htmlFor="actice">Active</label>
                    <select  id="active" onChange={handleChange2}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="image">
            <img src={inputs.file?inputs.file:"https://cdn.pixabay.com/photo/2016/02/03/18/12/song-of-ice-and-fire-1177616__340.jpg"} alt="" />
             <label htmlFor="file"><FileUploadOutlinedIcon/></label> 
             <input type="file" id="file" onChange={handleChange} accept="image/png, image/gif, image/jpeg" />
               <button type="submit">Submit</button>
            </div>
            

        </form>
    </ProductWrapper>
}