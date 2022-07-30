import {FC,ChangeEvent,useState,FormEvent} from 'react';
import { CreateUserWrapper } from '../assets/wrappers/CreateUserWrapper';

export const Createuser:FC=():JSX.Element=>{
    const [inputs,setInputs]=useState({
        userName:'',
        fullName:'',
        email:'',
        phone:'',
        adress:'',
        gender:'',
        active:false
    })
    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const {id,value,className}=e.target;
        className!='gender'?
        setInputs({
            ...inputs,
            [id]:value
        }):setInputs({
            ...inputs,
            gender:id
        })

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

    return<CreateUserWrapper>
        <h1>New User</h1>
        <form onSubmit={handleSubmit}>
            <div className="input">
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} type="text" id='username'/>
            </div>
            <div className="input">
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" id='email'/>
            </div>
            <div className="input">
            <label htmlFor="phone">Phone</label>
            <input onChange={handleChange} type="text" id='phone'/>
            </div>
            <div className="input checkbox">
            <span>Gender</span>
            <label htmlFor="male">Male</label>
            <input onChange={handleChange} type="checkbox" id='male' className='gender' checked={inputs.gender=='male'}/>
            <label htmlFor="female">Female</label>
            <input onChange={handleChange} type="checkbox" id='female' className='gender' checked={inputs.gender=='female'}/>
            <label htmlFor="other">Other</label>
            <input onChange={handleChange} type="checkbox" id='other' className='gender' checked={inputs.gender=='other'}/>
            </div>
            <button>Create</button>
            <div className="input">
            <label htmlFor="fullname">Full Name</label>
            <input onChange={handleChange} type="text" id='fullname'/>
            </div>
            <div className="input">
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" id='password'/>
            </div>
            <div className="input">
            <label htmlFor="adress">Adress</label>
            <input onChange={handleChange} type="text" id='adress'/>
            </div> 
            <div className="input">
            <label htmlFor="active">Active</label>
            
            <select id="active" onChange={handleChange2} >
                <option value='no'>No</option>
                <option value='yes'>Yes</option>
            </select>
            </div>
            
            

        </form>
    </CreateUserWrapper>
}