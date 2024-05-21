import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/Profile");
  };
  const handleHomeClick = () => {
    navigate("/Home");
  };
  const handlelogin = () => {
    navigate("/");
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">TribeTide</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, posts, or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={handleHomeClick}>
            Homepage
          </span>
          <span className="topbarLink" onClick={handlelogin}>
            Log Out
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img
          src="/assets/person/p1.webp"
          alt=""
          className="topbarImg"
          onClick={handleProfileClick}
        />
      </div>
    </div>
  );
}

export default Topbar;
