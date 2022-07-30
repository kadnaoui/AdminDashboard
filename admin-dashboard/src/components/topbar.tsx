import { FC } from "react";
import { TopBarWrapper } from "../assets/wrappers/TopBar";
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
export const TopBar:FC=():JSX.Element=>{
    return(
        <TopBarWrapper>
            <div className="title">
                Abderrahim
            </div>
            <div className="commands">
                <Badge badgeContent={4} color="primary">
                    <NotificationsNoneOutlinedIcon color="action" />
                </Badge>
                <Badge badgeContent={4} color="primary">
                    <LanguageOutlinedIcon color="action" />
                </Badge>
                <SettingsOutlinedIcon color="action" />
                <img src="https://cdn.pixabay.com/photo/2022/04/24/16/52/animal-7154059_960_720.jpg" alt="" />
            </div>
        </TopBarWrapper>
    )
}