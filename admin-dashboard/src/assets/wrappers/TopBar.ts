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
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5vw;
    color: #2c2dff;
    font-weight: 700;
}
.commands{
    width:30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 2.5vw;
    color: #2c2dff;
    font-weight: 700;
    svg{
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
            color: #000;
        }
    }
    img{
        width: 4vw;
        height: 4vw;
        border-radius: 50%;
        cursor: pointer;
    }
}
`