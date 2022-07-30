import styled from "styled-components";

export const WidgetWrapper=styled.div`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: space-evenly;
.left{
    width:40%;
    box-shadow: 0px 0px 4px 0 #555;
    padding: 1vw;
    h1{
        font-size: 1.8vw;
    }
    .member{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-block: 1vh;
        img{
            width: 4vw;
            height: 4vw;
            object-fit: cover;
            border-radius: 50%;
        }
        .name{
            width:60%;
            overflow: hidden;
        }
        .display{
            background-color: rgb(0,0,0,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5vw;
            border-radius: 0.5vw;
            transition: all 0.3s ease;
            cursor: pointer;
            &:hover{
                background-color: rgb(0,0,0,0.4)
            }
            svg{
                width: 1.8vw;
                margin-left: 0.2vw;
            }
        }
    }
}
.right{
    width: 50%;
    box-shadow: 0px 0px 4px 0 #555;
    padding: 1vw;
    h1{
        font-size: 1.8vw;
    }
    table{
        width:100%;
    }
    th,td{
        text-align: center;
        font-size: 1.2vw;
        flex:1;
        overflow: hidden;
    }
    th{
        text-align: left;
    }
    .customer{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-block:1vh;
        text-align: left;
        img{
            margin-right: 0.5vw;
            border-radius: 50%;
            width:4vw;
            height: 4vw;
            object-fit:contain;
        }
    }
    .status{
        background-color: rgb(255,0,0,0.3);
        border-radius: 0.5vw;
        padding:0.2vw 0.5vw;
    }
}
`