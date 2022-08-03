import { FC,useState,useEffect } from "react";
import { SideBarWrapper } from "../assets/wrappers/SideBar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
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
               
            </ul>
        </div>
        
        </SideBarWrapper>)
    
}