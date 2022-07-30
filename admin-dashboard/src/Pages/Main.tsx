import {FC} from 'react'
import { MainWrapper } from '../assets/wrappers/MainWrapper'
import { Chart } from '../components/Chart'
import { Features } from '../components/features'
import { Widgets } from '../components/Widgets'
import { data } from '../Data'

export const Main:FC=():JSX.Element=>{
    return<MainWrapper>
        <Features/>
        <Chart data={data} title='Sales Analytics :' dataKey="Active User" aspect={4/1} margin={2}/>
        <Widgets/>
    </MainWrapper>
}