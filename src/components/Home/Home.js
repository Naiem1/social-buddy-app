import React, { useState, useEffect } from 'react';
import './Home.css'
import Posts from '../Posts/Posts';

const Home = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: 'auto', justifyContent: 'center'}}>
        {
          posts.map(post => <Posts key={post.id} post ={post}></Posts>)
        }
    </div>
  );
};

export default Home;