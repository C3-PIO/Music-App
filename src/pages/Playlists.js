import { useState } from "react";
// import fetchRequests from "../services/fetchRequests";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

// path: https://api.spotify.com/v1/playlists/{playlist_id}

function Playlists() {
    // Holds user input in search bar
  const [searchInput, setSearchInput] = useState("");
  // Holds playlists data
  const [playlists, setplaylists] = useState([]);
  // Fetch playlists when called
  async function searchplaylists() {
    let playlists = await fetch("*Playlists Path Url*");
    // Store data
    // setplaylists to data
  }

  // Render data so the results display on Playlists Page
  return (
    <Container>
      <InputGroup className="mt-3 mb-3" size="md">
        <FormControl
          placeholder="Search playlists by name, genre, or category"
          type="input"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              console.log("Pressed enter");
            }
          }}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <Button
          onClick={() => {
            console.log("clicked enter");
          }}
        >
          Search
        </Button>
      </InputGroup>
    </Container>
  )
}

export default Playlists;
