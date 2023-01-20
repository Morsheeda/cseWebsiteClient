import "./PostsInHome.css";
import PostInHome from "../postInHome/PostInHome";

export default function PostsInHome({posts}) {
  console.log(posts);
  return (
    <div className="postsInHome">
      {posts.map((p) =>(
         <PostInHome post={p}/>
      )).reverse()}
     
      
    </div>
  );
}