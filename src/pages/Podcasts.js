import { useState } from "react";

function Podcasts() {
  // Holds podcasts data
  const [podcasts, setpodcasts] = useState([]);
  // Fetch podcasts when called
  async function searchpodcasts() {
    let podcasts = await fetch("*Podcasts Path Url*");
    // Store data
    // setpodcasts to data
  }

  // Render data so the results display on Podcasts Page
  return <div>Podcasts Page</div>;
}

export default Podcasts;
