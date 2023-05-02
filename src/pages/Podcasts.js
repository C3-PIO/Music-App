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

// path: https://api.spotify.com/v1/shows

function Podcasts({ token }) {
  // Holds user input in search bar
  const [searchInput, setSearchInput] = useState("");
  // Holds podcasts data
  const [podcasts, setPodcasts] = useState([]);
  // Fetch podcasts when called
  async function searchPodcasts() {
    let response = await fetch(
      // `https://api.spotify.com/v1/search?q=${searchInput}&type=show&limit=50`,
      "https://api.spotify.com/v1/shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ",
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
    //   setPodcasts(data.shows.items);
  }

  // Render data so the results display on Podcasts Page
  return (
    <>
      <Container className="px-4">
        <InputGroup className="my-3 size-md">
          <FormControl
            placeholder="Search Podcasts..."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                searchPodcasts();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            variant="dark"
            onClick={() => {
              searchPodcasts();
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      {/* Render data so the results display on Artists Page. Referenced: https://react-bootstrap.netlify.app/docs/components/cards */}
      <Container className="px-2">
        <Row className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mx-3">
          {podcasts.map((podcast, index) => {
            return (
              <Card key={index} className="bg-dark p-0 my-1">
                <Card.Img src={podcast.images[0].url} />
                <Card.Body className="bg-dark">
                  <Card.Title>
                    {podcast.name}
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

export default Podcasts;
