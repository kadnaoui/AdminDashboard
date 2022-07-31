import styled from "styled-components";

export const ProductWrapper=styled.section`
width: 89%;
height: 85vh;
padding:1vw 2vw;
font-family: "Quicksand";
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
.top{
    width:100%;
    height: 16.5vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;  
    .left{
        width: 45%;
        height: 100%;
        height: fit-content;
    }
    .right{
        height:100% ;
        display: flex;
        flex-direction: column;
        width: 45%;
        box-shadow: 0px 0px 4px 0 #555;
        .row{
            display: flex;
            align-items: center;
            padding:0.5vw 1vw;
            img{
                margin-right: 1vw;
                height: 3.5vw;
                width: 3.5vw;
                object-fit: cover;
                border-radius: 50%;
            }
            .name{
                font-size: 1.5vw;
                font-weight: 700;
            }
            .title{
                font-size: 1.2vw;
                font-weight: 700;
                width: 30%;
            }
            .value{
                font-size: 1.1vw;
            }
        }
    }
}
.bottom{
    width: 100%;
    height: 40vh;
    box-shadow: 0px 0px 4px 0 #555;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .input{
        height: 20%;
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 0.3vw 1vw;
        label{
            font-size: 1.5vw;
            margin-bottom: 0.5vw;
        }
        input,select{
            height: 1.8vw;
            padding-inline: 1vw;
            font-size: 1.3vw;
            width: 70%;
        }
    }

    .image{
        height: 100%;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        img{
            width: 15vw;
            max-width: 9vw;
            border-radius: 0.5vw;
            
        }
        svg{
            cursor: pointer;
            font-size: 3vw;
            border-radius: 50%;
            transition: all 0.3s ease;
            &:hover{
            color: white;
            background-color: #555;
            }
        }
        input[type="file"]{
            display: none;
        }
        button{
            width: 10vw;
            background-color: blue;
            border: none;
            padding: 0.3vw 0.7vw;
            color: white;
            cursor: pointer;
            border-radius: 0.5vw;
            font-size: 1.5vw;
            transition: all 0.3s ease;
            &:hover{
                background-color: white;
                color: blue;
                border: 1px solid blue;
            }
        }
    }

}

`