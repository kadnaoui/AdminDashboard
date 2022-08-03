import { FC,useState,ChangeEvent, useEffect,FormEvent} from "react";
import { EditUserWrapper } from "../assets/wrappers/EditUserWrapper";
import { useParams } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { getUser, updateUser } from "../redux/apiCalls";

export const EditUser:FC=():JSX.Element=>{
    const [inputs,setInputs]=useState({
        username:'',
        fullname:'',
        email:'',
        phone:'',
        adress:'',
        active:false
    })
    const [infos,setInfos]=useState({
        username:'',
        fullname:'',
        email:'',
        phone:'',
        adress:'',
        active:'false'
    })
    
    const handleChange=(e: ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
        const id=e.target.id;
        const value=e.target.value;
      id=='active'?
      setInputs({
        ...inputs,
        active:value=='yes'
    })  :setInputs({
            ...inputs,
            [id]:value
        })
      

    }

    const {id}=useParams();
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        updateUser(id,setInputs,{
            username:inputs.username?inputs.username:infos.username,
            fullname:inputs.fullname?inputs.fullname:infos.fullname,
            email:inputs.email?inputs.email:infos.email,
            phone:inputs.phone?inputs.phone:infos.phone,
            adress:inputs.adress?inputs.adress:infos.adress,
            active:inputs.active?'true':'false'
        })
        
    }
    useEffect(()=>{
        getUser(id,setInfos);
    }
    ,[infos])
    return<EditUserWrapper>
        <div className="left">
            <div className="head">
                 <div className="main">
                    <span className="name">{infos.fullname}</span>
                </div>
            </div>
            <div className="details">
                <h2>Account Details</h2>
                <span><PersonOutlineOutlinedIcon/> {infos.username}</span>
                <span><CheckCircleOutlineOutlinedIcon/> {infos.active=='true'?'Active':'inActive'}</span>
                <h2>Contact Details</h2>
                <span><PhoneAndroidOutlinedIcon/> {infos.phone}</span>
                <span><MailOutlineOutlinedIcon/>{infos.email}</span>
                <span><MyLocationOutlinedIcon/> {infos.adress}</span>

            </div>
        </div>
        <div className="right">
            <h1>Edit</h1>
            <form action="" onSubmit={handleSubmit}>
            <div className="inputs">
            <label htmlFor="username">User Name</label>
            <input onChange={handleChange} type="text" id="username" value={inputs.username} placeholder="User Name"/>
            <label htmlFor="fullname">Full Name</label>
            <input onChange={handleChange} type="text" id="fullname" value={inputs.fullname} placeholder="Full Name"/>
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" id="email" value={inputs.email} placeholder="Email"/>
            <label htmlFor="phone">Phone</label>
            <input onChange={handleChange} type="text" id="phone" value={inputs.phone} placeholder="Phone"/>
            <label htmlFor="Adress">Adress</label>
            <input onChange={handleChange} type="text" id="Adress" value={inputs.adress} placeholder="Adress"/>
            <label htmlFor="active">Active</label>
            <select onChange={handleChange} id="active"  >
                
                 <option value='no'>No</option>
                <option value='yes'>Yes</option>
            </select>
             <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    </EditUserWrapper>

    
}