import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

// API_LINK = https://pokeapi.co/api/v2/pokemon

export default function App(){

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({})


  let callApi = async (requestParams) => {
    // mock output
    const response = await axios.get(requestParams.url)

    const data = {
      count: response.data.results.length,
      results: response.data.results,
    };
    setData(data)
    setRequestParams(requestParams)
  }


  useEffect(()=>
  {
    setRequestParams(requestParams)
  }
  ,[requestParams])

  return (
    <React.Fragment>
      <Header />
      <div class='main'>
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      </div>
      <Form handleApiCall={callApi} />

      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}