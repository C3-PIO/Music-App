import { useState } from "react";
// import fetchRequests from "../services/fetchRequests";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

// audiobooks path: https://api.spotify.com/v1/audiobooks
// audiobook chapters path: https://api.spotify.com/v1/audiobooks/{id}/chapters

function Audiobooks() {
   // Holds user input in search bar
  const [searchInput, setSearchInput] = useState("");
  // Holds audiobooks data
  const [audiobooks, setaudiobooks] = useState([]);
  // Fetch audiobooks when called
  async function searchaudiobooks() {
    let audiobooks = await fetch("*Audiobooks Path Url*");
    // Store data
    // setaudiobooks to data
  }

  // Render data so the results display on Audiobooks Page
  return (
    <Container>
      <InputGroup className="mb-3" size="md">
        <FormControl
          placeholder="Search audiobooks by name or genre"
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

export default Audiobooks;
