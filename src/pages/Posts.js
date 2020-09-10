import React, { useState, useEffect, useRef, memo, useContext } from 'react';
import axios from 'axios';

import BackgroundColorContext from '../contexts/BackgroundColorContext';

const Post = memo(({ postBody }) => {
  const { backgroundColor } = useContext(BackgroundColorContext);

  return <span style={{backgroundColor}}>{postBody}</span>;
}); //

export default function Posts() {
  const inputRef = useRef(null);
  const [filter, setFilter] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.request('https://jsonplaceholder.typicode.com/posts').then(({ data }) => setPosts(data));
  }, []);

  console.log(filter);

  const handleFilterClick = () => {
    setFilter(inputRef.current.value);
    console.log(`setFilter('${inputRef.current.value}')`);
  };

  return <>
    <h1>Posts</h1>
    <input ref={inputRef} type="text" /> 
    <button onClick={handleFilterClick}>Filter</button>
    <br />
    { posts.map(({ id, body }) => <Post key={id} postBody={body} />) }
  </>;
}