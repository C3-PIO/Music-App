import { useState } from "react";
// import fetchRequests from "../services/fetchRequests";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
  Row,
} from "react-bootstrap";

// audiobooks path: https://api.spotify.com/v1/audiobooks
// audiobook chapters path: https://api.spotify.com/v1/audiobooks/{id}/chapters

function Audiobooks({ token }) {
  // Holds user input in search bar
  const [searchInput, setSearchInput] = useState("");
  // Holds audiobooks data
  const [audiobooks, setAudiobooks] = useState([]);
  // Fetch audiobooks when called
  async function searchAudiobooks() {
    let response = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=audiobook&market=US`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setAudiobooks(data.audiobooks.items);
  }

  // Render data so the results display on Audiobooks Page
  return (
    <>
      <Container className="px-4">
        <InputGroup className="my-3 size-md">
          <FormControl
            placeholder="Search Audiobooks..."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                searchAudiobooks();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            variant="dark"
            onClick={() => {
              searchAudiobooks();
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      {/* Render data so the results display on Artists Page. Referenced: https://react-bootstrap.netlify.app/docs/components/cards */}
      <Container className="px-2">
        <Row className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mx-3">
          {audiobooks.map((audiobook, index) => {
            return (
              <Card key={index} className="bg-dark p-0 my-1">
                <Card.Img src={audiobook.images[0].url} />
                <Card.Body className="bg-dark">
                  <Card.Title>{audiobook.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Audiobooks;
