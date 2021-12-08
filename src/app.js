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
import { useReducer } from 'react';
import History from './components/history/history'
import 'bootstrap/dist/css/bootstrap.min.css';


// API_LINK = https://pokeapi.co/api/v2/pokemon
// https://swapi.dev/api/people
// https://fruit-api-301.herokuapp.com/getFruit

const initialState=[]
const reducer = (state=initialState,action)=>
{
  let {type,payload} = action
if(type === 'history')
{
  state = [...state,payload]
    return state
}
else
{
    return state
}
}

const addToHistory = (url,method,results) =>{
return {
  type:'history',
  payload:{url,method,results}
}
}

export default function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({})
  const [history, dispatch] = useReducer(reducer, initialState)


  let callApi = async (requestParams) => {

    const response = await axios.get(requestParams.url)

    const data = {
      count: response.data.results.length,
      results: response.data.results,
    };
  
    setData(data)
    setRequestParams(requestParams)
    dispatch(addToHistory(requestParams.url,requestParams.method,requestParams.results))
  }

  useEffect(() => {
    setRequestParams(requestParams)
  }
    , [requestParams])


  return (
    <React.Fragment>
      <Header />

      <div class='main'>
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
      </div>
      <Form handleApiCall={callApi} />

      <Results data={data} />
      <History history={history}/>
      
      <Footer />
    </React.Fragment>
  );
}