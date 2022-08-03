import {FC} from 'react'
import { ChartWrapper } from '../assets/wrappers/ChartWrapper'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props{
  data:Array<Object>;
  title:string;
  dataKey:string;
  aspect:number;
  margin:number
}

export const Chart :FC<Props>=({data,title,dataKey,aspect,margin}):JSX.Element=>{
  console.log(data);
  
    return<ChartWrapper margin={margin}>
        <h1>{title}</h1>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>

        </ResponsiveContainer>
    </ChartWrapper>
}