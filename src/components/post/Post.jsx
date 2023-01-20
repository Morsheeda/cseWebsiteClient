import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PP = "http://localhost:5000/images/";
  return (
    <Link to={`/post/${post._id}`} className="link">
      <div className="post">
        {post.photo && <img className="postImg" src={PP + post.photo} alt="" />}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
          </div>
          <span className="postTitle">{post.title}</span>
          {/* <hr /> */}
          <div className="authorDate">
            <span className="postAuthor">
              By {post.author}
            </span>
            <span className="postDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
        </div>
        <p className="postDesc" dangerouslySetInnerHTML={{ __html: post.desc }}></p>
      </div>
    </Link>
  );
}