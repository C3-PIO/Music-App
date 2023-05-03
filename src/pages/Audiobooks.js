import { useState, useEffect } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Audiobooks({ token, books }) {
  
  const [searchInput, setSearchInput] = useState("");
  
  const [audiobooks, setAudiobooks] = useState([]);
  
  const randomBook = books[Math.floor(Math.random() * 10)];

  useEffect(() => {
    async function getRandom() {
      let response = await fetch(
        `https://api.spotify.com/v1/search?q=${randomBook}&type=audiobook&market=US`,
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
    getRandom();
  }, []);

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
    // console.log(data);
    setAudiobooks(data.audiobooks.items);
  }

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
      <Container className="px-2">
        <Row className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mx-3">
          {audiobooks.map((audiobook, index) => {
            return (
              <Card key={index} className="bg-dark p-0 my-1">
                <Card.Img src={audiobook.images[0].url} />
                <Card.Body className="bg-dark">
                  <Card.Title><Link to="/chapters">{audiobook.name}</Link></Card.Title>
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
