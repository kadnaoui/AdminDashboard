import styled from "styled-components";

export const FeaturesWrapper=styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    .features{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .feature{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            width: 30%;
            height: 15vw;
            box-shadow: 0px 0px 4px 0 #555;
            transition: all 0.3s ease;
            &:hover{
                transform: scale(1.1);
            }
            h1{
                font-size:2vw;
            }
            .numbers{
                width: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: space-evenly;
                .dollars{
                    font-size:2.2vw;
                    font-weight: 700;
                }
                .percentage{
                    .up{
                        color: green;
                    }
                    .down{
                        color:red;
                        transform: rotate(180deg);
                    }
                }

            }
            .time{
                color:rgb(0,0,0,0.6)
            }

        }
    }
`