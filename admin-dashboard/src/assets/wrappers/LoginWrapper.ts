import styled from "styled-components";

export const LoginWrapper=styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: "Quicksand";

form{

    width: 90%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
    height: 10vh;
    width: 50%;
    display: flex;
    align-items: center;
    font-size: 4vw;
    margin-bottom: 3vw;
}
    .input{
        height:20vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        label,span{
            font-size: 2vw;
            margin-bottom: 1vw;
        }
        input,select{
            width: 80%;
            height: 30%;
            font-size: 1.5vw;
            padding-inline: 1vw;
        }
    }
    
    button{
        padding: 0.5vw 1vw;
    background-color: blue;
    color: white;
    font-size: 2vw;
    font-weight: 700;
    text-decoration: none;
    width: fit-content;
    border-radius: 0.5vw;
    margin-block: 1vw;
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