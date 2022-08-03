import styled from 'styled-components'

export const TopBarWrapper=styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 10vh;
position: sticky;
top: 0;
font-family: "Heebo";
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
background-color: #fff;
z-index: 9999;
.title{
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4vh;
    color: #2c2dff;
    font-weight: 700;
}
.commands{
    width: 20%;
    text-align: center;
    svg{
        padding-top: 1vh;
        font-size: 4vh;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover{
            color:black;
            transform: scale(1.2);
        }
    }
}
`