
import { useState } from 'react';
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Blogs from './components/Header/Blogs/Blogs';
import Header from './components/Header/Header';

function App() {
  const [bookmarks,setBookmarks] =useState([])
  const [readingTime,setReadingTime]=useState(0)
  const handleAddToBookmarks= blog =>{
    // console.log(blog)
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks);


    
  }
  const handleMarkAsRead = (time,id) =>{
    // console.log('mark as read',time)
    const newReadingTime =readingTime+time;
    setReadingTime(newReadingTime);
    //remove the read blog from book mark
    // console.log('remove bookmarks',id)
    const remainingBookmark= bookmarks.filter(bookmark => bookmark.id !== id )
    setBookmarks(remainingBookmark)
  }

  return (
    <div className='max-w-7xl mt-5 mx-auto'>
      <Header></Header>
      <main className='md:flex  mt-5'>
        <Blogs 
        handleAddToBookmarks={handleAddToBookmarks}
        handleMarkAsRead={handleMarkAsRead}

         ></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}
         ></Bookmarks>
        </main>
    </div>
  );
}

export default App
