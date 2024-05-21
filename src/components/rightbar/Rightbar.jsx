import "./rightbar.css";
import { users } from "../../dummydata";
import Online from "../../components/online/Online.jsx"; // Corrected import
function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/p2.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/p3.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sharon</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/p4.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Nancy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/p5.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">David</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/p6.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sam</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
export default Rightbar;
