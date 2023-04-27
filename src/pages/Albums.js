import { useState } from "react";
// import fetchRequests from "../services/fetchRequests";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

// path: https://api.spotify.com/v1/albums

function Albums(search) {
  // Holds user input in search bar
  const [searchInput, setSearchInput] = useState("");
  // Holds albums data
  const [albums, setAlbums] = useState([]);
  // Fetch albums when called
  async function searchAlbums() {
    let albums = await fetch("*Albums Path Url*");
    // Store data
    // setAlbums to data
  }

  // Render data so the results display on Albums Page
  return (
    <Container>
      <InputGroup className="mb-3" size="md">
        <FormControl
          placeholder="Search albums by name or genre"
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
  );
}

export default Albums;
