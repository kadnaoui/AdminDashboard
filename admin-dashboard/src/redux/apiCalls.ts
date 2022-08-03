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
       
        
        res.data.isAdmin&&dispatch(LoginSuccess({user:res.data}));
        !res.data.isAdmin&&toast.error('you are not an admin')
        res.data.isAdmin&&toast.success('loged in')

    } catch (error) {
        dispatch(LoginFailure())
       toast.error('something went wrong')
        
    }

}

export const getProduct = async(dispatch:Function)=>{
    dispatch(getProductStart());
    try {
        const res=await publicRequest.get('/product/find');
        
        console.log(res.data);
        
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
//delete user
export const deleteUser=async(id:string)=>{
    try {
        const res=await userRequest.delete(`/users/${id}`);
        toast.success(`user width id of ${id} deleted succesfully`)
    } catch (error) {
        toast.error('something went wrong')
    }
   
}
//create User
export const createUser=async(data:any,setInputs:Function)=>{
    try {
        
        const res=await publicRequest.post(`/auth/register`,data);
        setInputs({
            username:'',
            fullname:'',
            email:'',
            phone:'',
            adress:'',
            gender:'',
            password:'',
            active:false
        })
        toast.success(`${data.username} acount was created succsefully`)
    } catch (error) {
        toast.error('something went wrong');
        console.log(error);
        
    }
}
//get User
export const getUser=async(id:string|undefined,setInfos:Function)=>{
    try {
        const res=await userRequest.get(`/users/find/${id}`);
        setInfos({
            username:res.data.username,
            fullname:res.data.fullname,
            email:res.data.email,
            phone:res.data.phone,
            adress:res.data.adress,
            active:res.data.active
        })
    } catch (error) {
        toast.error('something went wrong');
    }
   
}
//update user
export const updateUser=async(id:string|undefined,setInfos:Function,data:any)=>{
    try {
        const res=await userRequest.patch(`/users/${id}`,data)
        setInfos({
            username:'',
            fullname:'',
            email:'',
            phone:'',
            adress:'',
            active:false
        })
        toast.success('User updated');
    } catch (error) {
        toast.error('something went wrong');
    }
   
}