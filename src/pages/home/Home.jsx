import Topbar from "../../components/Topbar.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import "./home.css";

function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
