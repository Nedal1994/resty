import React from 'react';
import { useState } from 'react';

import './form.scss';

// API_LINK = 'https://pokeapi.co/api/v2/pokemon'

export default function Form(props) {

  const [data, setData] = useState('get');

  const getData = e => {
    e.preventDefault()
    setData(e.target.id)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let results = {
      method: data,
      url: e.target.url.value
    }

    console.log(results);
    props.handleApiCall(results)
    
  }

  return (

    <form onSubmit={handleSubmit} data-testid='form'>
      <label >
        <span>URL: </span>
        <input name='url' type='text' />
        <button data-testid='submit-button' type="submit">GO!</button>
      </label>
      <label className="methods">
        <span data-testid='get-button' onClick={() => { getData }} id="get">GET</span>

        <span data-testid='post-button' onClick={() => { setData('post') }} id="post">POST</span>

        <span data-testid='put-button' onClick={() => { setData('put') }} id="put">PUT</span>

        <span data-testid='delete-button' onClick={() => { setData('delete') }} id="delete">DELETE</span>

      </label>
    </form>

  );
}