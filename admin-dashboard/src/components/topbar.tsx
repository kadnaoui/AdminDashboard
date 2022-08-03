import { FC } from "react";
import { TopBarWrapper } from "../assets/wrappers/TopBar";
import Badge from '@mui/material/Badge';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useDispatch,useSelector } from "react-redux";
import { Logout } from "../redux/userRedux";
export const TopBar:FC=():JSX.Element=>{
    const dispatch=useDispatch();
    const user = useSelector((state:{user:any}) => state.user);
    console.log(user);
    
    return(
        <TopBarWrapper>
            <div className="title">
                Admin
            </div>
            <div className="commands">
                    <LoginOutlinedIcon color="action" onClick={()=>dispatch(Logout())}/>
            </div>
        </TopBarWrapper>
    )
}