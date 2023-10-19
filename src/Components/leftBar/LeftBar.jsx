import React from "react";
import s from "./LeftBar.module.css";
import { NavLink } from "react-router-dom";
import tv from "../../imgs/tv.svg";
import medal from "../../imgs/medal.svg";
import message2 from "../../imgs/message2.svg";
import human from "../../imgs/human.svg";

const LeftBar = () => {
  return (
    <div className={s.leftBar}>
      <div className={s.newFeeds}>
        <h2 className={s.title}>New Feeds</h2>

        <div className={s.newFeed}>
          Profile
        </div>

        <div className={s.newFeed}>
          Newsfeed
        </div>

        <div className={s.newFeed}>
          Friends
        </div>

        <div className={s.newFeed}>
          Messages
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
