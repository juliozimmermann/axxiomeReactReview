import React from 'react';

export default function Header({ title, logo, children, ...restOfProps }) {
  return <>
        <h1>{title} { logo && <img src={logo} /> } </h1>
        {children}
      </>;
}