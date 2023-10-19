import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import About from "./About/About";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.posts}>
        <h1>Posts</h1>

        <textarea></textarea>

        <button>Send</button>
      </div>
    </div>
  );
};

export default Profile;
