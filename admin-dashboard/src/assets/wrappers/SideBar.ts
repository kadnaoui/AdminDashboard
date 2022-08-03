import styled from "styled-components";

export const SideBarWrapper=styled.div`
height: 90Vh;
width: 20vw;
box-shadow:0 3px 5px 0 #555;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
font-family: "Heebo";
position: sticky;
top: 10vh;
.group{
    margin-top: 4vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:rgba(0, 0, 0, 0.54);
    .title{
        font-size: 1.5vw;
        width: 90%;
    }
    ul{
        width:85%;
        li{          
        list-style-type: none;
        }
        a{         
        color:rgba(0, 0, 0, 0.54);
        margin-block: 0.3vw;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 1.4vw;
        transition:all 0.3s ease;
        padding-left:0.5vw;
        text-decoration: none;
        svg{
            margin-right:0.6vw;
        }
        &:hover{
            background:rgba(0, 0, 0, 0.1);
            border-radius: 0.8vw;
        }
    }
        .selected{
            background:rgba(0, 0, 0, 0.1);
            border-radius: 0.8vw;
        }
    }
    
}
`