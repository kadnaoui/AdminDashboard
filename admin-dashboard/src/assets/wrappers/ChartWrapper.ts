import styled from "styled-components";

interface Props{
margin:number
}

export const ChartWrapper=styled.div`
width: 95%;
box-shadow: 0px 0px 4px 0 #555;
margin:${(props:Props)=>props.margin}vw;
h1{
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2vw;

}
`