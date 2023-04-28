import "./App.css";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Playlists from "./pages/Playlists";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Home from "./pages/Home";
import Podcasts from "./pages/Podcasts";
import Audiobooks from "./pages/Audiobooks";
import { Container } from "react-bootstrap";

const CLIENT_ID = "60c47a0b477d4b39b816055486254ba8";
const CLIENT_SECRET = '752bc4f87bcb47849e18236ae29fcf13'

function App() {
  // Holds token
  const [accessToken, setAccessToken] = useState("");

  // Fetchs token and sets it so that API requests can be made
  useEffect(() => {
    // NEED TO ADD ERROR HANDLING?????
    async function fetchData() {
      // CREDIT: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      // 2nd parameter is required per Spotify API
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      });
      const data = await response.json();
      setAccessToken(data.access_token);
    }
    fetchData();
  }, []);

  // console.log(accessToken);

  return (
    <div className="App bg-dark">
      <Sidebar />
      <Container className="main p-0">
      <Routes>
        <Route path="/" element={<Home token={accessToken}/>} />
        <Route path="/artists" element={<Artists token={accessToken}/>} />
        <Route path="/albums" element={<Albums token={accessToken}/>} />
        <Route path="/playlists" element={<Playlists token={accessToken}/>} />
        <Route path="/podcasts" element={<Podcasts token={accessToken}/>} />
        <Route path="/audiobooks" element={<Audiobooks token={accessToken}/>} />
      </Routes>
    </Container>
    </div>
  );
}

export default App;
