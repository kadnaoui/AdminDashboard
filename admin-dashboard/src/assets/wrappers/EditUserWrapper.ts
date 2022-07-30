import styled from "styled-components";

export const EditUserWrapper=styled.section`
width: 89%;
padding: 2vw;
font-family: "Quicksand";
display: flex;
justify-content: space-evenly;

.left{
    box-shadow: 0px 0px 4px 0 #555;
    width: 30%;
    padding: 1vw;
    .head{
        height: 10vh;
        display: flex;
        align-items: center;
        img{
            margin-right: 1vw;
            width: 4vw;
            height: 4vw;
            object-fit: cover;
            border-radius:50%;
        }
        .main{
            display: flex;
            flex-direction:column;
            text-align: center;
            overflow: hidden;
            .name{
                font-size: 1.5vw;
                font-weight: 700;
            }
            .job{
                font-size: 1vw;
                font-weight: 500;
                color: rgba(0,0,0,0.7);
            }
        }
    }

    .details{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        font-size: 1.5vw;
        h2{
            margin: 1vw;
            color: rgba(0,0,0,0.6);
        }
        span{
            display: flex;
            align-items: center;
            svg{
                margin: 0.6vw;
            }
        }
    }

}
.right{
    box-shadow: 0px 0px 4px 0 #555;
    width: 60%;
    h1{
        height: 10vh;
        display: flex;
        align-items: center;
        padding: 1vw;
        font-size: 3vw;
    }
    form{
        
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    }
    .inputs{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1vw;

        input{
            
            margin-block: 1vw;
            width: 100%;
            height: 5vh;
            padding-inline: 0.4vw;
            border: none;
            border-bottom:1px solid #555;
        }
    }
    .image{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 100%;
            border-radius: 0.5vw;
            
        }
        svg{
            cursor: pointer;
            margin-block: 13vh;
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
            width: 80%;
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