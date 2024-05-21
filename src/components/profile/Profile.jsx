import "./profile.css";
import Topbar from "../../components/Topbar.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";

function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/posts/po6.png"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/person/p1.webp"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Medini Rao</h4>
              <span className="profileIndoDesc">Top of the world!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
