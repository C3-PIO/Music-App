import { useState } from "react";
// import fetchRequests from "../services/fetchRequests";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap"; // Pre-created & styled components stored in 'bootstrap/dist/css/bootstrap.min.css'

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
      {/* creates search bar */}
      <InputGroup className="mt-3 mb-3" size="md">
        <FormControl // Text type input
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
          className="btn btn-default"
          onClick={() => {
            console.log("clicked button");
          }}
        >
          Search
        </Button>
      </InputGroup>
    </Container>
  );
}

export default Albums;
