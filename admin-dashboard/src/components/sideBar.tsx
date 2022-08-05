import { FC,useState,useEffect } from "react";
import { SideBarWrapper } from "../assets/wrappers/SideBar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import { Link, useLocation } from "react-router-dom";

export const SideBar :FC=():JSX.Element=>{
    const [selected,setSelected]=useState<string>('/')
    const location=useLocation();
    useEffect(()=>{
        setSelected(location?.pathname)
    }
    ,[location?.pathname])
    
    return(<SideBarWrapper>
        <div className="group">
            <span className="title">Dashboard</span>
            <ul>
                <li className={selected=='/'? 'selected':''}>
                    <Link to='/'>

                    <HomeOutlinedIcon/> Home   
                    </Link>
                </li>
                <li className={selected=='/users'? 'selected':''}>
                <Link to='/users'>

                    <PeopleOutlineOutlinedIcon/> Users   
                </Link>
                </li>
                <li className={selected=='/products'? 'selected':''}>
                <Link to='/products'> <StorefrontOutlinedIcon/> Products </Link>
                     
                </li>   
                <li className={selected=='/anouncement'? 'selected':''}>
                <Link to='/anouncement'> <AnnouncementOutlinedIcon/> Anouncement </Link>
                     
                </li>   
               
            </ul>
        </div>
        
        </SideBarWrapper>)
    
}