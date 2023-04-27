import { useState } from "react";
// import fetchRequests from "../services/fetchRequests";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

// path: https://api.spotify.com/v1/shows

function Podcasts() {
    // Holds user input in search bar
  const [searchInput, setSearchInput] = useState("");
  // Holds podcasts data
  const [podcasts, setpodcasts] = useState([]);
  // Fetch podcasts when called
  async function searchpodcasts() {
    let podcasts = await fetch("*Podcasts Path Url*");
    // Store data
    // setpodcasts to data
  }

  // Render data so the results display on Podcasts Page
  return (
    <Container>
      <InputGroup className="mb-3" size="md">
        <FormControl
          placeholder="Search podcasts by name"
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

export default Podcasts;
