import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";

const Feed = ({user}) => {
  const [post, setPost] = useState([]);
  const {user: authUser} = useAuth();

  async function fetchFeed() {
    try {
      const { data, status } = user ? await axios.get(
        `https://AstroConnect-Backend.pr1y4n5h.repl.co/posts/profile/${user}`) : await axios.get(`https://AstroConnect-Backend.pr1y4n5h.repl.co/posts/timeline/${authUser._id}`);  

      if (status === 200) {
        setPost(data.sort((a,b) => {
          return new Date(b.createdAt) - new Date(a.createdAt)
        }))
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchFeed()
  }, [user]);

  return (
    <div className="feed-container">
      <div className="feed-wrapper">
        {/* { user === authUser.find(user => ) && <Share />} */}
        <Share />
        {
          post?.map(item => (<Post key={item._id} post={item} /> ))
        }
      </div>
    </div>
  );
};

export default Feed;
