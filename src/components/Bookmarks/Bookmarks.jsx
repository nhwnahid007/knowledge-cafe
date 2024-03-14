import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  console.log(readingTime)
  return (
    <div className="md:w-1/3">
      <div className="text-4xl text-center">Reading time: {readingTime}</div>
    <h2 className="text-4xl text-center">Book marks: {bookmarks.length}</h2>
    {
      bookmarks.map((bookmark,id) => 
      <Bookmark 
      key={id}
       bookmark={bookmark}
       
       ></Bookmark>)
    }
  </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks
