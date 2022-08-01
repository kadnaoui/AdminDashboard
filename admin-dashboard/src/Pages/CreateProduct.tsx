import { FC,FormEvent,ChangeEvent,useState,useEffect } from "react";
import { CreateProductWrapper } from "../assets/wrappers/CreateProductWrapper";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/apiCalls";
import { toast } from "react-toastify";
export const CreateProduct:FC=():JSX.Element=>{
  const dispatch=useDispatch();
     
      const [inputs,setInputs]=useState({
          title:'',
          description:'',
          price:'',
          file:{},
          url:'',
          inStock:true,
          size:[],
          color:[],
          categories:[]
      })

    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const id=e.target.id;
        const value=e.target.value;
       if(id!='file'){
        if (id=='size'||id=='color'||id=='categories') {
            setInputs({
                ...inputs,
                [id]:value.split(' ').filter(v=>v!='')
            })
        }
        else{
            setInputs({
            ...inputs,
            [id]:value
        })
    }
        
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
    const handleChange2=(e: ChangeEvent<HTMLSelectElement|HTMLTextAreaElement>)=>{
        const {id,value}=e.target;
        if (id=='description') {
            setInputs({
                ...inputs,
                [id]:value.trim()
            })
    
        }
       else{
        setInputs({
            ...inputs,
            [id]:value=='yes'
        })
       } 

}
const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
if (inputs.title==''||
inputs.description==''||
inputs.price==''||
inputs.file=={}||
inputs.url==''||
inputs.size.length==0||
inputs.color.length==0||
inputs.categories.length==0) {
    toast.error('please fill all fields')
    
}
    
  else {  
   createProduct({
         title:inputs.title,
        description:inputs.description,
        price:inputs.price,
        file:inputs.file,
        url:inputs.url ,
        inStock:inputs.inStock,
        size:inputs.size,
        color:inputs.color,
        categories:inputs.categories
    },setInputs)

}
    
}
    return<CreateProductWrapper>
        <h1>New Product</h1>
        <form onSubmit={handleSubmit}>
            <div className="input">
            <label htmlFor="title">Product name</label>
            <input onChange={handleChange} value={inputs.title} type="text" id='title'/>
            </div>
            <div className="textarea">
                    <label htmlFor="descripyion">Description</label>
                    <textarea  id="description" rows={30}value={inputs.description} onChange={handleChange2}/>
            </div>
            <div className="input">
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" min={0}value={inputs.price} onChange={handleChange}/>
                </div>
                <div className="input">
                    <label htmlFor="size">Size</label>
                    <input type="text"  id="size" value={inputs.size.length==0?'':undefined} onChange={handleChange}/>
                </div>
                <div className="input">
                    <label htmlFor="color">Color</label>
                    <input type="text"  id="color" value={inputs.color.length==0?'':undefined} onChange={handleChange}/>
                </div>
                <div className="input">
                    <label htmlFor="categories">Categories</label>
                    <input type="text" value={inputs.categories.length==0?'':undefined} id="categories"onChange={handleChange} />
                </div>
                <div className="input">
                    <label htmlFor="inStock">inStock</label>
                    <select  id="inStock" onChange={handleChange2}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
         
            

            
            <img src={inputs.url?inputs.url:"https://cdn.pixabay.com/photo/2016/02/03/18/12/song-of-ice-and-fire-1177616__340.jpg"} alt="" />
            
            <div className="input2">
            <label htmlFor="file"><FileUploadOutlinedIcon/>  Upload Image</label> 
             <input type="file" id="file" onChange={handleChange} accept="image/png, image/gif, image/jpeg" />
            </div>
           
            
            <button>Create</button>
            

        </form>
    </CreateProductWrapper>
}