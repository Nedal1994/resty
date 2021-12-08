import React from 'react';
import './results.scss'
import Spinner from 'react-bootstrap/Spinner'

export default function Results(data)
{
  return (
    <section>
      <pre>{data.data ? JSON.stringify(data, undefined, 2) : <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>}</pre>
    </section>
  );
}