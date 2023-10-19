import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import LeftBar from "./Components/leftBar/LeftBar";
import NewFeeds from "./Components/NewFeeds/NewFeeds";
import Messages from "./Components/Messages/Messages";
import Friends from "./Components/Friends/Friends";
import Profile from "./Components/Profile/Profile";

function App(props) {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <main className="main">
          <LeftBar />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
