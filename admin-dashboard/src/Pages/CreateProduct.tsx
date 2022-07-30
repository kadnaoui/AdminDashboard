import { FC,FormEvent,ChangeEvent,useState } from "react";
import { CreateProductWrapper } from "../assets/wrappers/CreateProductWrapper";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export const CreateProduct:FC=():JSX.Element=>{
    const [inputs,setInputs]=useState({
        name:'',
        stock:0,
        active:false,
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
        else{
            if (e.target.files && e.target.files[0]) {
              
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
            active:value=='yes'
        })

    }
    const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(inputs);
        
    }

    return<CreateProductWrapper>
        <h1>New Product</h1>
        <form onSubmit={handleSubmit}>
            <div className="input">
            <label htmlFor="name">Product name</label>
            <input onChange={handleChange} type="text" id='name'/>
            </div>
            <div className="input">
            <label htmlFor="stock">Stock</label>
            <input onChange={handleChange} type="number" id='stock'/>
            </div>
            <div className="input">
            <label htmlFor="active">Active</label>
            
            <select id="active" onChange={handleChange2} >
                <option value='no'>No</option>
                <option value='yes'>Yes</option>
            </select>
          
            </div>
            <div className="input2">
            <label htmlFor="file"><FileUploadOutlinedIcon/>  Upload Image</label> 
             <input type="file" id="file" onChange={handleChange} accept="image/png, image/gif, image/jpeg" />
            </div>
           
            
            <button>Create</button>
            
            <img src={inputs.file?inputs.file:"https://cdn.pixabay.com/photo/2016/02/03/18/12/song-of-ice-and-fire-1177616__340.jpg"} alt="" />
            
            
            

        </form>
    </CreateProductWrapper>
}