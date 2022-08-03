import { FC ,useState,useEffect} from "react";
import { WidgetWrapper } from "../assets/wrappers/WidgetWrapper";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { userRequest } from "../Requests";
import { stringify } from "querystring";
import { useNavigate } from "react-router-dom";

export const Widgets:FC=():JSX.Element=>{
    const[users,setUsers]=useState<Array<{createdAt: string,email: string,isAdmin: Boolean,updatedAt:string,username:string,_id:string,image?:{data:{type:string,data:Array<number>}}}>>([]);
    const[orders,setOrders]=useState<Array<{amount:number,createdAt: string,status: string,_id:string,name:string,image:string}>>([]);
    
    
    useEffect(()=>{
        const fetchUsers=async()=>{
            try {
                
            const res=await userRequest.get('/users/find?new=true');
            setUsers(res.data);
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchUsers();
        const fetchOrders=async()=>{
            try {
                
            const res=await userRequest.get('/order');
           
           const promise= res.data.map(async(d:any)=>{
                
                    const res2=await userRequest.get(`/users/find/${d.userID}`);

                    return{amount:d.amount,status:d.status,createdAt:d.createdAt,_id:d._id,name:res2.data.username};
                    
                    
                   
                    
                    
                })
                Promise.all(promise).then(results =>{
                   setOrders(results);
                                   
             } )
            }catch (error) {
                console.log(error);
                
            }
        }
        fetchOrders();
        
        
    },[])
    const navigate=useNavigate()
    const displaymembers=()=>{
        
       return users.map(u=>{
        
        
       return(<div className="member" key={u._id}>
        <span className="name"> {u.username}</span>
        <span className="display" onClick={()=>navigate(`/users/${u._id}`)}>Display <RemoveRedEyeOutlinedIcon /> </span>
    </div>)})
    }
    
    const displayOrders=()=>{
        
        return orders.map(o=>{
            
            const date =new Date(o.createdAt);
            
         return(
            <tr key={o._id}>
                            <td className="customer">
                                {o.name}
                                </td>
                            <td>{date.toDateString()}</td>
                            <td>{o.amount}</td>
                            <td><span className={'status '+o.status}>{o.status}</span></td>
                        </tr>
         )
        })
     }
    return(
        <WidgetWrapper>
            <div className="left">
                <h1>New Joined Members</h1>
                
               {displaymembers()}
            </div>
            <div className="right">
                <h1>Latest Transactions</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {displayOrders()}
                    </tbody>
                </table>
            </div>
        </WidgetWrapper>
    )
}