import { FC ,useState,useEffect} from "react";
import { WidgetWrapper } from "../assets/wrappers/WidgetWrapper";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { userRequest } from "../Requests";
import { stringify } from "querystring";

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
                    let base64String:any;
        if(res2.data.image){  base64String = btoa(new Uint8Array(res2.data.image.data?.data).reduce(function (data, byte) {
           return data + String.fromCharCode(byte);
       }, ''));}
                    return{amount:d.amount,status:d.status,createdAt:d.createdAt,_id:d._id,name:res2.data.username,image:base64String};
                    
                    
                   
                    
                    
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
    
    const displaymembers=()=>{
        
       return users.map(u=>{
        
        let base64String:any;
        if(u.image){  base64String = btoa(new Uint8Array(u?.image?.data?.data).reduce(function (data, byte) {
           return data + String.fromCharCode(byte);
       }, ''));}
       return(<div className="member" key={u._id}>
        <img src={JSON.stringify(u.image)!='{}'?`data:image/png;base64,${base64String}`:'https://hope.be/wp-content/uploads/2015/05/no-user-image.gif'} alt="" />
        <span className="name"> {u.username}</span>
        <span className="display">Display <RemoveRedEyeOutlinedIcon/> </span>
    </div>)})
    }
    
    const displayOrders=()=>{
        
        return orders.map(o=>{
            
            const date =new Date(o.createdAt);
            
         return(
            <tr key={o._id}>
                            <td className="customer">
                                <img src={o.image?`data:image/png;base64,${o.image}`:'https://hope.be/wp-content/uploads/2015/05/no-user-image.gif'} alt="" />
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