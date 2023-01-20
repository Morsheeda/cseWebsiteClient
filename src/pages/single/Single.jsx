import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import TopBar from "../../components/topbar/Topbar";
import "./single.css";

export default function Single() {
  return (
    <>
      <TopBar />
      <div className="single">
        <div className="singlePostInSingle">
          <SinglePost />
        </div>
        <div className="sidebarInSingle">
          <div className="insideOfSidebarInSingle">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}