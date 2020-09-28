import React from 'react'

import { dispatch } from '../redux';

export default function CustomRedux() {
  
  return <>
    <h1>Custom Redux</h1>
    <br />
    <span>Check your console.</span><br />
    <button type="button" onClick={ () =>  dispatch({ type: `ADD_PROJECT`, payload: { projectName: `ATB's project ${Date.now()}` } }) }>ADD PROJECT</button><br />
    <button type="button" onClick={ () =>  dispatch({ type: `SET_FILTER`, payload: `ALL ${Date.now()}`  })}>SET FILTER</button><br />
  </>;
}