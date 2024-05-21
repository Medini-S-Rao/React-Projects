import "./closefriend.css";
function Closefriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img src={user.profilepicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

export default Closefriend;
