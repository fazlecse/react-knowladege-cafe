import PropTpyes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-slate-200 p-2">
      <h3 className="font-bold text-2xl">
        Bookmarked Blogs: {bookmarks.length}{" "}
      </h3>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTpyes.array,
};
export default Bookmarks;
