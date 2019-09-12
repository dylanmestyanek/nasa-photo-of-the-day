import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ApodCard from "./components/ApodCard";

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DatePicker = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background: rgba(100, 150, 200, .8);
  padding: 0 20px;
  border-radius: 5px;
`;

function App() {
  const [apodData, setApodData] = useState({});
  const [date, setDate] = useState('2019-09-11');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=cFidAJAvEZq0dYQmaSKypW6hblmXzQoArDMTI2s2&date=${date}`)
      .then(respo => {
        setApodData(respo.data);
      })
      .catch(err => console.log('Messed up axios call', err));
  }, [date]);

return (
  <CardContainer>
    <DatePicker>
      <h2>Pick your date to visit:</h2>
      <input onChange={e => setDate(e.target.value)} type="date" />
    </DatePicker>
      <ApodCard title={apodData.title} copyright={apodData.copyright} date={apodData.date} explanation={apodData.explanation} imgUrl={apodData.hdurl}/>
    </CardContainer>
  );
}

export default App;