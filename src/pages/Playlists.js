import { useState, useEffect } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
  Row,
} from "react-bootstrap";

function Playlists({ token, randomPlaylist }) {
  
  const [searchInput, setSearchInput] = useState("");
  
  const [playlists, setPlaylists] = useState([]);

  const random = randomPlaylist[Math.floor(Math.random() * 9)];

  useEffect(() => {
    async function getRandom() {
      let response = await fetch(
        `https://api.spotify.com/v1/search?q=${random}&type=playlist&limit=50`,
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
      setPlaylists(data.playlists.items);
    }
    getRandom();
  }, []);

  async function searchPlaylists() {
    let response = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=playlist&limit=50`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    setPlaylists(data.playlists.items);
  }

  return (
    <>
      <Container className="px-4">
        <InputGroup className="my-3 size-md">
          <FormControl
            placeholder="Search Playlists..."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                searchPlaylists();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            variant="dark"
            onClick={() => {
              searchPlaylists();
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container className="px-2">
        <Row className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mx-3">
          {playlists.map((playlist, index) => {
            return (
              <Card key={index} className="bg-dark p-0 my-1">
                <Card.Img src={playlist.images[0].url} />
                <Card.Body className="bg-dark">
                  <Card.Title>{playlist.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Playlists;
