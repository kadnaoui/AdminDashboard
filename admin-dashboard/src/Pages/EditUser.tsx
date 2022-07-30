import { FC,useState,ChangeEvent} from "react";
import { EditUserWrapper } from "../assets/wrappers/EditUserWrapper";
import { useParams } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export const EditUser:FC=():JSX.Element=>{
    const [inputs,setInputs]=useState({
        userName:'',
        fullName:'',
        email:'',
        phone:'',
        adress:'',
        file:''
    })
    
    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const id=e.target.id;
        const value=e.target.value;
       if(id!='file'){
        setInputs({
            ...inputs,
            [id]:value
        })
    }
        else{
            if (e.target.files && e.target.files[0]) {
              
               const url= URL.createObjectURL(e.target.files[0])
                  setInputs({
                    ...inputs,
                    file:url
                })
        }
    }
        

    }
    const {id}=useParams()
    return<EditUserWrapper>
        <div className="left">
            <div className="head">
                <img src="https://cdn.pixabay.com/photo/2016/02/03/18/12/song-of-ice-and-fire-1177616__340.jpg" alt="" />
                <div className="main">
                    <span className="name">Abderrahim Kadnaoui</span>
                    <span className="job">Web Developer</span>
                </div>
            </div>
            <div className="details">
                <h2>Account Details</h2>
                <span><PersonOutlineOutlinedIcon/> username</span>
                <span><CalendarTodayOutlinedIcon/> 11.10.1999</span>
                <h2>Contact Details</h2>
                <span><PhoneAndroidOutlinedIcon/> +213 672 778 417</span>
                <span><MailOutlineOutlinedIcon/> Abderrahimkdn@gmail.com</span>
                <span><MyLocationOutlinedIcon/> username</span>

            </div>
        </div>
        <div className="right">
            <h1>Edit</h1>
            <form action="">
            <div className="inputs">
            <label htmlFor="userName">User Name</label>
            <input onChange={handleChange} type="text" id="userName" placeholder="User Name"/>
            <label htmlFor="fullName">Full Name</label>
            <input onChange={handleChange} type="text" id="fullName" placeholder="Full Name"/>
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" id="email" placeholder="Email"/>
            <label htmlFor="phone">Phone</label>
            <input onChange={handleChange} type="text" id="phone" placeholder="Phone"/>
            <label htmlFor="Adress">Adress</label>
            <input onChange={handleChange} type="text" id="Adress" placeholder="Adress"/>
            
            </div>
            <div className="image">
            <img src={inputs.file?inputs.file:"https://cdn.pixabay.com/photo/2016/02/03/18/12/song-of-ice-and-fire-1177616__340.jpg"} alt="" />
             <label htmlFor="file"><FileUploadOutlinedIcon/></label> 
             <input type="file" id="file" onChange={handleChange} accept="image/png, image/gif, image/jpeg" />
               <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    </EditUserWrapper>

    
}