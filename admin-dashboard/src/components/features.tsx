import { FC,useEffect,useState } from "react";
import { FeaturesWrapper } from "../assets/wrappers/featureWrapper";
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import { userRequest } from "../Requests";

export const Features:FC=():JSX.Element=>{
    const [income,setIncome]=useState<Array<{total:number,_id:number}>>([]);
    const [value,setValue]=useState(0);
    useEffect(()=>{
        const getIncome= async()=>{
            const res= await userRequest.get('/order/income');
            const x=(res.data[1]?.total-res.data[0]?.total)/res.data[0]?.total*100;
            setValue(x);
            setIncome(res.data)
        }
        getIncome();
        
    }
    ,[])
   
    
    return<FeaturesWrapper>
          <div className="features">
            <div className="feature">
                <h1>Revanue</h1>
                <div className="numbers">
                    <span className="dollars">${income[1]?.total}</span> 
                    <span className="percentage">
                       {value} <NorthOutlinedIcon className={value>0?'up':'down'}/>
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