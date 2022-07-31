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
        //const res=await userRequest.delete(`/product/${id}`);
        dispatch(deleteProductSuccess({id:id}));
        
    } catch (error) {
        dispatch(deleteProductFailure())
    }

}

export const updateProduct = async(dispatch:Function,id:any,data:any)=>{
    dispatch(updateProductStart());
    try {
        //const res=await userRequest.patch(`/product/${id}`,data);
        dispatch(updateProductSuccess({id:id,data:data}));
        
    } catch (error) {
        dispatch(updateProductFailure())
    }

}

