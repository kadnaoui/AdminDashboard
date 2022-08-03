import { FC,useEffect,useState } from "react";
import { FeaturesWrapper } from "../assets/wrappers/featureWrapper";
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import { userRequest } from "../Requests";

export const Features:FC=():JSX.Element=>{
    const [income,setIncome]=useState<Array<{total:number,_id:number}>>([]);
    const [stats,setStats]=useState<Array<{count:number,_id:number}>>([]);
    const [product,setProduct]=useState<Array<{count:number,_id:number}>>([]);
    const [value,setValue]=useState({income:0,stats:0,product:0});

    
    useEffect(()=>{
        const getIncome= async()=>{
            const res= await userRequest.get('/order/income');
            setIncome(res.data)
            
        }
        getIncome();
        const getusers= async()=>{
            const res= await userRequest.get('/users/month-stats');
            setStats(res.data);
        }
        getusers();
        const getProducts= async()=>{
            const res= await userRequest.get('/product/month-stats');
            setProduct(res.data);
            
        }
        getProducts();

        
    }
    ,[])
    useEffect(()=>{
        const x={income:(income[1]?.total-income[0]?.total)/income[0]?.total*100,stats:(stats[1]?.count-stats[0]?.count)/stats[0]?.count*100,product:(product[1]?.count-product[0]?.count)/product[0]?.count*100};
            
        setValue(x);
    },[stats,income])
   
    
    return<FeaturesWrapper>
          <div className="features">
            <div className="feature">
                <h1>Revanue</h1>
                <div className="numbers">
                    <span className="dollars">${income[1]?.total}</span> 
                    <span className="percentage">
                       {value.income} <NorthOutlinedIcon className={value.income>0?'up':'down'}/>
                    </span>
                </div>
                <span className="time">Compared to last month</span>


            </div>
            <div className="feature">
                <h1>Users</h1>
                <div className="numbers">
                    <span className="dollars">{stats[1]?.count}</span> 
                    <span className="percentage">
                        {value.stats} <NorthOutlinedIcon className={value.stats>0?'up':'down'}/>
                    </span>
                </div>
                <span className="time">Compared to last month</span>


            </div>
            <div className="feature">
                <h1>Product</h1>
                <div className="numbers">
                <span className="dollars">{product[1]?.count}</span> 
                    <span className="percentage">
                        {value.product} <NorthOutlinedIcon className={value.product>0?'up':'down'}/>
                    </span>
                </div>
                <span className="time">Compared to last month</span>


            </div>
        </div>
    </FeaturesWrapper>
}