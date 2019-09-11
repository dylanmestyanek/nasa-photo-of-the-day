import React from "react";

const ApodCard = ({ title, copyright, date, explanation, imgUrl }) => {
    return (
        <div className="apod-card">
            <div className="img-container">
                <img src={imgUrl} alt="Nasa" />
                <span><em>Published:</em> {date}</span>
            </div>
            <div className="apod-text"> 
                <h1>{title}</h1>
                <h2><em>{copyright}</em></h2>
                <p>{explanation}</p>
            </div>
        </div>
    );
}

export default ApodCard;