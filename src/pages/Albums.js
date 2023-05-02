import { useState, useEffect } from "react";
// import fetchRequests from "../services/fetchRequests";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
  Row,
} from "react-bootstrap"; // Pre-created & styled components stored in 'bootstrap/dist/css/bootstrap.min.css'

// path: https://api.spotify.com/v1/albums

function Albums({ token, randomPerson }) {
  // Holds user input in search bar
  const [searchInput, setSearchInput] = useState("");
  // Holds albums data
  const [albums, setAlbums] = useState([]);
  const random = randomPerson[Math.floor(Math.random() * 20)];
  useEffect(() => {
    async function getRandom() {
      let response = await fetch(
        `https://api.spotify.com/v1/search?q=${random}&type=album&limit=50`,
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
      setAlbums(data.albums.items);
    }
    getRandom();
  }, []);

  // Fetch albums when called
  async function searchAlbums() {
    let response = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=album&limit=50`,
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
    setAlbums(data.albums.items);
  }
  // console.log(random)

  // Render data so the results display on Albums Page
  return (
    <>
      <Container className="px-4">
        {/* creates search bar */}
        <InputGroup className="my-3 size-md">
          <FormControl // Text type input
            placeholder="Search Albums..."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                searchAlbums();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            variant="dark"
            onClick={() => {
              searchAlbums();
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      {/* Render data so the results display on Artists Page. Referenced: https://react-bootstrap.netlify.app/docs/components/cards */}
      <Container className="px-2">
        <Row className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mx-3">
          {albums.map((album, index) => {
            return (
              <Card key={index} className="bg-dark p-0 my-1">
                <Card.Img src={album.images[0].url} />
                <Card.Body className="bg-dark">
                  <Card.Title className="">{album.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Albums;
