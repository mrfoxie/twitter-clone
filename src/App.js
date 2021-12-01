import React from "react";
import "./App.css";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from './Widgets.js';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
