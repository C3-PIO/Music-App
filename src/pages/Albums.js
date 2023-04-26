import { useState } from "react";

function Albums(token) {
  // Holds albums data
  const [albums, setAlbums] = useState([]);
  // Fetch albums when called
  async function searchAlbums() {
    let albums = await fetch("*Albums Path Url*");
    // Store data
    // setAlbums to data
  }

  // Render data so the results display on Albums Page
  return <div>Albums Page</div>;
}

export default Albums;
