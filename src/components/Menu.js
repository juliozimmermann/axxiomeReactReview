import React from 'react';

import { Link } from 'react-router-dom';

export default function Menu() {
  return <ul>
    <li>
      <Link to="/">Dashboard</Link>
    </li>
    <li>
      <Link to="/projects">Projecs</Link>
    </li>
    <li>
      <Link to="/posts">Posts (memo, userRef, useContext)</Link>
    </li>
    <li>
      <Link to="/stateCounter">Counter (useState, useCallback)</Link>
    </li>
    <li>
      <Link to="/reducerCounter">Counter (Reducer, useCallback)</Link>
    </li>
    <li>
      <Link to="/customRedux">Custom Redux</Link>
    </li>
  </ul>
}