import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import ApodCard from "./components/ApodCard";
import renderer from "react-test-renderer";

describe('swag', () => {
  it ('swagggggg', () => {
    const tree = renderer.create(<ApodCard />).toJSON();

    expect(tree).toMatchSnapshot();
  })  
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

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
  <>
    <GlobalStyle />
    <CardContainer>
      <DatePicker>
        <h2>Pick your date to visit:</h2>
        <input onChange={e => setDate(e.target.value)} type="date" />
      </DatePicker>
        <ApodCard title={apodData.title} copyright={apodData.copyright} date={apodData.date} explanation={apodData.explanation} imgUrl={apodData.hdurl}/>
      </CardContainer>
    </>
  );
}

export default App;