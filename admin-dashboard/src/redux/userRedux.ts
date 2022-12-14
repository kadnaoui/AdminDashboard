import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';


 export type userState ={
    user: {accessToken:string,email:string,isAdmin:Boolean,username:string,_id:string}|null;
    isFetching:boolean;
    error:boolean;
  }
  
  const initialState: userState = {
    user:null,
    isFetching:false,
    error:false
  }
 
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
      LoginStart:(state)=>{
        state.isFetching=true;      
        state.error=false;
        
      },
      LoginSuccess:(state,action:PayloadAction<{user:{accessToken:string,email:string,isAdmin:Boolean,username:string,_id:string}}>)=>{
        state.isFetching=false;
        state.user=action.payload.user;
        
       
      },
      LoginFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
      },Logout:(state)=>{
        state.isFetching=false;
        state.user=null;
        
      }
    }
})
export const {LoginStart,LoginSuccess,LoginFailure,Logout}=userSlice.actions;
export default userSlice;