import { FC,FormEvent,ChangeEvent,useState, useEffect } from "react";
import { LoginWrapper } from "../assets/wrappers/LoginWrapper";
import { useDispatch,useSelector } from 'react-redux'
import { login } from "../redux/apiCalls";
export const Login:FC=():JSX.Element=>{

    
    
    const [inputs,setInputs]=useState({
        username:'',
        password:'',
    })
    const dispatch=useDispatch();
    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const id=e.target.id;
        const value=e.target.value;

        setInputs({
            ...inputs,
            [id]:value
        })
    
    }

    const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        login(dispatch,inputs);
        
    }

    return<LoginWrapper>
        
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input">
            <label htmlFor="username">User Name</label>
            <input onChange={handleChange} type="text" id='username'/>
            </div>
            <div className="input">
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" id='password'/>
            </div>          
            <button disabled={inputs.password==''||inputs.username==''}>Login</button>
        </form>
    </LoginWrapper>
}