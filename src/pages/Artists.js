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

// several artists path: https://api.spotify.com/v1/artists
// artists albums path: https://api.spotify.com/v1/artists/{id}/albums
// artists top tracks path: https://api.spotify.com/v1/artists/{id}/top-tracks

function Artists({ token }) {
  // Holds user input in search bar
  const [searchInput, setSearchInput] = useState("");
  // Holds artists data
  const [artists, setArtists] = useState([]);

  // Fetch artists when called. Referenced https://developer.spotify.com/documentation/web-api/howtos/web-app-profile for the 2nd paramter and https://developer.spotify.com/documentation/web-api/reference/search for query
  async function searchArtists() {
    let response = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist&limit=10`,
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
    setArtists(data.artists.items);
  }

  return (
    <>
      {/* Search component with button for user's search input  */}
      <Container className="px-4">
        <InputGroup className="my-3 size-md">
          <FormControl
            placeholder="Search Artists..."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                searchArtists();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            variant="dark"
            onClick={() => {
              searchArtists();
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      {/* Render data so the results display on Artists Page. Referenced: https://react-bootstrap.netlify.app/docs/components/cards */}
      <Container className="px-2">
        <Row className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mx-3">
          {artists.map((artist, index) => {
            return (
              <Card key={index} className="bg-dark p-0 my-1">
                <Card.Img
                  src={
                    artist.images[0] === undefined
                      ? require("../images/no-picture.png")
                      : artist.images[0].url
                  }
                />
                <Card.Body className="bg-dark">
                  <Card.Title>
                    {artist.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Artists;
