
import { useState } from 'react';
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Blogs from './components/Header/Blogs/Blogs';
import Header from './components/Header/Header';

function App() {
  const [bookmarks,setBookmarks] =useState([])
  const handleAddToBookmarks= blog =>{
    console.log('Bookmark adding soon')
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <main className='md:flex'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} ></Blogs>
        <Bookmarks></Bookmarks>
        </main>
    </div>
  );
}

export default App
