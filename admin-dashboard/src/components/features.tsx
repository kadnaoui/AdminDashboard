import { FC } from "react";
import { FeaturesWrapper } from "../assets/wrappers/featureWrapper";
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';

export const Features:FC=():JSX.Element=>{
    return<FeaturesWrapper>
          <div className="features">
            <div className="feature">
                <h1>Revanue</h1>
                <div className="numbers">
                    <span className="dollars">$2,767</span> 
                    <span className="percentage">
                        11,5 <NorthOutlinedIcon className="up"/>
                    </span>
                </div>
                <span className="time">Compared to last month</span>


            </div>
            <div className="feature">
                <h1>Sales</h1>
                <div className="numbers">
                    <span className="dollars">$2,767</span> 
                    <span className="percentage">
                        11,5 <NorthOutlinedIcon className="down"/>
                    </span>
                </div>
                <span className="time">Compared to last month</span>


            </div>
            <div className="feature">
                <h1>Cost</h1>
                <div className="numbers">
                    <span className="dollars">$2,767</span> 
                    <span className="percentage">
                        11,5 <NorthOutlinedIcon className="up"/>
                    </span>
                </div>
                <span className="time">Compared to last month</span>


            </div>
        </div>
    </FeaturesWrapper>
}