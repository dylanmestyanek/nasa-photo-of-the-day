import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodCard from "./components/ApodCard";

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
  <div className="card-container">
    <div className="date-picker-container">
      <h2>Pick your date to visit:</h2>
      <input onChange={e => setDate(e.target.value)} type="date" />
    </div>
      <ApodCard title={apodData.title} copyright={apodData.copyright} date={apodData.date} explanation={apodData.explanation} imgUrl={apodData.hdurl}/>
    </div>
  );
}

export default App;