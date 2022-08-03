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
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    img{
        max-width:50%;
        max-height:50vh;
        object-fit: cover;
    }
    .input,.input2,.textarea{
        height:10vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        label,span{
            font-size: 1.5vw;
            margin-bottom: 1vw;
        }
        input,select,textarea{
            width: 80%;
            height: 5vh;
            font-size: 1.3vw;
            padding-inline: 1vw;
        }
        textarea{
            resize: none;
            height: 100%;
        }
        input[type='file']{
            display: none;
        }
        svg{
            font-size: 5vw;
        }
    }
    .textarea{
        height: 30vh;
    }
    .input2{
        margin-block: 2vw;
        label{
            padding: 1vw 2vw;
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