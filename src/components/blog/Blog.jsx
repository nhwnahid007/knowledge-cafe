import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
    // console.log(blog)
    const {id, title, cover, author, author_img, reading_time, posted_date,hashtags } =
      blog;
      // console.log(id)

    //  const [a,b,c]=hashtags;
    return (
      <div className="my-10">
        <img
          className="h-[450px] w-[845px]"
          src={cover}
          alt={`Cover picture of the title ${title}`}
        />
        <div className="flex justify-between  mt-8">
          <div className="flex ">
            <img
              className="rounded-full w-[60px] h-[60px]"
              src={author_img}
              alt={`Picture of author ${title}`}
            />
            <div className="ml-6">
              <h2 className="text-2xl ">{author}</h2>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className="flex  mr-3 items-center gap-2">
            <span>{reading_time} min read</span>
            <button onClick={()=>handleAddToBookmarks(blog)}>
              < CiBookmark />
            </button>
          </div>
        </div>
        <h2 className="text-2xl mt-4">{title}</h2>
        {/* <p className="">#{a} #{b} #{c}</p> */}
        <p>
          {hashtags.map((hash, idx) => (
            <span key={idx} className="p-2">
              <a href="">#{hash}</a>
            </span>
          ))}
        </p>
        <br />
        <button onClick={()=>{handleMarkAsRead(reading_time,id)}} className='text-purple-800 font-bold underline'>Mark as Read</button>
      </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};
export default Blog;