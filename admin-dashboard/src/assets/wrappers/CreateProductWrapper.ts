import styled from "styled-components";

export const CreateProductWrapper=styled.div`
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
form{
    width: 90%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    img{
        width:50%
    }
    .input,.input2{
        height:17vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        label,span{
            font-size: 1.5vw;
            margin-bottom: 1vw;
        }
        input,select{
            width: 80%;
            height: 30%;
            font-size: 1.3vw;
            padding-inline: 1vw;
        }
        input[type='file']{
            display: none;
        }
        svg{
            font-size: 5vw;
        }
    }
    .input2{
        label{
            padding: 0.5vw 1vw;
            height: 40%;
            width: fit-content;
            display: flex;
            align-items: center;
            font-size: 1.3vw;
            cursor: pointer;
            border-radius: 0.5vw;
            transition: all 0.3s ease;
            &:hover{
                background-color: black;
                color: white;
            }

            
        } 
        input{
            display: none;
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