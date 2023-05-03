import { useEffect, useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
  Row,
} from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";

function Artists({ token, randomPerson }) {
  
  const [searchInput, setSearchInput] = useState("");
  
  const [artists, setArtists] = useState([]);

  const random = randomPerson[Math.floor(Math.random() * 20)];

  useEffect(() => {
    async function getRandom() {
      let response = await fetch(
        `https://api.spotify.com/v1/search?q=${random}&type=artist`,
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
    getRandom();
  }, []);

  async function searchArtists() {
    let response = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist&limit=50`,
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
    setArtists(data.artists.items);
  }

  return (
    <>
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
                  <Link to="/albums">{artist.name}</Link>
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
