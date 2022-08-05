import {FC,ChangeEvent,useState,FormEvent, useEffect} from 'react';
import { toast } from 'react-toastify';
import { CreateUserWrapper } from '../assets/wrappers/CreateUserWrapper';
import { createAnouncement, deleteAnouncement, getAnouncement ,updateAnouncement} from '../redux/apiCalls';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export const Anouncement:FC=():JSX.Element=>{
const [anouncement,setAnouncement]=useState([])
const [updt,setUpdt]=useState('')
const [input,setInput]=useState('')
const [input2,setInput2]=useState('')
useEffect(()=>{
    getAnouncement(setAnouncement)
},[input=='',input2=='',updt])
const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    input!=''&&updateAnouncement({anounecement:input},updt,setInput)
    input2!=''&&createAnouncement({anounecement:input2},setInput2)

    
}
const displayAnouncement=()=>{
 return   anouncement.map((a:{anounecement:string,id:string})=>{
                return(
                    <form className="input2" key={a.id} onSubmit={onSubmit}>
                    <label htmlFor={a.id}>{a.anounecement}
                    <div><EditOutlinedIcon onClick={()=>{
                        if(updt!=a.id)setUpdt(a.id)
                        else{setUpdt('');setInput('')}
                        }}/><DeleteOutlineOutlinedIcon onClick={()=>{
                            deleteAnouncement(a.id)
                            setUpdt(updt==''?' ':'')
                            }}/></div>
                    
                    </label>
                    <input  type={updt==a.id?'text':'hidden'} value={input} onChange={(e)=>setInput(e.target.value)} id={a.id} required/>
                    <button type='submit' className={updt==a.id?'':'hidden'}>update</button>
                    </form>
                )
    })
}

    return<CreateUserWrapper>
        <h1>Anouncements</h1>
        <div className='form' >
        {displayAnouncement()}
            
        <form className="input2" onSubmit={onSubmit} >
                    <label htmlFor='new'>New Anouncement</label>
                    <input  type="text"  id="new" value={input2} onChange={(e)=>setInput2(e.target.value)} required/>
                    <button type='submit'>Create</button>
                    </form>

        </div>
    </CreateUserWrapper>
}