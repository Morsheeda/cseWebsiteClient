import "./PostInHome.css";
import { Link } from "react-router-dom";

export default function PostInHome({ post }) {
  const PP = "http://localhost:5000/images/";
  return (
    <Link to={`/post/${post._id}`} className="link">
      <div className="postInHome">
        <div className="postInHomeImgWrapper">
          {post.photo && <img className="postInHomeImg" src={PP + post.photo} alt="" />}
        </div>
        <div className="postInHomePostWrapper">
          <div className="postInHomeInfo">
            <div className="postInHomeCats">
              {post.categories.map((c) => (
                <span className="postInHomeCat">{c.name}</span>
              ))}
            </div>
            <h4 className="postInHomeTitle">{post.title}</h4>
            {/* <hr /> */}
            <div className="authorDate">
              <span className="postInHomeAuthor">
                By {post.author}
              </span>
              <span className="postInHomeDate">
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
          </div>
          {/* <p className="postInHomeDesc">{post.desc}</p> */}
          <p className="postInHomeDesc" dangerouslySetInnerHTML={{ __html: post.desc }}></p>
        </div>
      </div>
    </Link>
  );
}