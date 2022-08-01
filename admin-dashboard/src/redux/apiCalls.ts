import { LoginFailure, LoginStart, LoginSuccess } from "./userRedux"
import { publicRequest, userRequest } from "../Requests";
import { getProductFailure,
         getProductStart,
         getProductSuccess,
         deleteProductFailure,
         deleteProductStart,
         deleteProductSuccess,
         updateProductFailure,
         updateProductStart,
         updateProductSuccess} from "./productRedux";
import {  toast } from 'react-toastify';

export const login = async(dispatch:Function,user:{username:string,password:string})=>{
    dispatch(LoginStart());
    try {
        const res=await publicRequest.post('/auth/login',user);
        dispatch(LoginSuccess({user:res.data}));
    } catch (error) {
        dispatch(LoginFailure())
    }

}

export const getProduct = async(dispatch:Function)=>{
    dispatch(getProductStart());
    try {
        const res=await publicRequest.get('/product/find');
        let base64String:any;
      
      const data= res.data.map((d:any)=>{
        if(d.image){  base64String = btoa(new Uint8Array(d.image.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
        }, ''));}
            const newData={
                categories: d.categories,
                color: d.color,
                createdAt: d.createdAt,
                description: d.description,
                image: {data: {type:'Buffer',data:`data:image/png;base64,${base64String}`}, contentType: 'image/png'},
                inStock: d.inStock,
                price: d.price,
                size: d.size,
                title: d.title,
                _id: d._id
            }
            return newData
        })
        
      dispatch(getProductSuccess({product:data}));
        
    } catch (error) {
        dispatch(getProductFailure())
    }

}
export const deleteProduct = async(dispatch:Function,id:string)=>{
    dispatch(deleteProductStart());
    try {
        const res=await userRequest.delete(`/product/${id}`);
        dispatch(deleteProductSuccess({id:id}));
        toast.success("Product Deleted Succesfully");
        
    } catch (error) {
        dispatch(deleteProductFailure())
        toast.error("something went wrong");
    }

}

export const updateProduct = async(dispatch:Function,id:any,data:any,setInputs:Function)=>{
    dispatch(updateProductStart());
    console.log(data.file)
    try {
        const form = new FormData();
        form.append('title', data.title)
        form.append('description', data.description)
        form.append('inStock', JSON.stringify(data.inStock))
        form.append('price', data.price)
        data.categories.map((d:any)=>{
            form.append('categories', d)
        })
        data.size.map((d:any)=>{
            form.append('size', d)
        })
        data.color.map((d:any)=>{
            form.append('color', d)
        })
        form.append('image', data.file)
        console.log(data.url);
        
         const res=await userRequest.patch(`/product/${id}`,form);
        dispatch(updateProductSuccess({id:id,data:{title:data.title,description:data.description,price:data.price,inStock:data.inStock,url:data.url}}));
        setInputs({
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
        toast.success("Product Updated Succesfully");
    } catch (error) {
        dispatch(updateProductFailure())
        toast.error("Something went wrong");
    }

}
export const createProduct = async(data:any,setInputs:Function)=>{
    
    try {
        const form = new FormData();
        form.append('title', data.title)
        form.append('description', data.description)
        form.append('inStock', JSON.stringify(data.inStock))
        form.append('price', data.price)
        data.categories.map((d:any)=>{
            form.append('categories', d)
        })
        data.size.map((d:any)=>{
            form.append('size', d)
        })
        data.color.map((d:any)=>{
            form.append('color', d)
        })
        form.append('image', data.file)
        console.log(data.url);
        
         const res=await userRequest.post(`/product`,form);
         setInputs({
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
        toast.success("Product Created Succesfully");

    } catch (error) {
        console.log(error);
        toast.error("something went wrong");
        
    }

}
