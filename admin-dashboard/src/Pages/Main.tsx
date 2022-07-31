import {FC,useEffect,useMemo,useState} from 'react'
import { MainWrapper } from '../assets/wrappers/MainWrapper'
import { Chart } from '../components/Chart'
import { Features } from '../components/features'
import { Widgets } from '../components/Widgets'
import { data } from '../Data'
import { userRequest } from '../Requests'

export const Main:FC=():JSX.Element=>{
    const [stats,setstats]=useState([])
    const Month= useMemo(():Array<string>=>['Jan','Feb','March','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],[])
    useEffect(()=>{
       const getStats=async()=>{
        try {
            
        const res = await userRequest.get('/users/stats');
        const newData=res.data.map((d:{_id:number,total:number})=>{
            
            const x={name:Month[d._id-1],'Active User':d.total}
            return x;
        })
        setstats(newData);
        
        
        } catch (error) {
            console.log(error);
            
        }
       }
       getStats()
    }
    ,[Month])
    return<MainWrapper>
        <Features/>
        <Chart data={stats} title='Sales Analytics :' dataKey="Active User" aspect={4/1} margin={2}/>
        <Widgets/>
    </MainWrapper>
}