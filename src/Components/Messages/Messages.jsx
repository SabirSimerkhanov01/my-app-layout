import React from "react";
import s from "./Messages.module.css";

const Messages = (props) => {

  return (
    <div className={s.messages}>
      <div className={s.contacts}>
        <h1 className={s.title}>Contacts</h1>

      </div>

      <div className={s.dialogs}>
        <h1 className={s.title}>Dialogs</h1>

      </div>
    </div>
  );
};

export default Messages;
