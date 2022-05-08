import './App.css';
import React from 'react';
import Header from './components/header/header.js'
import Post from './components/post/post.js'
import Feed from './components/feed/feed.js'
import Sidebar from './components/sidebar/sidebar.js'

function App() {

  return (
    <div className='Header'>
      <Header />
      <div className='container__home'>
        <section className='home'>
          <Feed />
          <Sidebar />
        </section>
      </div>

    </div>
  );
}

export default App;
