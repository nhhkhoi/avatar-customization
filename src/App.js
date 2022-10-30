import React, { useState } from "react";
import "./App.css";
import PartList from "./components/PartList";
import Avatar from "./components/Avatar";

function App() {
  return (
    <div>
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <Avatar />
        <PartList partListName="Body" partListURL="character/body" />
      </div>
    </div>
  );
}

export default App;
