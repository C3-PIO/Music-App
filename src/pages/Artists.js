import { useState } from "react";

function Artists(token) {
  // Holds artists data 
  const [artists, setArtists] = useState([]);
  // Fetch artists when called
  async function searchArtists() {
    let artists = await fetch("*Artists Path Url*")
    // Store data
    // setArtists to data 
  }
  
  // Render data so the results display on Artists Page 
  return <div>Artists Page</div>;
}

export default Artists;
