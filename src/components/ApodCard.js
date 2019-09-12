import React from "react";
import styled from "styled-components";

const ApodContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: white;
        margin: 30px auto 0;
`;

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

const ApodText = styled.div`
    width: 50%;
    border-radius: 5px;
    padding: 8px 20px;
    background: rgba(100, 150, 200, .5);
    border: 0px solid rgba(100, 150, 200, 1);
    border-left-width: 7px;
    box-shadow: 5px 6px 5px 3px rgba(58, 24, 24, 0.8);
`;

const ApodCard = ({ title, copyright, date, explanation, imgUrl }) => {
    return (
        <ApodContainer>
            <ImgContainer>
                <img src={imgUrl} alt="Nasa" />
                <span><em>Published:</em> {date}</span>
            </ImgContainer>
            <ApodText> 
                <h1>{title}</h1>
                <h2><em>{copyright}</em></h2>
                <p>{explanation}</p>
            </ApodText>
        </ApodContainer>
    );
}

export default ApodCard;