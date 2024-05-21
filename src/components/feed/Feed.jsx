import Share from "../../components/share/Share.jsx";
import Post from "../post/Post.jsx";
import "./feed.css";
import { posts } from "../../dummydata.js";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
