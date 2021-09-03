import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Profile.style.css";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useScrollToTop } from "../../Hooks/UseScrollToTop";

const Profile = () => {
  const [user, setUser] = useState([]);
  const {id} = useParams();

  useScrollToTop()


   async function fetchFeed() {
    try {
      const { data, status } = await axios.get(
        `https://AstroConnect-Backend.pr1y4n5h.repl.co/user/${id}`
      );

      if (status === 200) {
        setUser(data)
        console.log(data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchFeed()
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-top">
            <div className="profile-cover">
              <img
                src="assets/img4.jpg"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <div className="profile-pic">
                <span>{user?.username?.charAt(0)?.toUpperCase()}</span>
              </div>
            </div>

            <div className="profile-info">
              <h4 className="text-xl font-extrabold font-sans">{(user?.username)?.charAt(0)?.toUpperCase() + (user?.username)?.slice(1)}</h4>
              <span className="text-lg font-light font-sans"> {user?.bio} </span>
            </div>
          </div>
          <div className="profile-bottom">
            <Feed user={id} />
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
