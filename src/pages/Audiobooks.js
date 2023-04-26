import { useState } from "react";

function Audiobooks() {
  // Holds audiobooks data
  const [audiobooks, setaudiobooks] = useState([]);
  // Fetch audiobooks when called
  async function searchaudiobooks() {
    let audiobooks = await fetch("*Audiobooks Path Url*");
    // Store data
    // setaudiobooks to data
  }

  // Render data so the results display on Audiobooks Page
  return <div>Audiobooks Page</div>;
}

export default Audiobooks;
