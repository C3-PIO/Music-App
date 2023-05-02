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
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const randomArr = [
  "Jay-Z",
  "Taylor Swift",
  "Ed Sheeran",
  "Kendrick Lamar",
  "Drake",
  "The Weeknd",
  "Justin Bieber",
  "Bad Bunny",
  "Ariana Grande",
  "Billie Eilish",
  "Eminem",
  "Post Malone",
  "Juice WRLD",
  "Doja Cat",
  "Rihanna",
  "Bruno Mars",
  "Dua Lipa",
  "J. Cole",
  "Imagine Dragons",
  "Coldplay",
];

const randomGenre = ["Dance", "Metal", "Party", "Rap", "Hip Hop", "Latin", "Alternative", "Indie", "Country"]

const randomBookArr = [
  "Stephen King",
  "J.K. Rowling",
  "William Shakespeare",
  "J.R.R. Tolkien",
  "Dr. Seuss",
  "George Orwell",
  "Ernest Hemingway",
  "R.L. Stine",
  "Roald Dahl",
  "Charles Dickens"
];

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

  return (
    <div className="App bg-dark">
      <Sidebar />
      <Container className="main p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/artists"
            element={<Artists token={accessToken} randomPerson={randomArr} />}
          />
          <Route
            path="/albums"
            element={<Albums token={accessToken} randomPerson={randomArr} />}
          />
          <Route
            path="/playlists"
            element={<Playlists token={accessToken} randomPlaylist={randomGenre} />}
          />
          <Route
            path="/podcasts"
            element={<Podcasts token={accessToken} randomPerson={randomArr} />}
          />
          <Route
            path="/audiobooks"
            element={<Audiobooks token={accessToken} books={randomBookArr} />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
