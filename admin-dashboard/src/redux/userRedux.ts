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
        console.log(1);
        
      },
      LoginSuccess:(state,action:PayloadAction<{user:{accessToken:string,email:string,isAdmin:Boolean,username:string,_id:string}}>)=>{
        state.isFetching=false;
        state.user=action.payload.user;
        console.log(state.user);
        
       
      },
      LoginFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
      }
    }
})
export const {LoginStart,LoginSuccess,LoginFailure}=userSlice.actions;
export default userSlice;