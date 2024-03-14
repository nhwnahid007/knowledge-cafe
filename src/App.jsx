
import { useState } from 'react';
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Blogs from './components/Header/Blogs/Blogs';
import Header from './components/Header/Header';

function App() {
  const [bookmarks,setBookmarks] =useState([])
  const [reading]
  const handleAddToBookmarks= blog =>{
    // console.log(blog)
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks)
  }

  return (
    <div className='max-w-7xl mt-5 mx-auto'>
      <Header></Header>
      <main className='md:flex  mt-5'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} ></Blogs>
        <Bookmarks bookmarks={bookmarks} ></Bookmarks>
        </main>
    </div>
  );
}

export default App
