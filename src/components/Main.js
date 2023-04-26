import React from "react";
import { Route, Routes } from "react-router-dom";
import Playlists from "../pages/Playlists";
import Artists from "../pages/Artists";
import Albums from "../pages/Albums";
import Home from "../pages/Home";
import Podcasts from "../pages/Podcasts";
import Audiobooks from "../pages/Audiobooks";

//Main component that houses all other pages
function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/audiobooks" element={<Audiobooks />} />
      </Routes>
    </div>
  );
}

export default Main;
