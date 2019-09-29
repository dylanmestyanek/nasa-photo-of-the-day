import React from "react";
import styled from "styled-components";

const SwagContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: white;
        margin: 30px auto 0;
`;

const SuperSnazzy = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    img {
        width: 68%;
        border-radius: 5px;
        box-shadow: 5px 6px 5px 3px rgba(0, 0, 0, .8);
    }

    span {
        margin-top: 10px;
    }
`;

const YeehawCowboy = styled.div`
    width: 50%;
    border-radius: 5px;
    padding: 8px 20px;
    background: rgba(100, 150, 200, .5);
    border: 0px solid rgba(100, 150, 200, 1);
    border-left-width: 7px;
    box-shadow: 5px 6px 5px 3px rgba(58, 24, 24, 0.8);
`;

const ApodCard = ({ 
    title, 
    copyright, 
    date, 
    explanation, 
    imgUrl }) => {

    return (
        <SwagContainer>
            <SuperSnazzy>
                <img src={imgUrl} alt="Nasa" />
                <span><em>Published:</em> {date}</span>
            </SuperSnazzy>
            <YeehawCowboy> 
                <h1>{title}</h1>
                <h2><em>{copyright}yeehaw</em></h2>
                <p>{explanation}</p>
            </YeehawCowboy>
        </SwagContainer>
    );
}

export default ApodCard;