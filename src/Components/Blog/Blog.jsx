import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const { title, cover, author_img, posted_date, reading_time, hashtag } = blog;
  return (
    <div>
      <img
        className="w-full h-[450px]"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex mt-3 justify-between items-center">
        <div className="flex items-center gap-2">
          <div>
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div>
            <h4 className="text-2xl">{title}</h4>
            <span>{posted_date}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>{reading_time} min read</span>
          <button
            onClick={()=>handleAddToBookmark(blog)}
            className="text-red-600 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h3 className="mt-5 text-2xl font-bold">{title}</h3>
      <h5 className="text-base font-medium flex gap-2 mt-2">
        {hashtag.map((hash, idx) => (
          <span key={idx}>
            <a href="#">{hash}</a>
          </span>
        ))}
      </h5>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};

export default Blog;
