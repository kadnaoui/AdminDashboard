import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

 export type productState ={
    product: any[]|[];
    isFetching:boolean;
    error:boolean;
  }
  
  const initialState: productState = {
    product:[],
    isFetching:false,
    error:false
  }
 
const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
      //Get
        getProductStart:(state)=>{
            state.isFetching=true;
            state.error=false;
            
          },
          getProductSuccess:(state,action:PayloadAction<{product:any[]}>)=>{
            
            state.isFetching=false;
            state.product=action.payload.product;
          },
          getProductFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
          },
        //Delete
        deleteProductStart:(state)=>{
          state.isFetching=true;
          state.error=false;
          
        },
        deleteProductSuccess:(state,action:PayloadAction<{id:string}>)=>{

          state.isFetching=false;
         state.product.splice(
            state.product.findIndex(p=>p._id==action.payload.id),1
          )
        },
        deleteProductFailure:(state)=>{
          state.isFetching=false;
          state.error=true;
        },
        //Update
        updateProductStart:(state)=>{
          state.isFetching=true;
          state.error=false;
          
        },
        updateProductSuccess:(state,action:PayloadAction<{id:string,data:any}>)=>{

          state.isFetching=false;
         state.product=state.product.map(p=>{
          
         
          if(p._id==action.payload.id){ 
            if (action.payload.data.title||action.payload.data.description||action.payload.data.price||action.payload.data.inStock) {
              let r={...current(p),
                inStock:action.payload.data.inStock
              }
              
              if (action.payload.data.title) {
                r= {
                  ...r,
                  title:action.payload.data.title
                }
              }
              if (action.payload.data.description) {
                r= {
                  ...r,
                  description:action.payload.data.description
                }
              } 
              if (action.payload.data.price) {
                  r= {
                    ...r,
                    price:action.payload.data.price
                  }
                } 
               
                  

                  
                  return r
            } else {
              return p
            }
                        
          }
          else return p
         })
         console.log(state.product);
         
        },
        updateProductFailure:(state)=>{
          state.isFetching=false;
          state.error=true;
        }
    }

})
export const { getProductStart,getProductSuccess,getProductFailure,deleteProductStart,deleteProductSuccess,deleteProductFailure,updateProductStart,updateProductSuccess,updateProductFailure}=productSlice.actions;
export default productSlice;