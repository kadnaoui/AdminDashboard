import styled from "styled-components";

export const CreateUserWrapper=styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
font-family: "Quicksand";
h1{
    height: 10vh;
    display: flex;
    align-items: center;
    font-size: 2vw;
    padding-left: 2vw;
    align-self: flex-start;
}
form,.form{
    width: 90%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .input,.input2{
        height:17vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        label,span{
            font-size: 1.5vw;
            margin-bottom: 1vw;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
        svg{
                margin-inline: 1vw;
                cursor: pointer;
            }
        }
        input,select{
            width: 80%;
            height: 30%;
            font-size: 1.3vw;
            padding-inline: 1vw;
        }
        .hidden{
            display: none;
        }
    }
    .input2{
        height: 25vh;
    }
    .checkbox{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        span{
            width: 100%;
        }
        label{
            font-size: 1.3;
        }
        input{
            width:15%;
            height:3vh;
            
        }
    }
    button{
        padding: 0.3vw 0.5vw;
    background-color: blue;
    color: white;
    font-size: 1.5vw;
    font-weight: 700;
    text-decoration: none;
    width: fit-content;
    border-radius: 0.5vw;
    margin-block: 1vw;
    align-self: flex-start;
    border:1px solid blue;
    transition: all 0.3s ease;
    width: 20%;
    min-height: 5%;
    &:hover{
        color: blue;
        background-color: white;
        border:1px solid blue;
    }
    }
    
}

`