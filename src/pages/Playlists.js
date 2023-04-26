import { useState } from "react";

function Playlists() {
  // Holds playlists data
  const [playlists, setplaylists] = useState([]);
  // Fetch playlists when called
  async function searchplaylists() {
    let playlists = await fetch("*Playlists Path Url*");
    // Store data
    // setplaylists to data
  }

  // Render data so the results display on Playlists Page
  return <div>Playlists Page</div>;
}

export default Playlists;
