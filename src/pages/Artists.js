import { useState } from "react";
// import fetchRequests from "../services/fetchRequests";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

// several artists path: https://api.spotify.com/v1/artists
// artists albums path: https://api.spotify.com/v1/artists/{id}/albums
// artists top tracks path: https://api.spotify.com/v1/artists/{id}/top-tracks

function Artists(token) {
    // Holds user input in search bar
  const [searchInput, setSearchInput] = useState("");
  // Holds artists data 
  const [artists, setArtists] = useState([]);
  // Fetch artists when called
  async function searchArtists() {
    let artists = await fetch("*Artists Path Url*")
    // Store data
    // setArtists to data 
  }
  
  // Render data so the results display on Artists Page 
  return (
    <Container>
      <InputGroup className="mt-3 mb-3" size="md">
        <FormControl
          placeholder="Search artists by name or genre"
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

export default Artists;
