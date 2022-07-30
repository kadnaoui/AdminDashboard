import styled from "styled-components";

export const UsersWrapper=styled.section`
width: 89%;
padding: 2vw;
font-family: "Quicksand";
display: flex;
flex-direction: column;
.btn{
    padding: 0.3vw 0.5vw;
    background-color: blue;
    color: white;
    font-size: 1.5vw;
    font-weight: 700;
    text-decoration: none;
    width: fit-content;
    border-radius: 0.5vw;
    margin-block: 1vw;
    align-self: flex-end;
    border:1px solid blue;
    transition: all 0.3s ease;
    &:hover{
        color: blue;
        background-color: white;
        border:1px solid blue;
    }
}
.table{
    height: 60vh;
     width:100%;
    .user{
        display: flex;
        align-items: center;
        img{
            height: 3vw;
            width: 3vw;
            object-fit: cover;
            border-radius: 50%;
            margin-right: 0.3vw;
        }
    }
    .action{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        .edit{
            color: green;
            cursor: pointer;
        }
        .delete{
            color: red;
            cursor: pointer;
        }
    }
}

`