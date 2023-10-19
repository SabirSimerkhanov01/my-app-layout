import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={s.posts}>
      <div>
        <p>Post: {props.post}</p>
        <p>Date: {props.date}</p>
        <p>Time: {props.time}</p>
        <p>Id: {props.id}</p>
      </div>
    </div>
  );
};

export default Posts;
